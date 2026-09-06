import {access,copyFile,mkdir,writeFile,readFile} from 'node:fs/promises';
import {join} from 'node:path';
const root='dist/client';
// Keep the export usable on hosts that serve directory indexes, including Pages.
await access(join(root,'index.html'));
await access(join(root,'videos.html'));
await mkdir(join(root,'videos'),{recursive:true});
await copyFile(join(root,'videos.html'),join(root,'videos/index.html'));
await writeFile(join(root,'.nojekyll'),'');
const report=JSON.parse(await readFile('dist/server/vinext-prerender.json','utf8'));
for(const route of ['/','/videos']){
 if(!report.routes.some(r=>r.route===route&&r.status==='rendered'))throw new Error(`Required route was not exported: ${route}`);
}
console.log('Verified homepage and video library static exports.');
