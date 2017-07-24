module.exports = {
  plugins: {
    'postcss-import': {},
    'lost': {},
    'postcss-cssnext': {
        browsers: ['last 1 versions','not ie <= 8', '> 5%'],  
    },
    'cssnano': {},
  },
};