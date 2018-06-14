const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.join(__dirname, '../src'), 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'ts-loader' },
    ],
  },
};
