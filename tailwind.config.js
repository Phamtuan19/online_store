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
         colors: {
            main: '#0858f7',

            white: '#FFFFFF',
            black: '#111111',

            // color default project
            'primary-main': '#0858f7',
            'primary-dark': '#0b5ed7',

            error: '#FF0000',
            secondary: '#805dca',
            warning: '#e2a03f',
            info: '#2196f3',
            success: '#26bf94',

            gray: '#555555',
         },

         //  css font family config
         fontFamily: {},

         //  css with and height base project
         spacing: {},

         //  css keyframes config
         keyframes: {},
      },
   },
};
