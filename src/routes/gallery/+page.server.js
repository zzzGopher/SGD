// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
/* eslint-disable import/namespace */
import * as contentful from 'contentful';

import {
	CONTENTFUL,
	CONTENTFULSPACE,
	ALL_ENTRY,
	DECORATIVE_ENTRY,
	RESIDENTIAL_ENTRY,
	STEEL_ENTRY
} from '$env/static/private';

const client = contentful.createClient
	? contentful.createClient({
			accessToken: `${CONTENTFUL}`,
			space: `${CONTENTFULSPACE}`,
			fields: '?fm=webp'
	  })
	: contentful.default.createClient({
			accessToken: `${CONTENTFUL}`,
			space: `${CONTENTFULSPACE}`
	  });

// fetching from contentful
//TODO try sharp nodejs package to convert image formats to webP after fetching and add loading skeletons.
export async function load() {
	try {
		return {
			doorPics: await client.getAssets({
				limit: 100
			}),
			all: await client.getEntry(ALL_ENTRY),
			decorative: await client.getEntry(DECORATIVE_ENTRY),
			steelonsteel: await client.getEntry(STEEL_ENTRY),
			residential: await client.getEntry(RESIDENTIAL_ENTRY)
		};
	} catch (e) {
		console.log(e);
	}
}
