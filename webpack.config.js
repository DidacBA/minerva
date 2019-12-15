const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/'
  },
  module: {
    rules: [
      { 
        test: /\.(js)$/,
        use: 'babel-loader'
      },
      { 
        test: /\.(scss)$/, 
        use: [ 
          process.env.NODE_ENV !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader' 
        ]
      },
    ]
  },
  devServer: {
    port: 1337
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "index.css",
    })
  ],
  node: {
    fs: 'empty'
  }
}