const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './build',
    publicPath: process.env.ASSET_PATH || '/',
    hot: true,
    port: 8000,
    historyApiFallback: true
  }
});
