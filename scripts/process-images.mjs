#!/usr/bin/env bun
// Script temporal de procesamiento de imagenes. NO commitear.
import { readdir, unlink } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = resolve(ROOT, 'public/projects');

const MAX_W = 1200;
const Q = 82;

const files = (await readdir(DIR)).filter((f) => f.endsWith('.jpg'));

for (const f of files) {
  const id = f.replace(/\.jpg$/, '');
  const inPath = resolve(DIR, f);
  const outPath = resolve(DIR, `${id}.webp`);

  const meta = await sharp(inPath).metadata();
  const W = meta.width ?? 0;
  const H = meta.height ?? 0;
  if (!W || !H) {
    console.log(`[skip] ${id} sin dimensiones`);
    continue;
  }
  const cropH = Math.min(H, Math.round((W * 3) / 4));

  const buf = await sharp(inPath)
    .extract({ left: 0, top: 0, width: W, height: cropH })
    .resize({ width: MAX_W, withoutEnlargement: true })
    .webp({ quality: Q })
    .toBuffer();

  await Bun.write(outPath, buf);
  await unlink(inPath);
  const out = (await sharp(outPath).metadata());
  console.log(`[ok ] ${id} -> ${out.width}x${out.height} webp q${Q} (${buf.byteLength} bytes)`);
}
