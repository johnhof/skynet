'use strict'

let fs = require('fs');
let _  = require('lodash');

module.exports.loadConfig = function () {
  let getConf   = function (name) { return  fs.existsSync('./config/' + name + '.json') && require('../config/' + name + '.json') || {}; }
  let localConf = getConf('local');
  let devConf   = getConf('development');
  let prodConf  = getConf('production');
  let baseconf  = process.env.NODE_ENV === 'production' ? prodConf : devConf;
  let config    =  _.defaults(localConf, baseconf, {
    botDirectory : './bots',
    port         : 2011
  });

  config.port         = process.env.PORT || config.port;
  config.botDirectory = /\/$/.test(config.botDirectory) ? config.botDirectory : (config.botDirectory + '/');
  config.botDirectory = config.botDirectory.replace(/^\.\//, process.cwd() + '/');

  return config;
}


module.exports.botMap = function (config) {
  let bots = {};
  console.log()
  _.each(config.bots, function (botConfig) {
    var botPath = (config.botDirectory + botConfig.name);
    if ((fs.existsSync(botPath) || fs.existsSync(botPath + '.js')) && botConfig.tokens && botConfig.tokens.incoming) {
      bots[botConfig.tokens.incoming] = botConfig;
      bots[botConfig.tokens.incoming].controller = require(botPath);
      console.log('  ✔  '.green + botConfig.name + ' expecting token '.grey + botConfig.tokens.incoming);
    } else {
      console.log('  ✘  '.red + botConfig.name  + ' - '.grey + botPath .grey);
    }
  });

  return bots;
}
