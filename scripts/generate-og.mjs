// Generates public/assets/og-image.jpg — the social card for franciscocucullu.com.
// Mirrors the home hero: cream background, navy Offside headline with the amber
// mark behind "Leader", Geist tagline, and the cut-out portrait bleeding off the
// bottom right. Run with `node scripts/generate-og.mjs`.
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { tmpdir } from 'node:os';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const fontsDir = join(__dirname, 'fonts');

// librsvg picks fonts up through fontconfig, so point it at scripts/fonts
// BEFORE sharp is loaded — the font config is read once, at init.
const fcDir = mkdtempSync(join(tmpdir(), 'og-fonts-'));
const fcFile = join(fcDir, 'fonts.conf');
writeFileSync(
	fcFile,
	`<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig>
  <dir>${fontsDir}</dir>
  <cachedir>${fcDir}</cachedir>
</fontconfig>`
);
process.env.FONTCONFIG_FILE = fcFile;
const sharp = (await import('sharp')).default;

const W = 1200;
const H = 630;

// Brand tokens, straight from src/styles/global.css
const CREAM = '#f7f4ee';
const CREAM_DEEP = '#efebe3';
const NAVY = '#131c4a';
const AMBER = '#f8b83b';
const AMBER_DARK = '#e0a22a';
const MUTED = '#5c6478';

const PAD = 72;
const DISPLAY = 'Offside';
const BODY = 'Geist';

const esc = (s) =>
	s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Width of a run of text, measured by rendering it and trimming the margins. */
async function measure(text, { family, size, weight = 400 }) {
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W * 2}" height="${size * 3}">
		<text x="10" y="${size * 2}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="#000">${esc(text)}</text>
	</svg>`;
	const { info } = await sharp(Buffer.from(svg)).trim({ threshold: 1 }).toBuffer({
		resolveWithObject: true,
	});
	return info.width;
}

/** trim() eats leading/trailing blanks, so the space advance is measured apart. */
async function spaceWidth(font) {
	const [pair, single] = await Promise.all([
		measure('n n', font),
		measure('nn', font),
	]);
	return pair - single;
}

/** Greedy word wrap against a pixel width. */
async function wrap(text, font, maxWidth) {
	const words = text.split(' ');
	const lines = [];
	let current = words.shift();
	for (const word of words) {
		const candidate = `${current} ${word}`;
		if ((await measure(candidate, font)) <= maxWidth) current = candidate;
		else {
			lines.push(current);
			current = word;
		}
	}
	lines.push(current);
	return lines;
}

// ---------------------------------------------------------------- portrait
const portraitH = 582;
const portraitSrc = sharp(join(root, 'public/assets/francisco-light.png'));
const meta = await portraitSrc.metadata();
const portraitW = Math.round((meta.width / meta.height) * portraitH);
const portraitX = W - portraitW - 36;
const portraitY = H - portraitH; // bleeds off the bottom edge, like the hero
const portrait = await portraitSrc.resize({ height: portraitH }).png().toBuffer();

// ------------------------------------------------------------------- logo
const logoW = 208;
const logoSrc = sharp(join(root, 'public/assets/logo.png'));
const logoMeta = await logoSrc.metadata();
const logoH = Math.round((logoMeta.height / logoMeta.width) * logoW);
const logo = await logoSrc.resize({ width: logoW }).png().toBuffer();

// ------------------------------------------------------------------ title
const TITLE_SIZE = 66;
const titleFont = { family: DISPLAY, size: TITLE_SIZE };
const w1 = await measure('Product', titleFont);
const wMark = await measure('Leader', titleFont);
const markPadX = Math.round(TITLE_SIZE * 0.18);
const line1Y = 288;
const line2Y = line1Y + 86;
// + markPadX so the amber box keeps a real gap after "Product", as on the site
const markX = PAD + w1 + (await spaceWidth(titleFont)) + markPadX;
const markY = line1Y - TITLE_SIZE * 0.82;
const markH = TITLE_SIZE * 1.16;

// The text column has to clear the portrait on every line.
const COLUMN = portraitX - PAD - 28;
const TAG_SIZE = 27;
const tagFont = { family: BODY, size: TAG_SIZE, weight: 500 };
const tagline = await wrap(
	'Taking products from 0→1 to scale. Product, technology, and business.',
	tagFont,
	COLUMN
);

const svg = `
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="${CREAM}"/>
      <stop offset="100%" stop-color="${CREAM_DEEP}"/>
    </linearGradient>
    <radialGradient id="warm" cx="78%" cy="18%" r="62%">
      <stop offset="0%" stop-color="${AMBER}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${AMBER}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#warm)"/>

  <!-- headline: "Product [Leader] / who builds." -->
  <rect x="${markX - markPadX}" y="${markY}" width="${wMark + markPadX * 2}" height="${markH}" rx="8" fill="${AMBER}"/>
  <g font-family="${DISPLAY}" font-size="${TITLE_SIZE}" font-weight="400" fill="${NAVY}">
    <text x="${PAD}" y="${line1Y}">Product</text>
    <text x="${markX}" y="${line1Y}">Leader</text>
    <text x="${PAD}" y="${line2Y}">who builds.</text>
  </g>

  <!-- tagline -->
  <g font-family="${BODY}" font-size="${TAG_SIZE}" font-weight="500" fill="${MUTED}">
    ${tagline
			.map((line, i) => `<text x="${PAD}" y="${line2Y + 68 + i * 40}">${esc(line)}</text>`)
			.join('\n    ')}
  </g>

  <!-- footer -->
  <rect x="${PAD}" y="${H - 86}" width="54" height="5" rx="2.5" fill="${AMBER_DARK}"/>
  <text x="${PAD}" y="${H - 48}" font-family="${BODY}" font-size="24" font-weight="600" fill="${NAVY}">franciscocucullu.com</text>
</svg>`;

await sharp(Buffer.from(svg))
	.composite([
		{ input: portrait, left: portraitX, top: portraitY },
		{ input: logo, left: PAD, top: 56 },
	])
	.jpeg({ quality: 92, chromaSubsampling: '4:4:4' })
	.toFile(join(root, 'public/assets/og-image.jpg'));

console.log(
	`Wrote public/assets/og-image.jpg (${W}x${H}) — title ${Math.round(PAD + w1 + wMark + markPadX)}px wide, portrait at x=${portraitX}`
);
