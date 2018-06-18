const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: [path.join(__dirname, '../src'), 'node_modules'],
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, exclude: /node_modules/, loader: 'ts-loader' },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
          },
        },
      },
    ],
  },
};
