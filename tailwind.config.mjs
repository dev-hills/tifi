/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				res: {
				  100: 'rgba(234, 236, 240, 0)',
				  101: 'rgba(234, 236, 240, 1)',
				  102: '#FF601F',
				  103: '#101828',
				  104: '#1D2939',
				  105: '#D0D5DD',
				  106: ' #667085',
				  400: '#12151A',
				  405: 'rgb(18, 21, 26,.5)',
				  500: '#20222C',
				  600: 'rgba(0,0,0,.5)',
				  700: 'rgba(0,0,0,.9)',
				  800: 'rgba(19, 20, 24, .8)',
				  900: 'rgba(19, 20, 24, .4)',
				},
			}
		},
	},
	plugins: [],
}
