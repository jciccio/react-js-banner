const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build|images)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test:/\.html$/i,
        use: [
          {
            loader: 'html-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|bower_components|build|images)/,
        use:['style-loader','css-loader']
      }
    ]
  },
  resolve: {
    extensions: [".js",".jsx", '.json']
  },
  devtool: 'inline-source-map'
};