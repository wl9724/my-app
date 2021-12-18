const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")

module.exports = {
  // 项目入口文件
  entry: "./app/client.js",
  // 项目打包出口文件
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "dist/"),
  },
  plugins: [
    // 配置项目使用的html模板文件为client.html
    new HtmlWebpackPlugin({ 
      template: path.resolve('./app/client.html') 
    }),
    new CleanWebpackPlugin({
      path: path.join(__dirname, 'build')
    })
  ],
  module: {
    rules: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(txt|gif|png|jpg|ico|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]

      }
    ]
  }
};