#!/usr/bin/env node
// Applies Drizzle SQL migrations to a D1 database in journal order.
// Wrangler 4.92 has no usable `migrations_dir` support, so this script keeps
// its own ledger table and skips migrations that were already applied.
import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);

function flag(name) {
  return args.includes(name);
}

function option(name, fallback) {
  const index = args.indexOf(name);
  return index === -1 ? fallback : args[index + 1];
}

const target = flag("--local") ? "--local" : "--remote";
const config = resolve(projectRoot, option("--config", "dist/server/wrangler.json"));
const database = option("--database", "DB");
const extra = [];
const persistTo = option("--persist-to");
if (persistTo) extra.push("--persist-to", resolve(projectRoot, persistTo));

const wranglerBin = join(
  projectRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "wrangler.cmd" : "wrangler",
);

if (!existsSync(wranglerBin)) {
  console.error("[migrate] wrangler is not installed; run npm ci first.");
  process.exit(1);
}

if (!existsSync(config)) {
  console.error(`[migrate] Missing deploy config: ${config}`);
  console.error("[migrate] Run `npm run build` before applying migrations.");
  process.exit(1);
}

function run(argv, { json = false } = {}) {
  const result = spawnSync(
    wranglerBin,
    ["d1", "execute", database, target, ...extra, "--config", config, ...argv],
    { cwd: projectRoot, encoding: "utf8" },
  );
  if (result.error) throw result.error;
  if (result.status !== 0) {
    process.stderr.write(result.stderr ?? "");
    process.stderr.write(result.stdout ?? "");
    process.exit(result.status ?? 1);
  }
  if (!json) return null;
  return parseJsonOutput(result.stdout ?? "");
}

function parseJsonOutput(output) {
  const start = output.indexOf("[");
  const end = output.lastIndexOf("]");
  if (start === -1 || end < start) return [];
  try {
    return JSON.parse(output.slice(start, end + 1));
  } catch {
    return [];
  }
}

function query(sql) {
  const parsed = run(["--json", "--command", sql], { json: true });
  return parsed.flatMap((entry) => entry?.results ?? []);
}

run([
  "--command",
  "CREATE TABLE IF NOT EXISTS app_migrations (id TEXT PRIMARY KEY, applied_at INTEGER NOT NULL)",
]);

const applied = new Set(
  query("SELECT id FROM app_migrations").map((row) => String(row.id)),
);

const journal = JSON.parse(
  readFileSync(join(projectRoot, "drizzle", "meta", "_journal.json"), "utf8"),
);

// Existing deployments predate the ledger table. Detect the tables those
// migrations created and record them as applied instead of failing on
// "table already exists".
if (applied.size === 0) {
  const tables = new Set(
    query("SELECT name FROM sqlite_master WHERE type = 'table'").map((row) =>
      String(row.name),
    ),
  );
  const probes = {
    "0000_romantic_cable": () =>
      tables.has("books") && tables.has("progress"),
    "0001_light_junta": () =>
      query("SELECT name FROM pragma_table_info('books')").some(
        (row) => String(row.name) === "last_read_at",
      ),
    "0002_exotic_forgotten_one": () =>
      tables.has("online_rules") && tables.has("online_records"),
    "0003_reader_storage": () =>
      tables.has("reader_objects") && tables.has("reader_chunks"),
  };

  for (const entry of journal.entries ?? []) {
    const probe = probes[entry.tag];
    if (!probe || !probe()) break;
    console.log(`[migrate] Recording existing migration ${entry.tag}`);
    run([
      "--command",
      `INSERT OR IGNORE INTO app_migrations (id, applied_at) VALUES ('${entry.tag}', ${Date.now()})`,
    ]);
    applied.add(entry.tag);
  }
}

let count = 0;
for (const entry of journal.entries ?? []) {
  const id = entry.tag;
  if (applied.has(id)) continue;

  const file = join(projectRoot, "drizzle", `${id}.sql`);
  if (!existsSync(file)) {
    console.error(`[migrate] Missing migration file: ${file}`);
    process.exit(1);
  }

  console.log(`[migrate] Applying ${id}`);
  run(["--file", file]);
  run([
    "--command",
    `INSERT OR IGNORE INTO app_migrations (id, applied_at) VALUES ('${id.replace(/'/g, "''")}', ${Date.now()})`,
  ]);
  count += 1;
}

console.log(
  count === 0
    ? "[migrate] Database is up to date."
    : `[migrate] Applied ${count} migration(s).`,
);
