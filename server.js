const path = require('path')
const express = require('express')
import { isProduction, isTest, getPort, setupWebpack } from './server/utils/appUtils'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import compression from 'compression'

const port = getPort()
const app = express()
const httpServer = require('http').Server(app)

if(!isProduction() && !isTest())
  setupWebpack(app)
  
// gzip filter
app.use(compression())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/public'));
app.use('/images', express.static(__dirname + "/images"));
// If you declare your session and passport configs above static directory configs then all requests 
//for static content will also get a session, which is not good.``
app.use(cookieParser());
// security package
app.use(helmet())
app.set('views', path.join(__dirname, 'views'));

// Include server routes as a middleware
app.use((req, res, next) => {require('./server/controllers/defaultController')(req, res, next);});
app.use((req, res, next) => {require('./server/controllers/api/stationApiController')(req, res, next);});

//generic error handler
app.use((err, req, res, next) => {  
  console.log(`An error occurred `, err)
  res.status(500).send(`An internal server error has occurred`)
})

httpServer.listen(port, (err) => {
  if (err)
    console.log(err)

  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port)
})
