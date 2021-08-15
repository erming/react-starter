const path = require("path");
const { ESBuildMinifyPlugin } = require("esbuild-loader");
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
        loader: "esbuild-loader",
        options: {
          loader: "jsx",
          target: "es6",
        },
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
  optimization: {
    minimizer: [
      new ESBuildMinifyPlugin({
        sourcemap: false,
        legalComments: "none"
      })
    ]
  },
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
