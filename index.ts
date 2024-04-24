import { build, preview } from 'vite';
import mime from 'mime-types';

const previewServer = await preview({
  // any valid user config options, plus `mode` and `configFile`
  preview : { port : 6969, open : false, },
});

previewServer.printUrls();

// async function handler(request: Request): Response {
//   const out = await build({
//     build: {
//       // outDir: "./dist",
//       write: false,
//       rollupOptions: {
//         input: "./hello.html",
//       }
//     },
//   })

//   console.log(out);
//   const file = out.output.at(0);
//   const body = out.output.at(0).source;

//   return new Response(body, {
//     status: 200,
//     headers: {
//       "Content-Type": mime.lookup(file.fileName) || "text/plain",
//     },
//    });
// }
// Deno.serve({ port: 8080 }, handler);
