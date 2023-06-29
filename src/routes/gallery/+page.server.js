// @ts-nocheck

/** @type {import('.$/types').PageServerLoad} */

import { createClient } from 'contentful';
import { env } from '$env/dynamic/private';

// fetching from contentful
const client = createClient({
	space: `${env.CONTENTFULSPACE}`,

	accessToken: `${env.CONTENTFUL}`
});

export async function load() {
	return {
		doorPics: await client.getAssets({
			limit: 6
		})
	};
}
