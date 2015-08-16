'use strict';

var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-source-map',
  entry: {
    web: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      './src/client/app'
    ],
    android: [
      'webpack-dev-server/client?http://localhost:3001',
      'webpack/hot/only-dev-server',
      './src/android/app'
    ]
  },
  output: {
    path: path.join(__dirname, '/public/js/'),
    filename: '[name].app.js',
    publicPath: 'http://localhost:3001/js/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel?stage=0&experimental&optional[]=runtime'],
      exclude: /node_modules/
    }]
  }
};
