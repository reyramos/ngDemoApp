var path = require("path");
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';


module.exports = webpackMerge(commonConfig, {
  // devtool: 'cheap-module-eval-source-map',
  // devtool: '#inline-source-map',
  // devtool: '#source-map',
  devtool: '#eval',
  debug: true,
  output: {
    path: path.dirname(__dirname),
    // path: helpers.root('dist'),
    // publicPath: 'http://localhost:8080/',
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  },

});
