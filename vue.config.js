module.exports = {
    configureWebpack: {
      output: {
        libraryTarget: 'umd',
         umdNamedDefine: true
      },
      entry: './src/index.js'
    },
  };