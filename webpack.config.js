const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // 自动打包生成html
// const CleanWebpackPlugin = require("clean-webpack-plugin"); // 报错
const { CleanWebpackPlugin } = require("clean-webpack-plugin"); // 自动清理dist文件夹
const webpack = require("webpack");

module.exports = {
  // entry: "./src/index.js", // 入口
  entry: { // 多个入口（入口起点：重复模块都会被引入到各个 bundle 中）
    index: "./src/index.js",
    main: "./src/main.js"
  },
  output: {
    // filename: "main.js", // 打包完js文件名
    // filename: "[name].main.js", // 根据入口名打包成多个js文件
    filename: "[name].[chunkhash].js", // 在文件名中包含一个 chunk 相关(chunk-specific)的哈希
    chunkFilename: "[name].main.js", // 决定非入口 chunk 的名称
    path: path.resolve(__dirname, "dist"), // 打包路径（必须是绝对路径）
    publicPath: "/"
  },
  devtool: 'inline-source-map', // 帮助定位错误，不要用于生产环境
  devServer: { // 开发服务器配置，修改和保存任意源文件，web 服务器就会自动重新加载编译后的代码
    port: 8081, // 端口号
    contentBase: "./dist", // 告诉开发服务器(dev server)，在哪里查找文件
    hot: true // 模块热替换
  },
  plugins: [
    // new CleanWebpackPlugin(["dist"]), // 报错
    new CleanWebpackPlugin(), // 正确
    new HtmlWebpackPlugin({
      title: "Webpack Test"
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ // 将公共的依赖模块提取到一个新生成的 chunk（防止重复）
      name: "common" // 指定公共 bundle 名称
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
  },
  mode: "production" // 压缩输出，删除“未使用代码”
};