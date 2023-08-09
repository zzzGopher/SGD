// @ts-nocheck
import { test, expect } from 'vitest';
import { sum } from './sum.ts';

test('adds 1 + 2 to equal 3', () => {
	expect(sum()).toBe(3);
});
