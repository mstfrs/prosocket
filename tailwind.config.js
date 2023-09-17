/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        
        "background1": '#3B4568',
        "background2": '#434E79',
        'background3': '#F3C83F',      
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    
    fontFamily: {
     "outfit": ['Outfit', "sans-serif"],
"roboto":[ 'Roboto'," sans-serif"],
  
    },
    screens: {
      sm: "600px",
      md: "900px",
      "md-lg": "1000px",
      lg: "1200px",
      xl: "1440px",
      "2xl": "1600px",
    },
  },
  plugins: [],
}
