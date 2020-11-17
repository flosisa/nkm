"use strict";

const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const dev = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: {
    index: ['@babel/polyfill', path.resolve(__dirname, '../src/index.js')],
  },

  output: {
    path: path.resolve(__dirname, '../express/www'),
    filename: 'assets/js/[name].[hash:4].js',
    chunkFilename: '[name].[hash:4].chunk.js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      Components: path.resolve(__dirname, '../src/components'),
      Containers: path.resolve(__dirname, '../src/containers'),
      Redux: path.resolve(__dirname, '../src/redux'),
      Constants: path.resolve(__dirname, '../src/constants'),
      Assets: path.resolve(__dirname, '../src/assets'),
      Util: path.resolve(__dirname, '../src/util'),
      Api: path.resolve(__dirname, '../src/api/'),
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-export-namespace-from',
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.css$/,
        use: [dev ? 'style-loader' : MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/fonts/'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true,
      minify: {
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        minifyCSS: true,
        minifyURLs: true,
        minifyJS: true,
        removeComments: true,
        removeRedundantAttributes: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: dev ? '[name].css' : '[name].[hash].css'
    }),
    new CopyWebpackPlugin([
      { from: 'src/assets/img', to: 'assets/img' },
      { from: 'src/assets/fonts', to: 'assets/fonts' },
      { from: 'src/assets/svg', to: 'assets/svg' }
    ])
  ]
};
