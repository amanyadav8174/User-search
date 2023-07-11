/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],

	theme: {
		screens: {
			sm: '375px',
			md: '768px',
			lg: '976px',
		},
		colors: {
			blue: '#0079FF',
			'blue-gray': '#697C9A',
			'blue-gray-light': '#A4B4CC',
			'blue-royal': '#4B6A9B',
			'blue-navy': '#2B3442',
			'blue-midnight': '#273444',
			'blue-vlight': '#F6F8FF',
			'gray-vlight': '#FEFEFE',
			'blue-dark-navy': '#141D2F',
			'blue-dark-indigo': '#1E2A47',
			red: '#F74646',
			white: '#ffffff',
		},
		fontFamily: {
			mono: ['Space Mono', 'monospace'],
		},
		fontSize: {
			xls: '0.6875rem',
			xs: '0.8125rem',
			sm: '0.9375rem',
			base: '1rem',
			lg: '1.25rem',
			xl: '1.5rem',
			'2xl': '1.625rem',
		},
		letterSpacing: {
			'wider-custom': '2.5px',
		},
		extend: {
			lineHeight: {
				25: '25px',
			},
		},
	},
	plugins: [],
}
