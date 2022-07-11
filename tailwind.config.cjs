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
				Cxs: ['clamp(0.96rem, calc(1.23rem + -0.38vw), 1.15rem)'],
				Csm: ['clamp(1.20rem, calc(1.24rem + -0.06vw), 1.23rem)'],
				Cbase: ['clamp(1.31rem, calc(1.24rem + 0.37vw), 1.50rem)'],
				Cmd: ['clamp(1.40rem, calc(1.22rem + 0.93vw), 1.88rem)'],
				Clg: ['clamp(1.49rem, calc(1.16rem + 1.66vw), 2.34rem)'],
				Cxl: ['clamp(1.59rem, calc(1.07rem + 2.61vw), 2.93rem)'],
				C2xl: ['clamp(1.70rem, calc(0.94rem + 3.83vw), 3.66rem)'],
				C3xl: ['clamp(1.82rem, calc(0.74rem + 5.39vw), 4.58rem)'],
				C4xl: [' clamp(1.94rem, calc(0.46rem + 7.39vw), 5.72rem)'],
				C5xl: ['clamp(2.07rem, calc(0.08rem + 9.92vw), 7.15rem)'],
				C6xl: ['clamp(2.21rem, calc(-0.42rem + 13.14vw), 8.94rem)']
			},
			colors: {
				primary: '#00A9FF',
				secondary: '#3C4856',
				accent: '#9FACBD',
				footer_color: '#EEF5FD'
			},
			width: {
				picW: ['clamp(7.88rem, calc(1.19rem + 33.41vw), 25.00rem)']
			},
			height: {
				picW: ['clamp(7.88rem, calc(1.19rem + 33.41vw), 25.00rem)']
			}
		}
	},
	plugins: []
};
