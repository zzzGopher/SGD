// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
/* eslint-disable import/namespace */
import * as contentful from 'contentful';
import { doorOptions } from '../../Stores/ImageStore.js';

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

const entries = {
	ALL_ENTRY,
	DECORATIVE_ENTRY
};

export async function load() {
	return {
		doorPics: await client.getAssets({
			limit: 100
		}),
		withEntry: await client.getEntry(`${entries.DECORATIVE_ENTRY}`)
	};
}
