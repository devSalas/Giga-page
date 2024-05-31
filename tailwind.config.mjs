/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				"primary":"#FFFFFF",
				"secondary":"#F64D13",
				"third":"#FF5A21",
				"fourth":"#002179",
				"fifth":"#F5F5F5",
				"cprimary":"#FFFFFF",
				"csecondary":"#F64D13",
				"cthird":"#F64D13",
				"cfourth":"#002179"
			}
		},
	},
	plugins: [],
}
