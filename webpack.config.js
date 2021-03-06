var ExtractTextPlugin = require('extract-text-webpack-plugin')

const path = require('path')
const webpack = require('webpack')

const ROOT_DIR = path.resolve('./')
const JS_SRC_DIR = `${ROOT_DIR}/src`
const devBuild = process.env.NODE_ENV !== 'production'

if (devBuild) {
  console.log('Webpack dev build') // eslint-disable-line no-console
  module.exports.devtool = 'eval-source-map'
} else {
  console.log('Webpack production build') // eslint-disable-line no-console
}

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'babel-polyfill',
      `${JS_SRC_DIR}/main.js`,
      `${JS_SRC_DIR}/styles/app.scss`
    ]
  },

  resolve: {
    extensions: ['.js']
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        include: path.resolve(JS_SRC_DIR),
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'stage-2']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }],
          fallback: 'style-loader'
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin('./main.css'),
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
    new webpack.NamedModulesPlugin()
  ],
  output: {
    path: ROOT_DIR,
    filename: 'app.js'
  }
}
