/**
 * Generates PNG previews from certificate PDFs for reliable mobile display.
 * Run: node scripts/generate-certificate-preview.mjs
 */
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { createCanvas } from '@napi-rs/canvas';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  '../node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs',
  import.meta.url,
).href;

const pdfPath = join(root, 'src/assets/certificates/iso-certificate.pdf');
const pdfData = readFileSync(pdfPath);

const pdf = await pdfjs.getDocument({ data: new Uint8Array(pdfData) }).promise;
const page = await pdf.getPage(1);

async function renderToPng(scale, outputPath) {
  const viewport = page.getViewport({ scale });
  const canvas = createCanvas(viewport.width, viewport.height);
  const context = canvas.getContext('2d');
  await page.render({ canvasContext: context, viewport, canvas }).promise;
  writeFileSync(outputPath, canvas.toBuffer('image/png'));
  console.log(`Wrote ${outputPath} (${viewport.width}x${viewport.height})`);
}

await renderToPng(0.6, join(root, 'src/assets/certificates/iso-certificate-preview.png'));
await renderToPng(2, join(root, 'src/assets/certificates/iso-certificate-full.png'));
