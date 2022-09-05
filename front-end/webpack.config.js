const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslintPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const whatMode = process.env.NODE_ENV === 'production';

module.exports = {
  entry: path.resolve(__dirname, './src/index.ts'),
  mode: whatMode ? 'production' : 'development',
  devtool: whatMode ? false : 'inline-source-map',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.ts$/i,
        use: 'ts-loader',
      },
      {
        test: /.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/images/background/[name][ext]',
        }
      },
      {
        test: /.(woff(2)?|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/fonts/[name][ext]'
        }
      },
      {
        test: /.(wav)$/i,
        type: 'asset/resource',
        generator: {
          filename: './assets/audio/[name][ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new EslintPlugin({ extensions: 'ts' }),
    new CopyPlugin({
      patterns: [{
        from: './src/assets/',
        to: './assets/',
        noErrorOnMissing: true,
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: ["**/background/**"],
        },
      },
      {
        from: './src/games/typing-adventure/assets',
        to: './assets/typing-adventure',
      }],
    })
  ]
};
