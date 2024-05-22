/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      neutral: ['Neutral Face'],
    },
    fontSize: {
      sm: '18px',
      base: '23px',
      lg: '25px',
      xl: '28px',
      '2xl': '28px',
      '3xl': '50px',
      '4xl': '80px',
      '5xl': '100px',
    },
    extend: {
      colors: {
        primary: '#0A5859',
        primary_light: '#529395',
        secondary: '#FFFCF3',
        white: '#FFFFFF',
      },
      boxShadow: {
        '3xl': '13px 13px 0px 0px rgba(0, 0, 0, 0.33);',
      },
    },
  },

  plugins: [],
}

