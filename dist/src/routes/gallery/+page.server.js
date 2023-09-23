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
const queryForDecorative = (item) => item === 'popularCollection'
    ? `{${item}{items{allCollection{items{url(transform:{format:WEBP})}}}}}`
    : `{${item}{items{${item}{items{url(transform:{format:WEBP})}}}}}`;
//in Contentful the path to popular collection is different it goes popularCollection>items>allCollection which is why we need the dynamic response ternary
async function getGqlqueries(returnItem) {
    const dynamicResponse = (result) => returnItem === 'popularCollection'
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
    }
    catch (e) {
        console.log('load response error message: ' + e.message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiK3BhZ2Uuc2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3JvdXRlcy9nYWxsZXJ5LytwYWdlLnNlcnZlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2QsOERBQThEO0FBQzlELHFDQUFxQztBQUNyQyxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQztBQUV6QyxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxFLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQyxZQUFZO0lBQ3JDLENBQUMsQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1FBQ3hCLFdBQVcsRUFBRSxHQUFHLFVBQVUsRUFBRTtRQUM1QixLQUFLLEVBQUUsR0FBRyxlQUFlLEVBQUU7S0FDMUIsQ0FBQztJQUNKLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQztRQUNoQyxXQUFXLEVBQUUsR0FBRyxVQUFVLEVBQUU7UUFDNUIsS0FBSyxFQUFFLEdBQUcsZUFBZSxFQUFFO0tBQzFCLENBQUMsQ0FBQztBQUVOLDhCQUE4QjtBQUU5QixNQUFNLFdBQVcsR0FBRyxFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxDQUFDO0FBRTNELE1BQU0sR0FBRyxHQUFHLG1GQUFtRixDQUFDO0FBRWhHLE1BQU0sTUFBTSxHQUFHLG9EQUFvRCxDQUFDO0FBRXBFLDJGQUEyRjtBQUUzRixNQUFNLGtCQUFrQixHQUFHLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDbkMsSUFBSSxLQUFLLG1CQUFtQjtJQUMzQixDQUFDLENBQUMsSUFBSSxJQUFJLDhEQUE4RDtJQUN4RSxDQUFDLENBQUMsSUFBSSxJQUFJLFVBQVUsSUFBSSwwQ0FBMEMsQ0FBQztBQUVyRSwySkFBMko7QUFFM0osS0FBSyxVQUFVLGFBQWEsQ0FBQyxVQUFVO0lBQ3RDLE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDbEMsVUFBVSxLQUFLLG1CQUFtQjtRQUNqQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMzRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBRXpFLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUM1QixPQUFPLEVBQUU7WUFDUixhQUFhLEVBQUUsTUFBTTtZQUNyQixHQUFHLFdBQVc7U0FDZDtRQUNELE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDcEIsS0FBSyxFQUFFLGtCQUFrQixDQUFDLFVBQVUsQ0FBQztTQUNyQyxDQUFDO0tBQ0YsQ0FBQztTQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEMsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBRUQsMERBQTBEO0FBQzFELEtBQUssVUFBVSxTQUFTO0lBQ3ZCLE1BQU0sR0FBRyxHQUFHLE1BQU0sS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUM1QixPQUFPLEVBQUU7WUFDUixhQUFhLEVBQUUsTUFBTTtZQUNyQixHQUFHLFdBQVc7U0FDZDtRQUNELE1BQU0sRUFBRSxNQUFNO1FBQ2QsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDcEIsS0FBSyxFQUFFLHVEQUF1RDtTQUM5RCxDQUFDO0tBQ0YsQ0FBQztTQUNBLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ3JCLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsT0FBTyxHQUFHLENBQUM7QUFDWixDQUFDO0FBRUQsMkJBQTJCO0FBRTNCLE1BQU0sQ0FBQyxLQUFLLFVBQVUsSUFBSTtJQUN6QixJQUFJO1FBQ0gsT0FBTztZQUNOLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUM7WUFDaEQsR0FBRyxFQUFFLE1BQU0sYUFBYSxDQUFDLG1CQUFtQixDQUFDO1lBQzdDLFVBQVUsRUFBRSxNQUFNLGFBQWEsQ0FBQyxzQkFBc0IsQ0FBQztZQUN2RCxZQUFZLEVBQUUsTUFBTSxhQUFhLENBQUMsd0JBQXdCLENBQUM7WUFDM0QsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDLHVCQUF1QixDQUFDO1lBQ3pELFVBQVUsRUFBRSxNQUFNLFNBQVMsRUFBRTtTQUM3QixDQUFDO0tBQ0Y7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3pEO0FBQ0YsQ0FBQyJ9