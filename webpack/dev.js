'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./base');

const HOST = process.env.DEV_SERVER_HOST || 'nkm.lan'
const PORT = process.env.DEV_SERVER_PORT || 80
const API = process.env.DEV_API_SERVER_HOST || 'api.nkm.lan'
const DEFAULT_BROWSER = process.env.DEFAULT_BROWSER || 'google-chrome'

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    inline: true,
    compress: true,
    host: HOST,
    port: PORT,
    open: DEFAULT_BROWSER,
    historyApiFallback: true,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    quiet: true,
    watchOptions: {
      poll: false,
      ignored: /node_modules/
    },
    proxy: {
      '/token': {
        target: `http://${HOST}:${PORT}`,
        bypass: req => {
          if (req.headers.accept.indexOf('html') !== -1) {
            //console.log('Skipping proxy for some browser requests.');
            return '/index.html';
          }
        }
      },
      '/api': {
        target: `http://${API}`
      },
    }
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
});