/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				"form":"linear-gradient(to bottom, #072b89, #00256f, #001e55, #00163b, #020b23);",
				'hero-map': "url('/imgs/hero-pattern.svg')",
			},
			colors:{
				"primary":"#FFFFFF",
				"secondary":"#F64D13",
				"third":"#FF5A21",
				"fourth":"#002179",
				"fifth":"#F5F5F5",
				"sixth":"#5A5858",
				"cprimary":"#FFFFFF",
				"csecondary":"#F64D13",
				"cthird":"#F64D13",
				"cfourth":"#002179"
			}
		},
	},
	plugins: [],
}
