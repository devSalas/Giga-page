/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage:{
				"form":"linear-gradient(to bottom, #072b89, #00256f, #001e55, #00163b, #020b23);",
				'hero-map': "url('/imgs/hero-pattern.svg')",
				'about':"url('/imgs/pages/about/textura.jpg')",
				'plata':"url('/imgs/pages/about/textura.jpg')",
				'service-gradient':"linear-gradient(to right top, #0566f8, #a248dd, #dc12b2, #fa007e, #ff0049);",
				'call_bottom':"linear-gradient(to right, #ff6400, #eb520f, #d64216, #c13219, #ab221a);",
				'custom-gradient-global': 'linear-gradient(to bottom, #F96421 18%, #B40532 100%)',
				'map': "url('/imgs/pages/cobertura/map.png')",
			
				
			},
			colors:{
				"primary":"#FFFFFF",
				"secondary":"#f96421",
				"third":"#FF5A21",
				"fourth":"#860526",
				"fifth":"#F5F5F5",
				"sixth":"#5A5858",
				"cprimary":"#FFFFFF",
				"csecondary":"#F64D13",
				"cthird":"#F64D13",
				"cfourth":"#860526",
				
			}
		},
	},
	plugins: [],
}
