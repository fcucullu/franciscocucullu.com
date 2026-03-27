import { defineCollection, z } from 'astro:content';

export const collections = {
	work: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			publishDate: z.coerce.date(),
			tags: z.array(z.string()),
			img: z.string(),
			img_alt: z.string().optional(),
		}),
	}),
	apps: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			url: z.string(),
			statsUrl: z.string().optional(),
			img: z.string(),
			img_alt: z.string().optional(),
			tags: z.array(z.string()),
			status: z.enum(['live', 'beta', 'offline']).default('live'),
			publishDate: z.coerce.date(),
		}),
	}),
};
