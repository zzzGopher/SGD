import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
	webServer: {
		reuseExistingServer: true,
		command: 'npm run dev',
		url: 'http://localhost:5173'
	},
	use: { baseURL: 'http//localhost:5173/' }
};

export default config;
