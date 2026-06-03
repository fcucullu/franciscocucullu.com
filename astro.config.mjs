import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://franciscocucullu.com',
	integrations: [
		sitemap({
			// Keep the private content dashboard out of the public sitemap.
			filter: (page) => !page.startsWith('https://franciscocucullu.com/content'),
		}),
	],
});
