var _ = require('lodash');

var config = {
  db: {
    url: 'mongodb://localhost/paddock'
  },
  
  port: process.env.PORT || 3000
};
process.env.NODE_ENV = process.env.NODE_ENV || config.db;
config.env = process.env.NODE_ENV;

var envConfig;
// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
try {
  envConfig = require('./' + config.env);
  // just making sure the require actually
  // got something back :)
  envConfig = envConfig || {};
} catch(e) {
  envConfig = {};
}

// merge 
module.exports = _.merge(config);
