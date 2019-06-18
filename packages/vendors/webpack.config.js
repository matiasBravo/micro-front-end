const path = require('path');
const PACKAGE = require('./package.json');
const isProd = process.env.NODE_ENV !== 'dev';

const outputPathFragment = isProd ? `../../dist/${PACKAGE.name}` : 'dist';

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, outputPathFragment),
    filename: `${PACKAGE.name}.app.js`,
  },
  module: {
    rules: [{ test: /\.(js)$/, use: 'babel-loader' }],
  },
  mode: 'production',
};
