const webpack = require('webpack');
const path = require('path');

const config = {
  context: path.join(__dirname),
  entry: './app.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        },
        exclude: path.join(__dirname, '/node_modules')
      }
    ]
  },
  devtool: 'cheap-sourcemap'
}

module.exports = config;
