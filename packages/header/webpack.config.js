const path = require('path');
const PACKAGE = require('./package.json');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const isProd = process.env.NODE_ENV !== 'dev';
let externals = {};
if (isProd) {
  externals = {
    react: 'react',
    'react-dom': 'reactDOM',
    emotion: '@emotion/core',
    mobx: 'mobx',
    pubSub: 'pubSub',
  };
}
const outputPathFragment = isProd ? `../../dist/${PACKAGE.name}` : 'dist';

module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, outputPathFragment),
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
