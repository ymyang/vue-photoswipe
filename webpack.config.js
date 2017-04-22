const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extract = new ExtractTextPlugin('css/[name]_[hash].css')
const autoprefixer = require('autoprefixer')({ browsers: ['iOS >= 7', 'Android >= 4.1'] })


module.exports = {
  target: 'web',
  entry: {
    app: './demo/app.js'
  },
  output: {
    filename: 'js/[name]_[hash].js',
    path: path.resolve(__dirname, `dist`)
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: extract.extract([
          'css-loader'
        ])
      },
      {
        test: /\.(eot|woff|svg|ttf|woff2|)(\?|$)/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name]_[hash].[ext]'
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 2000,
          name: 'images/[name]_[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'demo/index.html'),
      filename: 'index.html',
    }),
    extract
  ]
}