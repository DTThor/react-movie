require('dotenv').config();
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './src/index.js'),
  mode: process.env.NODE_ENV || 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './index.html'),
      favicon: path.join(__dirname, './static/favicon.ico')
    }),
    new webpack.DefinePlugin({
      'process.env': {
        PROD_API_URL: JSON.stringify(process.env.PROD_API_URL),
        DEV_API_URL: JSON.stringify(process.env.DEV_API_URL)
      }
    })
  ],
  devServer: {
    historyApiFallback: { index: '/' },
      headers: {
          'Access-Control-Allow-Origin': '*'
      }
  }
}
