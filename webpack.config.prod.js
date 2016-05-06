var path = require('path');
var webpack = require('webpack');
var OfflinePlugin = require('offline-plugin');

module.exports = {
  entry: './app',
  output: {
    path: path.join(__dirname, 'public', 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false, // ...but do not show warnings in the console (there is a lot of them)
      },
    }),
    new OfflinePlugin({
      // All options are optional
      caches: 'all',
      scope: '/',
      updateStrategy: 'all',
      version: 'v1',

      ServiceWorker: {
        output: 'sw.js'
      },

      AppCache: {
        directory: 'appcache/'
      }
    }),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.development || 'false')),
      __PRODUCTION__: JSON.stringify(JSON.parse(process.env.production || 'true'))
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: path.join(__dirname, 'app')
    }]
  }
};
