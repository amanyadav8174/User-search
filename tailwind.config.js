/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
	darkMode: 'class',
	theme: {
		screens: {
			sm: '375px',
			md: '768px',
			lg: '976px',
		},
		colors: {
			background: '#F6F8FF',
			foreground: '#FFFFFF',
			primary: '#4B6A9B',
			secondary: '#2B3442',
			tertiary: '#222731',
			quaternary: '#697C9A',
			inactive: '#A4B4CC',
			blue: '#0079FF',
			lightBlue: '#60ABFF',
			dark: {
				background: '#141D2F',
				foreground: '#1E2A47',
				primary: 'white',
			},
		},
		fontFamily: {
			mono: ['Space Mono', 'monospace'],
		},
		fontSize: {
			xls: '0.6875rem',
			xs: '0.8125rem',
			sml: '0.875rem',
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
			boxShadow: {
				custom: '0px 16px 30px -10px rgba(70, 96, 187, 0.20)',
			},
		},
	},
	variants: {
		extend: {
			backgroundColor: ['light', 'dark'],
			borderColor: ['light', 'dark'],
			textColor: ['light', 'dark'],
		},
	},
	plugins: [],
}
