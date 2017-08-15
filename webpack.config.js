module.exports = options => {
  return {
    entry: './_scripts/index.js',
    output: {
      filename: './scripts/bundle.js',
    },
    watch: true
  }
}
