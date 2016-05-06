var path = require('path');
var webpack = require('webpack');


module.exports = {
  // devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    // 'webpack-dev-server/client?http://localhost:3000',
    // 'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './app'
  ],
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.development || 'true')),
      __PRODUCTION__: JSON.stringify(JSON.parse(process.env.production || 'false'))
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'app')
      },
      {
        // Transform our own .css files with PostCSS and CSS-modules
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader',
      },
    ]
  }
};
