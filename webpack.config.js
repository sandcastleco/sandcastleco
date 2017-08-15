module.exports = options => {
  return {
    entry: './_scripts/index.js',
    output: {
      filename: './scripts/bundle.js',
    },
    watch: true,
    module: {
      rules: [
        {
          test: /.js%/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                cacheDirectory: true,
              },
            },
          ],
        },
      ],
    },
  }
}
