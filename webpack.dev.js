const merge = require("webpack-merge");
const common = require('./webpack.common.js');

module.exports = merge(common, {
  devtool: "inline-source-map",
  devServer: { // 修改和保存任意源文件，web 服务器就会自动重新加载编译后的代码
    contentBase: "./dist" // 告诉开发服务器(dev server)，在哪里查找文件
  },
})