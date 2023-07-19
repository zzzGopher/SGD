// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
/* eslint-disable import/namespace */
import * as contentful from 'contentful';

import { CONTENTFUL, CONTENTFULSPACE, ALL_ENTRY, DECORATIVE_ENTRY } from '$env/static/private';

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
		all: await client.getEntry(ALL_ENTRY),
		decorative: await client.getEntry(DECORATIVE_ENTRY)
	};
}
