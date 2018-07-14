const config = require('./webpack.config');
const history = require('connect-history-api-fallback');
const convert = require('koa-connect');

module.exports = {
  ...config,
  mode: 'development',
  serve: {
    host: '0.0.0.0',
    hot: {
      host: {
        server: '0.0.0.0',
        client: process.env.LOCAL_IP || '0.0.0.0',
      },
    },
    add: (app, middleware, options) => {
      const historyOptions = { index: '/index.html' };
      app.use(convert(history(historyOptions)));
    },
  },
};
