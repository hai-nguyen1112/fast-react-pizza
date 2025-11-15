/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
      screens: {
        sm310: '310px',
        sm360: '360px',
        sm430: '430px',
      },
    },
  },
  plugins: [],
};
