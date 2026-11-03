# 部署到 Cloudflare Workers

推送 `main` 后，GitHub Actions 会自动构建、迁移 D1 并发布 Worker。书籍原文件和封面也存放在 D1（gzip 后按 64 KB 分块），因此**不需要开通 R2，也不需要绑定银行卡**。

> 现有的 `*.chatgpt.site` 站点仍由 ChatGPT Sites 平台发布，该平台没有 GitHub 部署接口。下面的流程是独立的 Cloudflare 部署，不会覆盖原站点。

## 工作方式

- `books` / `progress`：书库列表与阅读进度
- `reader_objects` / `reader_chunks`：书籍原文件与封面（gzip → 64 KB 分块 → base64）
- `reader_login_attempts`：访问口令失败次数限制
- 登录：访问口令 + 30 天有效的 HMAC 签名 Cookie；所有 `/api/*` 接口都会校验

这套表结构与当前线上书库一致，已有书籍可以直接读取。

## 一次性准备

1. **D1**：`npx wrangler d1 create saya-reader-db`，记下 Database ID（本仓库当前使用的库是 `1991a22b-b117-4374-8895-08c8392d0af0`）。
2. **访问口令**：建议至少 12 位，仅自己保存。

## 首次手动部署

```bash
export CLOUDFLARE_D1_DATABASE_ID=<D1 Database ID>
export CLOUDFLARE_WORKER_NAME=saya-novel-reader
export CLOUDFLARE_R2_DISABLED=1

npm run build
node scripts/migrate.mjs --remote

printf '%s' '<你的访问口令>' | npx wrangler secret put READER_PASSCODE --config dist/server/wrangler.json
npm run deploy
```

部署完成后 `wrangler` 会输出 `https://saya-novel-reader.<子域>.workers.dev`，打开后用口令登录。

## 开启推送自动部署

1. 创建 API Token：Cloudflare 控制台 → My Profile → API Tokens → Create Token，权限：
   - Account · Workers Scripts · Edit
   - Account · D1 · Edit
   - Account · Account Settings · Read
2. GitHub 仓库 → Settings → Secrets and variables → Actions：

   | 类型 | 名称 | 值 |
   | --- | --- | --- |
   | Secret | `CLOUDFLARE_API_TOKEN` | 上一步的 Token |
   | Secret | `CLOUDFLARE_ACCOUNT_ID` | 账号 ID |
   | Secret | `READER_PASSCODE` | 访问口令 |
   | Variable | `CLOUDFLARE_D1_DATABASE_ID` | D1 Database ID |
   | Variable | `CLOUDFLARE_WORKER_NAME` | `saya-novel-reader`（可省略） |

3. 每次推送 `main`，`.github/workflows/deploy.yml` 会依次：
   - `npm ci` + `npm run build`
   - `node scripts/migrate.mjs --remote`（只执行未应用的迁移）
   - 更新 `READER_PASSCODE` 密钥
   - `wrangler deploy`

也可以在 Actions 页面手动触发（workflow_dispatch）。

## 日常维护

- **改数据库结构**：修改 `db/schema.ts` 后运行 `npm run db:generate`，生成新的 `drizzle/000N_*.sql` 并提交，自动部署会应用它。
- **改口令**：更新 GitHub 的 `READER_PASSCODE` Secret 后重新部署。
- **回滚**：`npx wrangler rollback --config dist/server/wrangler.json`，或在 Cloudflare 控制台的 Deployments 里选历史版本。
- **自定义域名**：Cloudflare 控制台 → Workers → 选择 Worker → Settings → Domains & Routes 绑定。

## 容量与限制

- D1 单库上限 10 GB。当前 4 本书约占用 25 MB（压缩后）。
- 应用限制单本书 50 MB；上传时会一次性读入内存再压缩，50 MB 文件在 Worker 默认 128 MB 内存内可以完成。
- 首次打开大文件时按页读取分块，不会一次性把整本书载入内存。

## 与 ChatGPT Sites 登录的区别

- ChatGPT Sites：由平台注入 `oai-authenticated-user-*` 请求头，站点访问依赖平台分享设置。
- Cloudflare Workers：使用 `READER_PASSCODE` 口令登录，服务端签发 30 天有效的 HMAC 签名 Cookie，并对失败尝试按 IP 限流。
- 口令登录优先于平台身份头：配置了 `READER_PASSCODE` 后，伪造 `oai-authenticated-user-*` 请求头无法绕过登录。
