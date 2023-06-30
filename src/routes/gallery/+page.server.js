// @ts-nocheck

/** @type {import('.$/types').PageServerLoad} */

import pkg from 'contentful';
import { env } from '$env/dynamic/private';

const { createClient } = pkg;

// fetching from contentful
const client = createClient({
	space: `${env.CONTENTFULSPACE}`,

	accessToken: `${env.CONTENTFUL}`
});

//Todo delete this todo

export async function load() {
	return {
		doorPics: await client.getAssets({
			limit: 100
		}),
		withEntry: await client.getEntry(`${env.CONTENTFUL_ENTRY}`)
	};
}
