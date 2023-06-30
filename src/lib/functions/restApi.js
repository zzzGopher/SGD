// @ts-nocheck
import pkg from 'contentful';
const { createClient } = pkg;

// fetching from contentful
const client = createClient({
	space: 'ou5y66xxxy0c',

	// TODO Delete after server component is working

	accessToken: `EXR0kul91Rp0Og3jADvfEaiLTKkNOpqUemzoubF4YMI`
});

const apiResults = await client
	.getEntry('4ilHWDlZoI8cEbUQtEW7DQ')
	.then((data) => data)
	.catch((err) => console.log(err));

// awaiting results
const res = await apiResults.fields;

// destructuring the door Images
const { popularDoors } = res;

// mapping for the url path and exporting throughout project
export const doorPics = popularDoors.map((img) => img.fields.file.url);

// destructuring the colors object
const { colors: doorColorsObject } = res;

export const doorColors = [];

let i = 0;

// mapping through colors in object and storing them in []
for (let color in doorColorsObject) {
	doorColors[i] = color;
	i++;
}
