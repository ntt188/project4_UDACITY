const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devServer: {
    static: './dist',
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', {
          loader: 'sass-loader',
          options: {
            implementation: require('sass'), // Ensure Dart Sass is used instead of Node Sass
          },
        },], // Load SCSS files
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'], // Use Babel to transpile ES6+ syntax
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/client/views/index.html', // Template HTML
    }),
  ],
};
