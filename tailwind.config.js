/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
	  './pages/**/*.{js,jsx}',
	  './components/**/*.{js,jsx}',
	  './app/**/*.{js,jsx}',
	  './src/**/*.{js,jsx}',
	],
	theme: {
	  container: {
		center: true,
		padding: '2rem',
		screens: {
		  '2xl': '1400px',
		},
	  },
	  extend: {
		colors: {
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  background: '#FFFFFF',
		  foreground: '#202E3D',
		  primary: {
			DEFAULT: '#1A3B6F',
			foreground: '#FFFFFF',
		  },
		  'primary-hover': '#15325D',
		  accent: {
			DEFAULT: '#1A706F',
			foreground: '#FFFFFF',
		  },
		  'accent-hover': '#15605F',
		  secondary: {
			DEFAULT: '#EFA43C',
			foreground: '#3B4657',
		  },
		  'secondary-hover': '#D89435',
		  success: '#4CAF50',
		  alert: '#EFA43C',
		  cream: '#F7F2E9',
		  card: '#FFFFFF',
		  'card-highlight': '#F7F2E9',
		  'text-gray': '#202E3D',
		  destructive: {
			DEFAULT: '#DC2626',
			foreground: '#FFFFFF',
		  },
		  muted: {
			DEFAULT: '#F3F4F6',
			foreground: '#2D2D2D',
		  },
		  popover: {
			DEFAULT: '#FFFFFF',
			foreground: '#2D2D2D',
		  },
		  slate: '#1A3B6F',
		  sage: '#1A706F',
		},
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		keyframes: {
		  'accordion-down': {
			from: { height: 0 },
			to: { height: 'var(--radix-accordion-content-height)' },
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: 0 },
		  },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		},
	  },
	},
	plugins: [
	  require('tailwindcss-animate'),
	  require('@tailwindcss/aspect-ratio'),
	],
  };
  