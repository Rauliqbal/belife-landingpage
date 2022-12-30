/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         fontFamily: {
            Poppins: ['poppins', 'sans-serif'],
         },
         container: {
            center: true,
            padding: '1rem',
            screens: {
               sm: '512px',
               md: '720px',
               lg: '1024px',
               xl: '1060px',
               '1440px': '1220px',
            },
         },
         fontSize: {
            '4xl': [
               {
                  lineHeight: '1.4',
               },
            ],
            '5xl': [
               '52px',
               {
                  lineHeight: '1.3',
               },
            ],
         },
         backgroundImage: {
            'hero-mask': "url('/src/assets/images/bg-mask.png')",
            footer: "url('/src/assets/images/bg-footer.png')",
         },
      },
   },

   plugins: [],
};
