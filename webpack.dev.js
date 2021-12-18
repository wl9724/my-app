const path = require("path")
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // 本地启动服务
  devServer: {
    historyApiFallback: true,
    port: 3001,//指定启动端口
    open: true,//启动后打开浏览器
    hot: true//热编译
  },
});