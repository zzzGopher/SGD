// @ts-nocheck
import { json } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */

export async function POST({ request }) {
	const result = await request.json();
	return json(result);
}
