/* global require */

const webpack = require('webpack');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = function(env, argv) {

  let optimization = {};

  if(argv.mode == 'production') {
    optimization.minimizer = [new TerserPlugin({
      'sourceMap': true,
      'parallel': true,
      'terserOptions': {
        'ecma': 6
      }
    })]
  }


  return {
    'entry': path.join(__dirname, 'src', 'hover.js'),
    'devtool': 'source-map',
    'plugins': [

      //Clean folder
      new CleanWebpackPlugin(['lib']),

    ],
    'output': {
      'path': path.join(__dirname, 'lib'),
      'filename': argv.mode == 'production' ? 'hover_js.min.js' : 'hover_js.js',
      'library': 'hover_js',
      'libraryTarget': 'umd',
      'umdNamedDefine': true
    },
    'module': {
      'rules': [
        {
          'test': /\.m?js$/,
          'loader': 'babel-loader',
          'exclude': /(node_modules|bower_components)/,
          'options': {
            'presets': ['@babel/preset-env']
          }
        },
        {
          'test': /\.js$/,
          'loader': 'eslint-loader',
          'exclude': /node_modules/
        }
      ]
    },
    'optimization': optimization
  }
};
