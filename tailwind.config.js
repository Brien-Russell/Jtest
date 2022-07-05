/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx,html,css}",
    "./public/**/*.html"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        testBlue: '#648FFF',
        testPurple: '#785ef0',
        testPink: '#dc267f',
        testOrange: '#fe6100',
        testLightOrange: '#ffb000',
        testJeremySite: '#2a2738',
      }
    },
 
  },
  plugins: [],
}
