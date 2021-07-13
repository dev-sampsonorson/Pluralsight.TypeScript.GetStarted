module.exports = {
  mode: 'development',
  entry: './app/app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ] // used of module resolution
  },
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    inline: false
  }
};
 