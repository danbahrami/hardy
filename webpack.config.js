const path = require('path');

const STYLE_LOADER = {
  loader: 'style-loader',
  options: {
    hmr: true,
  },
};

const CSS_LOADER = {
  loader: 'css-loader',
  options: {
    importLoaders: 1,
    localIdentName: '[local]---[hash:base64:5]',
    minimize: false,
  },
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: path.join(__dirname, './public'),
        use: [STYLE_LOADER, CSS_LOADER, 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  devServer: {
    port: 1234,
  },
};
