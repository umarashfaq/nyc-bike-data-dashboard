// src
const config = require('./../../webpack.config.js')

// libs
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
import request from 'request'

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
  console.log(`Setting up HMR for frontend`)

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

export const handleError = (res, error) => {
  const message = `An error occurred on server: ${error}`
  
  console.group()
  console.log(message)
  console.log(error.stack)
  console.groupEnd()
  
  res.status(500)
  res.send({
    message
  })
}

export const getJSON = url => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        resolve(JSON.parse(body))
      } else {
        reject(`Couldn't fetch JSON: ${error}`)
      }
    })
  })
}
