import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { articles } from '../data/articles';

const MONTHS: Record<string, number> = {
	january: 0,
	february: 1,
	march: 2,
	april: 3,
	may: 4,
	june: 5,
	july: 6,
	august: 7,
	september: 8,
	october: 9,
	november: 10,
	december: 11,
};

// Parse a loose date string like "June 2026", "December 2024", or "2019".
// Returns the first day of that month (or Jan 1 for year-only), or null if unparseable.
function parseArticleDate(value: string): Date | null {
	const trimmed = value.trim();

	const monthYear = trimmed.match(/^([A-Za-z]+)\s+(\d{4})$/);
	if (monthYear) {
		const month = MONTHS[monthYear[1].toLowerCase()];
		if (month !== undefined) {
			return new Date(Date.UTC(Number(monthYear[2]), month, 1));
		}
	}

	const yearOnly = trimmed.match(/^(\d{4})$/);
	if (yearOnly) {
		return new Date(Date.UTC(Number(yearOnly[1]), 0, 1));
	}

	return null;
}

export async function GET(context: APIContext) {
	const site = context.site?.toString() ?? 'https://franciscocucullu.com';

	const items = articles.map((article) => {
		const pubDate = parseArticleDate(article.date);
		const link = article.href.startsWith('http')
			? article.href
			: new URL(article.href, site).href;

		return {
			title: article.title,
			link,
			description: article.description,
			...(pubDate ? { pubDate } : {}),
		};
	});

	return rss({
		title: 'Francisco Cucullu, Essays',
		description:
			'Essays on building AI products at scale, quantitative finance, and engineering judgment.',
		site,
		items,
	});
}
