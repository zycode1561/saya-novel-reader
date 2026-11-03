import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { safeRelativeReturnPath } from "../chatgpt-auth";
import { isAuthorized, passcodeConfigured } from "@/lib/session";

export const dynamic = "force-dynamic";

type UnlockSearchParams = Promise<Record<string, string | string[] | undefined>>;

function firstValue(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] ?? "" : value ?? "";
}

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: UnlockSearchParams;
}) {
  const params = await searchParams;
  const returnTo = safeRelativeReturnPath(firstValue(params.return_to) || "/");
  const requestHeaders = await headers();

  if (await isAuthorized(requestHeaders)) redirect(returnTo);

  const configured = await passcodeConfigured();

  const error = firstValue(params.error);
  const message =
    error === "wrong"
      ? "口令不正确，请重试。"
      : error === "locked"
        ? "尝试次数过多，请 10 分钟后再试。"
        : error === "unconfigured"
          ? "站点尚未配置访问口令，请在部署时设置 READER_PASSCODE。"
          : "";

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "grid",
        placeItems: "center",
        padding: "24px",
        background: "#f5f5f7",
        color: "#1d1d1f",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', sans-serif",
      }}
    >
      <form
        method="post"
        action="/api/session"
        style={{
          width: "100%",
          maxWidth: "360px",
          background: "#ffffff",
          borderRadius: "20px",
          padding: "32px 28px",
          boxShadow: "0 12px 40px rgba(0, 0, 0, 0.08)",
          display: "grid",
          gap: "18px",
        }}
      >
        <div style={{ display: "grid", gap: "6px" }}>
          <h1 style={{ margin: 0, fontSize: "22px", letterSpacing: "-0.02em" }}>
            沙耶的云端书库
          </h1>
          <p style={{ margin: 0, fontSize: "13px", color: "#6e6e73" }}>
            输入访问口令，在你的设备上继续阅读。
          </p>
        </div>

        <input type="hidden" name="return_to" value={returnTo} />

        <label style={{ display: "grid", gap: "8px", fontSize: "13px" }}>
          访问口令
          <input
            name="passcode"
            type="password"
            autoComplete="current-password"
            autoFocus
            required
            style={{
              width: "100%",
              boxSizing: "border-box",
              padding: "12px 14px",
              fontSize: "15px",
              borderRadius: "12px",
              border: "1px solid #d2d2d7",
              background: "#fbfbfd",
              color: "#1d1d1f",
              outlineColor: "#0071e3",
            }}
          />
        </label>

        {message ? (
          <p
            role="alert"
            style={{ margin: 0, fontSize: "13px", color: "#c41230" }}
          >
            {message}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={!configured}
          style={{
            padding: "12px 16px",
            fontSize: "15px",
            fontWeight: 600,
            borderRadius: "12px",
            border: 0,
            background: configured ? "#0071e3" : "#c7c7cc",
            color: "#ffffff",
            cursor: configured ? "pointer" : "not-allowed",
          }}
        >
          进入书库
        </button>

        <p style={{ margin: 0, fontSize: "12px", color: "#86868b" }}>
          仅限本人使用。登录状态会在这台设备上保留 30 天。
        </p>
      </form>
    </main>
  );
}
