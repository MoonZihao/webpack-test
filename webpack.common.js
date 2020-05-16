const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 自动打包生成html
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 自动清理dist文件夹

module.exports = {
  entry: { // 多个入口
    index: "./src/index.js"
  },
  output: {
    filename: "[name].main.js", // 根据入口名打包成多个js文件
    path: path.resolve(__dirname, "dist") // 打包路径
  },
  plugins: [
    new CleanWebpackPlugin(), // 正确
    new HtmlWebpackPlugin({
      title: "Webpack Test"
    })
  ],
  module: {
    rules: [
      // 加载css
      {
        test: /\.css$/, // 正则匹配css文件名后缀
        use: [
          "style-loader",
          "css-loader"
        ]
      },
      // 加载图片
      {
        test: /\.(png|svg|jpg|gif)$/, // 正则匹配图片文件名后缀
        use: [
          "file-loader",
        ]
      }
    ]
  }
};