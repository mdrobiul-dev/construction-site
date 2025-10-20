// tailwind.config.js
module.exports = {
  // E-i line-ta obosshoi 'class' hobe!
  darkMode: 'class', 
  
  // Content path nischit korun.
  content: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}