const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    bundle: './src/index.ts',
  },
  output: {
    path: path.join(__dirname, '../../public/assets/'),
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.join(__dirname, '../src'), 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'ts-loader' },
    ],
  },
  devtool: isProduction ? 'eval' : 'cheap-module-source-map',
};
