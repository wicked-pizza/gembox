const webpack = require('webpack')
const path = require('path')
const fs = require('fs')
const tmpl = require('lodash.template')
const dateFns = require('date-fns')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const pkg = require('./package')
const stamp = () => dataFns.format(new Date(), 'YYYY/MM/DD HH:mm')
const banner = () => fs.readFileSync('./build/BANNER', 'utf8')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  mode: (isProd ? 'production' : 'development'),
  entry: {
    main: './src/assets/js/main.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: './gem/assets/js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader',
          options: {
            preserveWhitespace: false,
            postLoaders: {
              html: 'babel-loader'
            }
          }
        }
      },
      {
        test: /\.pug$/,
        use: {
          loader: 'pug-plain-loader'
        }
      }
    ]
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.BannerPlugin({
      banner: tmpl({
        pkg,
        stamp
      })
    })
  ]
}