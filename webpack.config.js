var path = require("path");
var webpack = require("webpack");

var PROD = (process.env.NODE_ENV === 'production');
var OUTPUT_PATH = path.join(__dirname, "docs");
var PUBLIC_PATH = "/";

module.exports = {
  devServer: {
    outputPath: OUTPUT_PATH,
    contentBase: OUTPUT_PATH,
    colors: true,
    publicPath: PUBLIC_PATH
  },
  entry:(PROD ? [] : ['webpack/hot/dev-server']).concat(
    [path.resolve(__dirname, "jsx/main.jsx")]
  ),
  output: {
    // Output the bundled file.
    path: OUTPUT_PATH,
    // Use the name specified in the entry key as name for the bundle file.
    filename: "js/[name].js",
    publicPath: PUBLIC_PATH
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
        loader:"json-loader"
      },
      {
        // Load css files.
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      }
    ]
  },
  externals: {
    // Don"t bundle the "react" npm package with the component.
    "jquery": "jQuery",
    "react": "React",
    "react-dom": "ReactDOM",
    'semantic' : "semantic"
  },
  resolve: {
    // Include empty string "" to resolve files by their explicit extension
    // (e.g. require("./somefile.ext")).
    // Include ".js", ".jsx" to resolve files by these implicit extensions
    // (e.g. require("underscore")).
    extensions: ["", ".js", ".jsx"]
  },
  plugins: PROD ? [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ] : []
};