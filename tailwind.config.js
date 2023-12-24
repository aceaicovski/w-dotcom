import { fontFamily } from 'tailwindcss/defaultTheme';

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', ...fontFamily.sans],
      },
      width: {
        'screen-xl': '1440px',
      },
      blur: {
        xs: '2px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: false,
    rtl: false,
    themes: [
      {
        dotcom: {
          ...require('./src/styles/theme/colors'),
          ...require('./src/styles/theme/button'),

          '--rounded-btn': '.5rem',
          // We can add another font to the component by simply setting the property
          // fontFamily: "Inter",
        },
      },
    ],
  },
};
