const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const config = {
  entry: ["./src/index", "./src/home"],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // {
      //   test: /\.html$/,
      //   exclude: /node_modules/,
      //   use: ["html-loader"],
      // },
      // {
      //   test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //   type: "asset",
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 20 * 1024,
      //     },
      //   },
      //   generator: {
      //     filename: "images/[name][ext]",
      //   },
      // },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: "./dist",
    watchFiles: ["src/**/*", "index.html"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
    new CopyPlugin({
      patterns: [{ from: "./images", to: "images" }],
    }),
  ],
};

let production = process.env.NODE_ENV === "production";
if (production) {
  config.mode = "production";
  config.devtool = "inline-source-map";
}

module.exports = config;
