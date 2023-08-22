import { expect, test } from 'vitest';
import { groupImagesIntoSixArr } from '$lib/utils/arraySorters';

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

test.each([
	{
		a: ['one', 'two', 'three', 'four'],
		expected: [['one', 'two', 'three', 'four']]
	},
	{
		a: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],
		expected: [
			['one', 'two', 'three', 'four', 'five', 'six'],
			['seven', 'eight']
		]
	}
])('($a,$b)=>$expected', ({ a, expected }) => {
	expect(groupImagesIntoSixArr(a)).toStrictEqual(expected);
});
