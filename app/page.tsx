import { requireChatGPTUser } from './chatgpt-auth';
import { passcodeConfigured } from '@/lib/session';
export const dynamic = 'force-dynamic';
export default async function Home() {
  await requireChatGPTUser('/');
  const account = await passcodeConfigured();
  return <iframe src={account ? '/reader/index.html?account=1' : '/reader/index.html'} title="沙耶的云端书库" style={{position:'fixed',inset:0,width:'100%',height:'100dvh',border:0}} />;
}
