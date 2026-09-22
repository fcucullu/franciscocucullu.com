import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const MAX_NAME = 120;
const MAX_EMAIL = 200;
const MAX_MESSAGE = 5000;

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

export const POST: APIRoute = async ({ request }) => {
	const apiKey = import.meta.env.RESEND_API_KEY;
	const from = import.meta.env.CONTACT_FROM_EMAIL;
	const to = import.meta.env.CONTACT_TO_EMAIL || 'francisco.cucullu@gmail.com';

	if (!apiKey || !from) {
		console.error('Contact form is missing RESEND_API_KEY or CONTACT_FROM_EMAIL');
		return Response.json(
			{ message: 'Email is not configured yet.' },
			{ status: 500 },
		);
	}

	let data: FormData;
	try {
		data = await request.formData();
	} catch {
		return Response.json({ message: 'The form could not be read.' }, { status: 400 });
	}

	if (field(data.get('hp_field'))) {
		return Response.json({ ok: true });
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
		return Response.json(
			{ message: 'Check the name, email, and message.' },
			{ status: 400 },
		);
	}

	const resend = new Resend(apiKey);
	const { error } = await resend.emails.send({
		from,
		to: [to],
		replyTo: email,
		subject: `Let's talk — ${name}`,
		text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
		html: `<p><strong>Name:</strong> ${escapeHtml(name)}</p><p><strong>Email:</strong> ${escapeHtml(email)}</p><p>${escapeHtml(message).replaceAll('\n', '<br>')}</p>`,
	});

	if (error) {
		console.error(error);
		return Response.json(
			{ message: 'The message could not be sent. Please try again.' },
			{ status: 502 },
		);
	}

	return Response.json({ ok: true });
};
