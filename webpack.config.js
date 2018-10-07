const HtmlWebPackPlugin = require('html-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const path = require('path');
module.exports = {
  // entry: {
  //   app: './src/index.js',
  //   records: './recordsTable/index.js'
  // },
  // output: {
  //   filename: '[name].js',
  //   path: path.resolve(__dirname, 'dist')
  // },
  
  module: {
    rules: [
        {
          test: /\.html$/,
          use: {
            loader: "html-loader",
          }
          // enforce: "pre",
          // test: /\.js$/,
          // exclude: /node_modules/,
          // loader: "eslint-loader",
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",  
          }
         
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: ['css-loader'],
          }),
      },
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new ExtractTextPlugin({
      filename: "./css/style.css"
  })

  ]
};
