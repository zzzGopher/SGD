// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
/* eslint-disable import/namespace */
import * as contentful from 'contentful';

import { CONTENTFUL, CONTENTFULSPACE } from '$env/static/private';

const client = contentful.createClient
	? contentful.createClient({
			accessToken: `${CONTENTFUL}`,
			space: `${CONTENTFULSPACE}`
	  })
	: contentful.default.createClient({
			accessToken: `${CONTENTFUL}`,
			space: `${CONTENTFULSPACE}`
	  });

//TODO  add loading skeletons.

const contentType = { 'content-type': 'application/json' };

const url = 'https://graphql.contentful.com/content/v1/spaces/ou5y66xxxy0c/environments/master';

const bearer = 'Bearer QeXN336cH-HxZF-ORiokYHcesE1SChw-OgXzYUcIe0Y';

//Refer to getGqlqueries function explanation, for the ternary explanation of this function

const queryForDecorative = (item) =>
	item === 'popularCollection'
		? `{${item}{items{allCollection{items{url(transform:{format:WEBP})}}}}}`
		: `{${item}{items{${item}{items{url(transform:{format:WEBP})}}}}}`;

//in Contentful the path to popular collection is different it goes popularCollection>items>allCollection which is why we need the dynamic response ternary

async function getGqlqueries(returnItem) {
	const dynamicResponse = (result) =>
		returnItem === 'popularCollection'
			? result.data[returnItem].items[0]['allCollection'].items.map((i) => i.url)
			: result.data[returnItem].items[0][returnItem].items.map((i) => i.url);

	const res = await fetch(url, {
		headers: {
			Authorization: bearer,
			...contentType
		},
		method: 'POST',
		body: JSON.stringify({
			query: queryForDecorative(returnItem)
		})
	})
		.then((k) => k.json())
		.then((res) => dynamicResponse(res));
	return res;
}

//to fetch the banner colors they are in a different query
async function getColors() {
	const res = await fetch(url, {
		headers: {
			Authorization: bearer,
			...contentType
		},
		method: 'POST',
		body: JSON.stringify({
			query: `{popular(id:"4ilHWDlZoI8cEbUQtEW7DQ"){sys{id}colors}}`
		})
	})
		.then((k) => k.json())
		.then((res) => res.data.popular.colors);
	return res;
}

// fetching from contentful

export async function load() {
	try {
		return {
			doorpics: await client.getAssets({ limit: 100 }),
			all: await getGqlqueries('popularCollection'),
			decorative: await getGqlqueries('decorativeCollection'),
			steelonsteel: await getGqlqueries('steelonsteelCollection'),
			residential: await getGqlqueries('residentialCollection'),
			doorColors: await getColors()
		};
	} catch (e) {
		console.log('load response error message: ' + e.message);
	}
}
