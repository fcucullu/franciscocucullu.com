import { defineCollection, z } from 'astro:content';

export const collections = {
	blog: defineCollection({
		type: 'content',
		schema: z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			tag: z.string(),
			ogImage: z.string().optional(),
			draft: z.boolean().default(false),
			// Preserved from the original hand-built pages so no content is lost.
			subtitle: z.string().optional(),
			links: z
				.array(
					z.object({
						label: z.string(),
						href: z.string(),
						external: z.boolean().default(false),
					}),
				)
				.optional(),
		}),
	}),
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
			// Category labels for the portfolio filter (B2B SaaS, B2B, PWA, Native App, AI, Consumer).
			categories: z.array(z.string()).default([]),
			status: z.enum(['live', 'beta', 'offline']).default('live'),
			playStoreUrl: z.string().optional(),
			appStoreUrl: z.string().optional(),
			publishDate: z.coerce.date(),
		}),
	}),
};
