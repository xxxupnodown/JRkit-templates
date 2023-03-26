const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const copyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(baseConfig, {
  mode: 'production',
  plugins: [
    // 复制静态资源文件至 dist
    new copyPlugin({ 
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
          filter: source => !source.includes('index.html')
        }
      ],
    }),
    new CompressionPlugin({
      test: /.(js|css)$/,
      filename: '[path][base].gz'
    })
  ]
});
