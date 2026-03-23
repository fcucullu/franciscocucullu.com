import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async () => {
	const apps = (await getCollection('apps'))
		.sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf())
		.map((app) => ({
			slug: app.slug,
			title: app.data.title,
			description: app.data.description,
			url: app.data.url,
			img: app.data.img,
			tags: app.data.tags,
			status: app.data.status,
		}));

	return new Response(JSON.stringify(apps), {
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
		},
	});
};
