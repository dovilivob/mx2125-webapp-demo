import type { RequestHandler } from '@sveltejs/kit';
import { data } from '$lib/data';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async (request) => {
	const { x, y } = data;
	return json({
		x,
		y
	});
};
