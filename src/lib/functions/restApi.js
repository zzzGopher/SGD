// @ts-nocheck
// eslint-disable-next-line @typescript-eslint/no-var-requires
import * as contentful from 'contentful';

// TODO Delete after server component is working
//Delete this also.....

const client = contentful.createClient
	? contentful.createClient({
			accessToken: 'EXR0kul91Rp0Og3jADvfEaiLTKkNOpqUemzoubF4YMI',

			space: 'ou5y66xxxy0c'
	  })
	: contentful.default.createClient({
			accessToken: 'EXR0kul91Rp0Og3jADvfEaiLTKkNOpqUemzoubF4YMI',

			space: 'ou5y66xxxy0c'
	  });

const apiResults = async () =>
	await client
		.getEntry('4ilHWDlZoI8cEbUQtEW7DQ')
		.then((data) => data)
		.catch((err) => console.log(err));

const data = (async () => await apiResults())();

// awaiting results

const res = (async () => await data.fields)();

// destructuring the door Images
const { popularDoors } = (async () => await res)();

// mapping for the url path and exporting throughout project
export const doorPics = async () => (await popularDoors.map((img) => img.fields.file.url))();

// destructuring the colors object
const { colors: doorColorsObject } = res;

export const doorColors = [];

let i = 0;

// mapping through colors in object and storing them in []
for (let color in doorColorsObject) {
	doorColors[i] = color;
	i++;
}
