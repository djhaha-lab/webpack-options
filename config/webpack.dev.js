//开发环境

const { merge } = require("webpack-merge");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",

  //调式工具。方便追踪到 error(错误) 和 warning(警告) 在源代码中的原始位置
  devtool: "eval-cheap-module-source-map", //生产模式不需要，降低性能
  //告知 dev server，从什么位置查找文件
  devServer: {
    static: "./dist",
    //热模块替换
    hot: true,
  },
  optimization: {
    // usedExports: true, // 开启tree shaking，找出需要删除的“未引用代码(dead code)”，然而，不仅仅是要找出，还要在 bundle 中删除它们。为此，我们需要将 mode 配置选项设置为 production。
    moduleIds: "deterministic", //不论是否添加任何新的本地依赖，对于前后两次构建，vendor hash 都应该保持一致
    // runtimeChunk: true,
    runtimeChunk: "single", //为所有 chunk 创建一个 runtime bundle
    //将第三方库(library)提取到单独的 vendor chunk 文件中，是比较推荐的做法
    //利用 client 的长效缓存机制，命中缓存来消除请求，并减少向 server 获取资源，
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,

          name: "vendors",

          chunks: "all",
        },
      },
    },
    /*
    Webpack 通过执行额外的算法任务，来优化输出结果的体积和加载性能。这些优化适用于小型代码库，但是在大型代码库中却非常耗费性能
    所以大型代码中解开注释
    */
    // removeAvailableModules: false,
    // removeEmptyChunks: false,
  },
});
