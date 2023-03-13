/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        myfont: "Crete Round",
        headerFont:'Poppins-Regular',
      },
      fontSize:{
   headerFontSize:'12px',
   whystudyurFontSize:"33px",
   cardsFontSize:"18px",
      },
      
      fontWeight:{
headerFontWeight:'700',
whystudyurfontweight:'300',

      },
      colors: {
        navyblue: "#000080",
        headerColor:'#029DDD',
        firstHeader:"#036F9D",
        whychooseurcolor:"#F1F1F1",
        cardColor:"#DEFCFF",
      },
    },
  },
  plugins: [],
};
