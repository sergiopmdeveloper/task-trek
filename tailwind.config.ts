import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				'theme-black': '#000000',
				'theme-blue': '#14213D',
				'theme-yellow': '#FCA311',
				'theme-gray': '#E5E5E5',
				'theme-white': '#FFFFFF',
			},
			screens: {
				xs: '480px',
			},
		},
	},
}

export default config
