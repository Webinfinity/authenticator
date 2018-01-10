'use strict'
const path = require('path')
const webpack = require('webpack')

const config = require('../config')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}


const webpackConfig = {
  entry: './src/auth-widget.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src')]
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'DEBUG': false,
      'BASE_URL': config.build.base_url || JSON.stringify('https://api.kloudless.com')
    })
  ]
}

module.exports = webpackConfig