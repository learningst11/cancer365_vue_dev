const { defineConfig } = require('@vue/cli-service');
const webpack = require('webpack');
const path = require('path');

module.exports = defineConfig({
  outputDir: '../cancercare_express_completed-master_dev/public',
  transpileDependencies: true,
  lintOnSave: false,
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      }),
    ],
    resolve: {
      alias: {
        'jquery': path.resolve(__dirname, 'node_modules/jquery/dist/jquery.js')
      }
    }
  },
});