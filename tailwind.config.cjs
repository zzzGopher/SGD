/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				custom: ['Mukta', ' sans-serif'],
				custom2: ['Inter', 'sans-serif']
			},
			fontSize: {
				largest: '5.61rem',
				medium: '2.8rem',
				medium_small: '1.77rem',
				small: '1.33rem',
				super_small: '1rem',
				smallest: '0.75rem'
			},
			colors: {
				primary: '#00A9FF',
				secondary: '#3C4856',
				accent: '#9FACBD'
			}
		}
	},
	plugins: []
};
