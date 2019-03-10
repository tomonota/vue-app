var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'app': __dirname + '/src/main.js',
    'charts': __dirname + '/src/charts.js',
    'table': __dirname + '/src/table.js'
  },
  output: {
    path: __dirname + '/build',
    publicPath: __dirname + '/build/',
    filename: '[name].build.js'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      vue: 'vue/dist/vue.js',
      bulma: 'bulma/bulma.sass',
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader', // <style lang="scss">
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax' // <style lang="sass">
          }
        }
      },
      {
        test: /\.js$/,
        // excluding some local linked packages.
        // for normal use cases only node_modules is needed.
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
