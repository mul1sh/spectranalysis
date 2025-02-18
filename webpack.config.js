var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/example.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'example.bundle.js',
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  mode: 'development',
};
