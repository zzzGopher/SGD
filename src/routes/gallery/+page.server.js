// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as contentful from 'contentful';
import pkg from 'contentful';
const { createClient } = pkg;

import { env } from '$env/dynamic/private';

const createClientFunc =
	process.env.NODE_ENV === 'development' ? contentful.createClient : createClient;
// fetching from contentful
const client = createClientFunc({
	space: `${env.CONTENTFULSPACE}`,

	accessToken: `${env.CONTENTFUL}`
});

export async function load() {
	return {
		doorPics: await client.getAssets({
			limit: 100
		}),
		withEntry: await client.getEntry(`${env.CONTENTFUL_ENTRY}`)
	};
}
