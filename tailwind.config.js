module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '<sm': { 'raw': '(max-width: 639.9px)' },
        '@sm': { 'raw': '(min-width: 640px) and (max-width: 767.9px)' },
        '<md': { 'raw': '(max-width: 767.9px)' },
        '@md': { 'raw': '(min-width: 768px) and (max-width: 1023.9px)' },
        '<lg': { 'raw': '(max-width: 1023.9px)' },
        '@lg': { 'raw': '(min-width: 1024px) and (max-width: 1279.9px)' },
        '<xl': { 'raw': '(max-width: 1279.9px)' },
        '@xl': { 'raw': '(min-width: 1280px) and (max-width: 1535.9px)' },
        '<2xl': { 'raw': '(max-width: 1535.9px)' },
        '@2xl': { 'raw': '(min-width: 1536px)' },
      },
    },
  },
  plugins: [],
}
