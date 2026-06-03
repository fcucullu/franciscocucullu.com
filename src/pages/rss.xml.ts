import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getCollection } from 'astro:content';

export async function GET(context: APIContext) {
	const site = context.site?.toString() ?? 'https://franciscocucullu.com';

	const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
	);

	const items = posts.map((post) => ({
		title: post.data.title,
		link: new URL(`/blog/${post.slug}`, site).href,
		description: post.data.description,
		pubDate: post.data.pubDate,
	}));

	return rss({
		title: 'Francisco Cucullu, Essays',
		description:
			'Essays on building AI products at scale, quantitative finance, and engineering judgment.',
		site,
		items,
	});
}
