module.exports = {
  content: ['./public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      'darkBlue':'#293241',
      'lightBlue':'#3d5a80',
      'primary':'#98c1d9',
      'secondary':'#e0fbfc',
      'onHover':'#ee6c4d',
      'label':'#c1121f'
    },
    extend: {},
  },
  plugins: [],
}

// 'darkBlue':'#03045e',
// 'lightBlue':'#023e8a',
// 'primary':'#ccdbfd',
// 'secondary':'#e2eafc',
// 'onHover':'#ff6700',
// 'label':'#c1121f'