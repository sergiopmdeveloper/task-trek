import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			'theme-black': '#000000',
			'theme-blue': '#14213D',
			'theme-yellow': '#FCA311',
			'theme-gray': '#E5E5E5',
			'theme-white': '#FFFFFF',
		},
	},
}

export default config
