// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as contentful from 'contentful';

import { env } from '$env/dynamic/private';

const createClientFunc = contentful;
// fetching from contentful
const client = contentful.createClient({
	accessToken: `${env.CONTENTFUL}`,

	space: `${env.CONTENTFULSPACE}`
});

export async function load() {
	return {
		doorPics: await client.getAssets({
			limit: 100
		}),
		withEntry: await client.getEntry(`${env.CONTENTFUL_ENTRY}`)
	};
}
