const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let production = process.env.NODE_ENV === "production";

let config = {
  entry: ["./src/index", "./src/home"],
  output: {
    filename: "main.js",
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
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })],
  resolve: {
    extensions: [".ts", ".js"],
  },
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    watchFiles: ["src/**/*", "index.html"],
    static: "./dist",
  },
};

if (production) {
  config.mode = "production";
  config.devtool = "inline-source-map";
}

module.exports = config;
