/* eslint-env node */
'use strict';

module.exports = function(/* environment, appConfig */) {
  //merged with the consuming application's ENV
  browserify: {
    tests: true
  }
};
