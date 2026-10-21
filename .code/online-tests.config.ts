import { fileURLToPath } from 'node:url'
export default {resolve:{alias:{'@':fileURLToPath(new URL('../',import.meta.url)),'cloudflare:workers':fileURLToPath(new URL('../tests/cloudflare-env.ts',import.meta.url))}},test:{include:['tests/online.test.ts']}}
