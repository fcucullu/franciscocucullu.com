import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://franciscocucullu.com',
	adapter: node({ mode: 'standalone' }),
	session: false,
	integrations: [
		sitemap({
			// Keep the private content dashboard out of the public sitemap.
			filter: (page) =>
				!page.startsWith('https://franciscocucullu.com/content') &&
				!page.startsWith('https://franciscocucullu.com/design-system'),
		}),
	],
});
