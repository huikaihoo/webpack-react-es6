var path = require("path");
var webpack = require("webpack");

module.exports = {
  entry: [path.resolve(__dirname, "jsx/main.jsx")],
  output: {
    // Output the bundled file.
    path: path.resolve(__dirname, "bin/js"),
    // Use the name specified in the entry key as name for the bundle file.
    filename: "main.js"
  },
  module: {
    loaders: [
      {
        // Test for js or jsx files.
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets:["es2015", "react", "stage-1"]
        }
      },
      {
        // Load json files.
        test:/\.json$/,
        loader:'json-loader'
      }
    ]
  },
  externals: {
    // Don"t bundle the "react" npm package with the component.
    "jquery": "jQuery",
    "react": "React",
    "react-dom": "ReactDOM"
  },
  resolve: {
    // Include empty string "" to resolve files by their explicit extension
    // (e.g. require("./somefile.ext")).
    // Include ".js", ".jsx" to resolve files by these implicit extensions
    // (e.g. require("underscore")).
    extensions: ["", ".js", ".jsx"]
  }
};