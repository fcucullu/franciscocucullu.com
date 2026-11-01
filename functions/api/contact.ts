/**
 * Formulario de contacto, como funcion de Cloudflare Pages.
 *
 * Vivia en src/pages/api/contact.ts con `prerender = false`, lo que obligaba a
 * Astro a llevar un adaptador y dejaba de ser un sitio estatico. Con el
 * adaptador de Node, Cloudflare Pages ni siquiera lo ejecutaba y el sitio
 * entero devolvia 404; con el de Cloudflare, el prerenderizado pasa a workerd
 * y /portfolio se rompia al leer los .md del disco.
 *
 * Aqui no hace falta nada de eso: Cloudflare sirve functions/ al lado del
 * build estatico. Misma ruta publica (/api/contact), mismo contrato con el
 * formulario, y Astro vuelve a ser 100% estatico.
 *
 * El SDK de resend tampoco se usa: su API REST es una llamada fetch, y asi la
 * funcion no arrastra dependencias de Node a workerd.
 */

const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

interface Env {
	RESEND_API_KEY: string;
	CONTACT_FROM_EMAIL: string;
	CONTACT_TO_EMAIL?: string;
}

function field(value: FormDataEntryValue | null) {
	return typeof value === 'string' ? value.trim() : '';
}

function escapeHtml(value: string) {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;');
}

function json(body: unknown, status = 200) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json' },
	});
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
	const apiKey = env.RESEND_API_KEY;
	const from = env.CONTACT_FROM_EMAIL;
	const to = env.CONTACT_TO_EMAIL || 'francisco.cucullu@gmail.com';

	if (!apiKey || !from) {
		console.error('Contact form is missing RESEND_API_KEY or CONTACT_FROM_EMAIL');
		return json({ message: 'Email is not configured yet.' }, 500);
	}

	let data: FormData;
	try {
		data = await request.formData();
	} catch {
		return json({ message: 'The form could not be read.' }, 400);
	}

	// Honeypot: un bot rellena todo, una persona no ve este campo. Se responde
	// ok para no ensenarle al bot que ha sido detectado.
	if (field(data.get('hp_field'))) {
		return json({ ok: true });
	}

	const name = field(data.get('name'));
	const email = field(data.get('email'));
	const message = field(data.get('message'));

	if (
		!name ||
		!email ||
		!message ||
		name.length > MAX_NAME ||
		email.length > MAX_EMAIL ||
		message.length > MAX_MESSAGE ||
		!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
	) {
		return json({ message: 'Check the name, email, and message.' }, 400);
	}

	const response = await fetch('https://api.resend.com/emails', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			from,
			to: [to],
			reply_to: email,
			subject: `Let's talk — ${name}`,
			text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
			html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>`,
		}),
	});

	if (!response.ok) {
		console.error('Resend', response.status, await response.text());
		return json({ message: 'The message could not be sent. Please try again.' }, 502);
	}

	return json({ ok: true });
};
