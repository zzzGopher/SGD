// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as contentful from 'contentful';
import { env } from '$env/dynamic/private';

// fetching from contentful
const client = contentful.createClient({
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
