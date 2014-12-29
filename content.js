'use strict';

exports = require('ose')
  .singleton(module, 'ose/lib/http/content')
  .exports
;

/** Docs  {{{1
 * @module lirc
 */

/**
 * @caption LIRC content
 *
 * @readme
 * Provides files of [ose-lirc] package to the browser.
 *
 * @class lirc.content
 * @type singleton
 * @extends ose.lib.http.content
 */

// Public {{{1
exports.addFiles = function() {
  this.addModule('lib/index');
  this.addModule('lib/lirc/index');
};
