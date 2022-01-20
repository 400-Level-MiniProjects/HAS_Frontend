module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        tprimary:'#2D3132',
        bprimary:'#203B93'
      },
      width:{
        '3/7':'45%',
        '1/8':'4.375rem'
      },
      height:{
        '1/8':'4.188rem'
      },
      bold:{
        exbold: 750
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

