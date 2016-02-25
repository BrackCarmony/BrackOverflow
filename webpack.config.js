module.exports = {
  entry: [
    './app/src/index.js'
  ],
  output: {
    path: __dirname + "/public",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    },
    {
      test: /\.scss$/,
      loaders: ["style", "css", "sass"]
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  watch:true
};
