module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-sequencer-polyend/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/_variables.scss";`
      }
    }
  }
}