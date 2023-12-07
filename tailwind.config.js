/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{ts,tsx}'],

   plugins: [require('tailwindcss-animate')],

   theme: {
      container: {
         center: true,
         padding: '2rem',
         screens: {
            '2xl': '1400px',
         },
      },
      extend: {
         // css animation config
         animation: {},

         //  css color config
         colors: {},

         //  css font family config
         fontFamily: {},

         //  css with and height base project
         spacing: {},

         //  css keyframes config
         keyframes: {},
      },
   },
};
