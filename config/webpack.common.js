const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { VueLoaderPlugin } = require("vue-loader/dist/index");
const WindicssWebpackPlugin = require("windicss-webpack-plugin");
module.exports = {
  entry: "/src/main.js",
  //多入口
  // entry: {
  //   index: "./src/index.js",
  //   // Runtime code for hot module replacement
  //   hot: "webpack/hot/dev-server.js",
  //   // Dev server client for web socket transport, hot and live reload logic
  //   client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  // },
  //从 CDN 引入 jQuery，而不是把它打包
  // externals: {<p></p>
  //   jquery: "jQuery",
  // },
  //配路径别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "管理输出",
      template: "index.html", //写入自己的模板
    }),
    new WindicssWebpackPlugin(),
    new VueLoaderPlugin(),

    // new DefinePlugin({
    //   __VUE_OPTIONS_API__: true, //对vue2的optionsApi是否支持   若都是用的是vue3：setup 设置为false则通过tree_shaking 打包体积会更小
    //   __VUE_PROD_DEVTOOLS__: false, //在生产中启用/禁用 devtools 支持，默认值：false
    // }),

    //例如把这个应用程序中的模块依赖，改为一个全局变量依赖。要实现这些，我们需要使用 ProvidePlugin 插件。
    // new webpack.ProvidePlugin({
    //   _: "lodash",
    // //或配置一个“数组路径”（例如 [module, child, ...children?]）实现此功能
    //join: ['lodash', 'join'],
    // }),
    // new webpack.HotModuleReplacementPlugin(),//提供入口时需要
  ],
  output: {
    filename: "[name].[contenthash].js", //contenthash预防浏览器缓存
    path: path.resolve(__dirname, "../dist"),
    clean: true, //在每次构建前清理 /dist 文件夹，这样只会生成用到的文件。
    publicPath: "/",
    //自定义输出文件名
    assetModuleFilename: "assets/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "src"), //使用 include 字段，仅将 loader 应用在实际需要将其转换的模块
        loader: "babel-loader",
        //进一步优化polyfills
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: ["last 1 version", "> 1%"],
                useBuiltIns: "usage",
                corejs: 3,
              },
            ],
          ],
        },
      },
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.vue/,
        loader: "vue-loader",
      },
      //resource模块以单文件形式打包
      // {
      //   test: /\.(png|jpg|jpeg|gif)$/i,

      //   type: "asset/resource",
      //   //自定义输出文件名
      //   generator: {
      //     filename: "images/[hash][ext][query]",
      //   },
      // },
      {
        test: /\.svg/,

        type: "asset/inline",
      },
      // {
      //   test: /\.txt/,

      //   type: "asset/source",
      // },
      {
        test: /\.txt/,
        //你想把原始资源排除在其他 loader 的处理范围以外，请使用使用取反的正则：
        resourceQuery: { not: [/raw/] },
        type: "asset",
        //asset类型，自动地在 resource 和 inline 之间进行选择：小于 8kb 的文件，将会视为 inline 模块类型，否则会被视为 resource 模块类型。
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024, // 4kb
          },
        },
      },
    ],
  },
};
