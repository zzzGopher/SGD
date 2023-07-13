// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
/* eslint-disable import/namespace */
import * as contentful from 'contentful';

import { CONTENTFUL, CONTENTFULSPACE, CONTENTFUL_ENTRY } from '$env/dynamic/private';

const client = contentful.createClient
	? contentful.createClient({
			accessToken: `${CONTENTFUL}`,

			space: `${CONTENTFULSPACE}`
	  })
	: contentful.default.createClient({
			accessToken: `${CONTENTFUL}`,

			space: `${CONTENTFULSPACE}`
	  });

// fetching from contentful

export async function load() {
	return {
		doorPics: await client.getAssets({
			limit: 100
		}),
		withEntry: await client.getEntry(`${CONTENTFUL_ENTRY}`)
	};
}
