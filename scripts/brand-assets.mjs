/**
 * Generates the committed brand artifacts from the site mark and portrait:
 *
 *   public/favicon.ico          48px PNG-in-ICO (tab strips, Google Search)
 *   public/apple-touch-icon.png 180px (iOS home screen; SVG unsupported there)
 *   public/og-card.png          1200x630 share card (og:image / twitter:image)
 *
 * Run LOCALLY (`node scripts/brand-assets.mjs`) and commit the artifacts —
 * deliberately not wired into the build, matching the icon workflow on the
 * book site. Text rasterises with the Georgia fallback, which is also what
 * browsers use for the SVG favicon (webfonts never load in favicon or
 * static-image contexts).
 */
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';

const TEAL = '#14b8a6';
const BG = '#0a0a0c';

// -- Icon: the GS monogram tile, baked from the favicon.svg design ----------
const tile = (size) => `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="${size}" height="${size}">
  <rect width="64" height="64" rx="14" fill="${BG}" />
  <rect x="0.5" y="0.5" width="63" height="63" rx="13.5" fill="none" stroke="rgba(245,245,247,0.06)" />
  <text x="50%" y="51%" text-anchor="middle" dominant-baseline="central"
    font-family="Georgia, ui-serif, serif" font-size="32" font-weight="500"
    font-style="italic" letter-spacing="-1.5" fill="${TEAL}">GS</text>
</svg>`;

/** Modern browsers accept a PNG payload inside the ICO container. */
function pngToIco(png, size) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  header.writeUInt8(size === 256 ? 0 : size, 6);
  header.writeUInt8(size === 256 ? 0 : size, 7);
  header.writeUInt8(0, 8);
  header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10);
  header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14);
  header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

const icoPng = await sharp(Buffer.from(tile(48))).png().toBuffer();
writeFileSync('public/favicon.ico', pngToIco(icoPng, 48));

await sharp(Buffer.from(tile(180))).png().toFile('public/apple-touch-icon.png');

// -- Share card: portrait right, identity left ------------------------------
const W = 1200;
const H = 630;
const PORTRAIT_W = 460;

const portrait = await sharp('public/portrait-gordon-slater-hero.jpg')
  .resize(PORTRAIT_W, H, { fit: 'cover', position: 'top' })
  .toBuffer();

const overlay = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${BG}" stop-opacity="1"/>
      <stop offset="1" stop-color="${BG}" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <!-- blend the portrait's left edge into the ground -->
  <rect x="${W - PORTRAIT_W}" y="0" width="140" height="${H}" fill="url(#fade)"/>

  <text x="96" y="176" font-family="Georgia, serif" font-size="26"
    letter-spacing="8" fill="${TEAL}">PROFESSOR</text>

  <text x="92" y="286" font-family="Georgia, serif" font-style="italic"
    font-size="86" fill="#f5f5f7">Gordon Slater</text>

  <text x="96" y="366" font-family="Georgia, serif" font-size="30"
    fill="rgba(245,245,247,0.72)">Orthopaedic Surgeon &#183; Researcher &#183; Author</text>

  <line x1="96" y1="428" x2="236" y2="428" stroke="${TEAL}" stroke-width="2"/>

  <text x="96" y="486" font-family="Georgia, serif" font-size="27"
    letter-spacing="3" fill="rgba(245,245,247,0.85)">profgordonslater.com.au</text>
</svg>`;

await sharp({ create: { width: W, height: H, channels: 3, background: BG } })
  .composite([
    { input: portrait, left: W - PORTRAIT_W, top: 0 },
    { input: Buffer.from(overlay), left: 0, top: 0 },
  ])
  .png()
  .toFile('public/og-card.png');

console.log('wrote favicon.ico, apple-touch-icon.png, og-card.png');
