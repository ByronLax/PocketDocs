import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';

app.use((req, res, next) => {
  if (/^\/(server\.js|package(-lock)?\.json)$/i.test(req.path)) {
    return res.status(404).end();
  }
  next();
});

app.use(
  express.static(__dirname, {
    extensions: ['html'],
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.webmanifest')) {
        res.setHeader('Content-Type', 'application/manifest+json; charset=utf-8');
      } else if (filePath.endsWith('sw.js') || filePath.endsWith('downloads.js')) {
        res.setHeader('Cache-Control', 'no-cache');
      }
    },
  })
);

app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`PocketDocs server running at http://${HOST}:${PORT}`);
});
