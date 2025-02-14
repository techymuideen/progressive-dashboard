import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'serif'],
      },
    },
    screens: {
      //   xsm: '450px',
      //   // => @media (min-width: 450px) { ... }
      //   sm: '640px',
      //   // => @media (min-width: 640px) { ... }
      //   md: '768px',
      // => @media (min-width: 770px) { ... }
      lg: '900px',
      //   // => @media (min-width: 1150px) { ... }
      //   xl: '1280px',
      //   // => @media (min-width: 1280px) { ... }
      //   '2xl': '1536px',
      //   // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
