const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PACKAGE = require('./package.json');
const isProd = process.env.NODE_ENV !== 'dev';
let externals = {};

if (isProd) {
  externals = {
    react: 'react',
    'react-dom': 'reactDOM',
    emotion: '@emotion/core',
    mobx: 'mobx',
  };
}
module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, '../..', 'dist/', PACKAGE.name),
    filename: `${PACKAGE.name}.app.js`,
    publicPath: isProd ? `/${PACKAGE.name}` : ``,
  },
  externals,
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
    ],
  },
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
  ],
};
