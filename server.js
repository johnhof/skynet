'use strict'

let koa     = require('koa');
let parser  = require('koa-bodyparser');
let _       = require('lodash');
let colors  = require('colors');
let fs      = require('fs');
let helpers = require('./lib/helpers');

// set up config
const config = helpers.loadConfig();
const botMap = helpers.botMap(config);

let app = koa();
app.use(parser());
app.use(function *() {
  let ctx = this;
  ctx.config  = config;
  ctx.bot     = botMap[ctx.request.body.token];

  ctx.error = function (status, err) {
    ctx.status = status;
    ctx.body = { error : err };
  }
  ctx.respond = function (text) {
    ctx.status = 200;
    ctx.body = { text : text };
  };

  if (ctx.bot && ctx.bot.controller) {
    console.log('    ' + ctx.bot.name + (' --> "' + ctx.request.body.text + '"').grey)
    yield ctx.bot.controller;
  }

  if (!ctx.body) {
    console.log('    Bot not found ' + ('--> ' + ctx.request.body.token + ' - "' + ctx.request.body.text + '"').grey)
    ctx.error(404, 'Bot not found');
  }
});

app.listen(config.port);
console.log('\n  Listening on port ' + config.port + '\n');
