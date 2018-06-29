module.exports = {
  plugins: {
    'cssnano': {
      autoprefixer: {
        add: true,
      },
      reduceIdents: false,
      normalizeUrl: false,
      zindex: false
    }
  }
}