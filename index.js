var ubase = require('ubase-vue')
var path =  require('path')
var CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports =  function(userConfig){
  userConfig.loaders = []

  userConfig.plugins = [new CopyWebpackPlugin([{
    from: path.resolve('./src/statics/**/*.*'),
    to: path.resolve('./www/')
  }
  ])]

  return ubase.default(userConfig)
}


