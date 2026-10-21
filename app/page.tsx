import { requireChatGPTUser } from './chatgpt-auth';
export const dynamic = 'force-dynamic';
export default async function Home() {
  await requireChatGPTUser('/');
  return <iframe src="/reader/index.html" title="沙耶的云端书库" style={{position:'fixed',inset:0,width:'100%',height:'100dvh',border:0}} />;
}
