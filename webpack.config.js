const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { config } = require("process");

config = {
  entry: ["./src/index.ts"],
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};

config.mode =
  process.env.NODE_ENV === "production" ? "production" : "development";

module.exports = config;
