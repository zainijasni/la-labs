import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        magenta: {
          DEFAULT: '#A8005C',
          light: '#E0007A',
          bright: '#FF4FD8',
        },
      },
      fontFamily: {
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-magenta': 'linear-gradient(135deg, #A8005C, #E0007A, #FF4FD8)',
      },
    },
  },
  plugins: [],
}

export default config
