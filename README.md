创建项目过程
#初始化项目
npm init
#安装react相关包
npm i react,react-dom,react-router,react-redux,react-router-dom
#安装webpack
npm i webpack,webpack-cli
#配置webpack
webpack.common.js生产环境和开发环境共有配置 webpack.dev.js开发环境配置 webpack.prod.js生产环境配置
项目初始化完成
开发环境项目启动脚本 dev："webpack-dev-server --config ./webpack.dev.js"
