import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: '#c4bab0',
        'beige-light': '#e1ddd7',
        blue: '#1a3fbe',
        dark: '#111111',
      },
      fontFamily: {
        habitus: ['Outfit', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        aeonik: ['Outfit', 'ui-sans-serif', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
      },
    },
  },
  plugins: [],
}

export default config
