const path = require("path");
const { ProvidePlugin } = require("webpack");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/public/dist"),
    filename: "app.js"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader?cacheDirectory",
        exclude: [
          /node_modules/
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new ProvidePlugin({
      React: "react"
    })
  ],
  devtool: false,
  resolve: {
    alias: {
      "@": path.join(__dirname, "/src")
    },
    extensions: [
      ".js",
      ".jsx"
    ]
  }
};
