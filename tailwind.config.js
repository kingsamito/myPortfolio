/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xl': '1600px',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"'],
        'nunito': ['Nunito'],
        'sora': ['Sora']
      },
      animation: {
        blink: 'blink 1.5s infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
    }
  },
  plugins: [],
}