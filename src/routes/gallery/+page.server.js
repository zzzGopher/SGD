// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
/* eslint-disable import/namespace */
import * as contentful from 'contentful';

import { env } from '$env/dynamic/private';

const client = contentful.createClient
	? contentful.createClient({
			accessToken: `${env.CONTENTFUL}`,

			space: `${env.CONTENTFULSPACE}`
	  })
	: contentful.default.createClient({
			accessToken: `${env.CONTENTFUL}`,

			space: `${env.CONTENTFULSPACE}`
	  });

// fetching from contentful

export async function load() {
	return {
		doorPics: await client.getAssets({
			limit: 100
		}),
		withEntry: await client.getEntry(`${env.CONTENTFUL_ENTRY}`)
	};
}
