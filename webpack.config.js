const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/ClientApp.js',
  devtool: 'cheap-module-source-map',
  output: {
    path: path.join(__dirname, '/public'),
    publicPath: '/public/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 8888,
    publicPath: '/public/',
    historyApiFallback: true,
    stats: 'errors only'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false
            }
          }
        ]
      },
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: [
          path.resolve('js'),
          path.resolve('node_modules/preact-compat/src')
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
