import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title:'沙耶的云端书库', description:'上传一次，在电脑和手机接着读。私人书库、离线阅读与进度同步。', manifest:'/manifest.webmanifest' };
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) { return <html lang="zh-CN"><body>{children}</body></html>; }
