var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {

  entry: [
    APP_DIR + '/main.js' // Your appʼs entry point
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: 'public'
  },
  module : {
    loaders : [
      {
        test : /\.ts?/,
        include : APP_DIR,
        loaders: ['typings'],
      }
    ]
  },

};

module.exports = config;
