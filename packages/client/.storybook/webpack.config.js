const { VueLoaderPlugin } = require('vue-loader');

module.exports = (baseConfit, env, defaultConfig) => {
  // ref. https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-plugin-typescript/index.js#L51-L57
  defaultConfig.module.rules.push({
    test: /\.ts$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/.vue$/],
          transpileOnly: true,
        },
      },
    ],
  });
  defaultConfig.resolve.extensions.push('.ts', '.tsx', '.vue');
  defaultConfig.plugins.push(new VueLoaderPlugin());

  return defaultConfig;
};
