const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        },
        {
          test: /\.s?css/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        },
        {
          test: /\.(gif|png|jpe?g|woff|woff2|eot|ttf|svg)$/i,
          use: [
            'file-loader'
          ]
        },
      ]
      },
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx']
      },
    plugins: [
      new CleanWebpackPlugin({
        dry: true,
        verbose: true
      }),
      new HtmlWebpackPlugin({
        template: path.join(__dirname + '/public', 'index.html')
      })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
      }
  };
  