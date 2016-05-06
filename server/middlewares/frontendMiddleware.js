'use strict';

const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');

let build;
(process.env.NODE_ENV === 'production') ? build='https://s3-sa-east-1.amazonaws.com/runow/bundle.js' : build='/bundle.js';
let template = (
    `<!doctype html>
    <html class="no-js" lang="pt-br">
        <head>
            <meta charset="utf-8">
            <meta http-equiv="x-ua-compatible" content="ie=edge">
            <link rel="manifest" href="manifest.json">
            <meta name="mobile-web-app-capable" content="yes">
            <title>Ru Now</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">

            <link rel="apple-touch-icon" href="apple-touch-icon.png">
            <!-- Place favicon.ico in the root directory -->
            <link href='https://fonts.googleapis.com/css?family=Roboto:400,300,500' rel='stylesheet' type='text/css'>
        </head>
        <body>
            <!--[if lt IE 8]>
                <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
            <![endif]-->

            <!-- React component will be mounted here -->
            <div id='root'>
          </div>

            <script src="${build}"></script>
            <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
            <script>
                window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;
                ga('create','UA-XXXXX-Y','auto');ga('send','pageview')
            </script>
            <script src="https://www.google-analytics.com/analytics.js" async defer></script>
        </body>
    </html>`
  );

// Dev middleware
const addDevMiddlewares = (app, options) => {
  const compiler = webpack(options);
  const middleware = webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: options.output.publicPath,
    silent: true,
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  // const fs = middleware.fileSystem;
  app.get('*', (req, res) => {
    // const file = fs.readFileSync(path.join(options.output.path, '../', 'index.html'));
    // res.send(file.toString());
    res.send(template)
  });

};
 // Prod middleware
const addProdMiddlewares = (app, options) => {
  app.use(compression());
  app.use(options.output.publicPath, express.static(path.join(options.output.path, '../')));
  app.get('*', (req, res) => {
      res.send(template);
  });
}

/**
 * Front-end middleware
 */
module.exports = (options) => {
  const isProd = process.env.NODE_ENV === 'production';
  const app = express();

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    addDevMiddlewares(app, options);
  }

  return app;
};
