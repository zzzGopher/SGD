import { expect, test } from 'vitest';
import { groupImagesIntoSixArr } from '$lib/functions/arraySorters';

const testArray: string[] = [
	'one',
	'two',
	'three',
	'four',
	'five',
	'six',
	'seven',
	'eight',
	'nine',
	'ten',
	'eleven',
	'twelve'
];

const result: string[][] = [
	['one', 'two', 'three', 'four', 'five', 'six'],
	['seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']
];

test('groups images into six', () => {
	expect(groupImagesIntoSixArr(testArray)).toStrictEqual(result);
});
