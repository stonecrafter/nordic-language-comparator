const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    // Publishing to 'docs' for compatibility with gh-pages hosting
    path: path.join(__dirname, 'docs'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!postcss-loader!resolve-url-loader!sass-loader?sourceMap'
    },
    {
      test: /\.css$/,
      loader: "style-loader!css-loader"
    },
    {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff'
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      loader: 'file-loader'
    },
    {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
