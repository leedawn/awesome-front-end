const path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
  mode: "development",
  entry: {
    main: path.resolve(__dirname, "../src/main.js"),
    header: path.resolve(__dirname, "../src/header.js"),
  },
  output: {
    filename: "[name].[hash:8].js",
    path: path.resolve(__dirname, "../dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      templte: path.resolve(__dirname, "../public/index.html"),  // 该配置无效，不知道原因
      filename: "index.html",
      chunks: ["main"],
    }),
    new HtmlWebpackPlugin({
      templte: path.resolve("../public/header.html"),
      filename: "header.html",
      chunks: ["header"],
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin([
      {
        from: "../src/assets/imgs/*",
        to: "../dist",
      },
    ]),
    new VueLoaderPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, // 需要拆分 CSS，所以下面两部分的代码需要注释掉
          //   "style-loader",
          "css-loader",
          //   {
          //     loader: "postcss-loader",
          //     options: {
          //       plugins: [require("autoprefixer")],
          //     },
          //   },
          "less-loader",
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 10240,
              fallback: {
                loader: "file-loader",
                options: {
                  name: "img/[name].[hash:8].[ext]",
                },
              },
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
    ],
  },
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js",
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: ["*", ".js", ".json", ".vue"],
  },
};
