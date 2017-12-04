var webpack = require("webpack");
var path = require('path');
module.exports = {
  devtool: 'source-map',

  entry:[
    './app/index.js'
  ],
  output: {
    path: path.join(__dirname,'dist'),
    filename:'bundle.js',
    publicPath: '/dist/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  module:{
    loaders: [{
        test:/\.jsx?$/,
        include: path.join(__dirname, 'app'),
        exclude:/node_modules/,
        loader:'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      }
    ]
  }
};
