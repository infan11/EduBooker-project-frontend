const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [
       "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
         ],
         theme: {
          fontFamily: {
            'sans': ['sans-serif', 'roboto',],
            
          }
        },
  plugins: [require("daisyui")],
});