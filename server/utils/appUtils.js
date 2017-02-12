const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./../../webpack.config.js')

export const isProduction = () => {
  return process.env.NODE_ENV == 'production' //__dirname.indexOf('bitnami') > -1;
}

export const isTest = () => {  
  return process.env.NODE_ENV == 'test' //__dirname.indexOf('bitnami') > -1;
}

export const getPort = () => {
  return 3000
}

export const setupWebpack = (app) => {
  console.log(`[devUtils] Setting up HMR for frontend`)

  const compiler = webpack(config)

  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
}
