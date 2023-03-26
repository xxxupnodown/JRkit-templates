const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ProgressBarPulgin = require('progress-bar-webpack-plugin');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({ template: path.resolve(__dirname, '../public/index.html') }),
    // 传递env参数到项目中
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) }),
    // 进度条
    new ProgressBarPulgin(),
  ],
  cache: {
    type: 'filesystem',
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx|js|jsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-typescript'],
            plugins: [
              [
                'import',
                { 'libraryName': 'antd', style: true }
              ]
            ]
          }
        }
      },
      {
        test: /.(css|less)$/,
        use: ['style-loader', 'css-loader', {
          loader: 'less-loader',
          options: {
            lessOptions: {
              exclude: /node_modules/,
              javascriptEnabled: true,
            }
          }
        }],
      },
      {
        test: /\.(jpg|png|PNG|JPG|bmp|BMP|JPEG|jpeg)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: 'image/[name][hash:9].[ext]',
            esModule: true,
            limit: 8 * 1024, // 小于 8kb图片 使用 base64
          }
        },
        type: 'javascript/auto',
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.join(__dirname, '../src'),
      '@layout': path.join(__dirname, '../src/layout'),
      '@api': path.join(__dirname, '../src/api'),
      '@pages': path.join(__dirname, '../src/pages'),
      '@router': path.join(__dirname, '../src/router'),
      '@store': path.join(__dirname, '../src/store'),
      '@public': path.join(__dirname, '../public')
    }
  }
}