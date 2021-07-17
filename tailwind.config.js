module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      
        bms: {
          50: "#edf1fc",
          100: "#d3d4e1",
          200: "#b6b8c9",
          300: "#989bb2",
          400: "#7c7f9b",
          500: "#636582",
          600: "#4c4f66",
          700: "#363849",
          800: "#2b3149",
          900: "#0a0a16",
        },
      
        but:
        {
          50: '#ffe4ea',
          100: '#ffb4c1',
          200: '#fb849a',
          300: '#f85471',
          400: '#f52549',
          500: '#db0e30',
          600: '#ab0725',
          700: '#7b031a',
          800: '#4b000f',
          900: '#1e0003',
        },



      },
    }, 
    },
  variants: {
    extend: {},
  },
  plugins: [],
  };



 


