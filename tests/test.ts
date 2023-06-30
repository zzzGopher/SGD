import { expect, test } from '@playwright/test';

const url = 'http://localhost:5173';

test('index page has expected h1', async ({ page }) => {
	await page.goto(url);
	await expect(page).toHaveTitle('Home');
});

test('h1 is serving all of green country', async ({ page }) => {
	await page.goto(url);

	await expect(page.locator('h1')).toHaveText('Serving All Of Green Country');
});
