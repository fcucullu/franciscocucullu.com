import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const W = 1200;
const H = 630;

// Portrait: rounded card on the right
const portraitW = 380;
const portraitH = 470;
const portraitX = W - portraitW - 70;
const portraitY = (H - portraitH) / 2;
const radius = 36;

const portraitBuf = await sharp(join(root, 'public/assets/portrait.jpg'))
	.resize(portraitW, portraitH, { fit: 'cover', position: 'top' })
	.composite([
		{
			input: Buffer.from(
				`<svg width="${portraitW}" height="${portraitH}"><rect x="0" y="0" width="${portraitW}" height="${portraitH}" rx="${radius}" ry="${radius}"/></svg>`
			),
			blend: 'dest-in',
		},
	])
	.png()
	.toBuffer();

const bg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0c0a14"/>
      <stop offset="55%" stop-color="#15101f"/>
      <stop offset="100%" stop-color="#1d1330"/>
    </linearGradient>
    <radialGradient id="glow" cx="18%" cy="20%" r="60%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#f97316"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#glow)"/>

  <rect x="70" y="112" width="64" height="6" rx="3" fill="url(#accent)"/>

  <text x="70" y="200" font-family="Helvetica, Arial, sans-serif" font-size="74" font-weight="700" fill="#ffffff">Francisco Cucullu</text>

  <text x="70" y="262" font-family="Helvetica, Arial, sans-serif" font-size="34" font-weight="600" fill="#c9b8ef">AI Product Leader who codes</text>

  <text x="70" y="328" font-family="Helvetica, Arial, sans-serif" font-size="27" font-weight="400" fill="#a9a2bf">Enterprise AI at scale · 9M+ daily interactions</text>
  <text x="70" y="366" font-family="Helvetica, Arial, sans-serif" font-size="27" font-weight="400" fill="#a9a2bf">20K+ users · $M+ annual savings · 4 squads led</text>

  <!-- role pills -->
  <g font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="600">
    <rect x="70" y="430" width="178" height="50" rx="25" fill="#a855f7"/>
    <text x="159" y="463" fill="#ffffff" text-anchor="middle">AI Strategy</text>

    <rect x="264" y="430" width="190" height="50" rx="25" fill="#7c3aed" fill-opacity="0.85"/>
    <text x="359" y="463" fill="#ffffff" text-anchor="middle">0→1 Products</text>

    <rect x="470" y="430" width="218" height="50" rx="25" fill="#f97316" fill-opacity="0.9"/>
    <text x="579" y="463" fill="#ffffff" text-anchor="middle">Enterprise Scale</text>
  </g>

  <text x="70" y="552" font-family="Helvetica, Arial, sans-serif" font-size="23" font-weight="500" fill="#8a83a6">Dual MSc, Quantitative Finance  ·  franciscocucullu.com</text>

  <!-- portrait frame accent -->
  <rect x="${portraitX - 4}" y="${portraitY - 4}" width="${portraitW + 8}" height="${portraitH + 8}" rx="${radius + 4}" fill="none" stroke="url(#accent)" stroke-width="3" stroke-opacity="0.7"/>
</svg>`;

await sharp(Buffer.from(bg))
	.composite([{ input: portraitBuf, left: Math.round(portraitX), top: Math.round(portraitY) }])
	.jpeg({ quality: 90 })
	.toFile(join(root, 'public/assets/og-image.jpg'));

console.log('Wrote public/assets/og-image.jpg');
