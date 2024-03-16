/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       
        'banner' : 'url("https://img.freepik.com/premium-photo/top-view-spices-herbs-olive-oil_266870-4764.jpg?w=826")',
      },
    },
  },
  plugins: [],
}

