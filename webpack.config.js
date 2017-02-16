var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.less$/,
      loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader!less-loader')
    },
    ]
  },
  postcss: [
    require('autoprefixer-core')
  ],
  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  },
  plugins: [
    new ExtractTextPlugin('style.css', { allChunks: true })
  ],
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};