'use strict';

const O = require('ose')(module)
  .singleton('ose/lib/http/content')
;

exports = O.init();

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
exports.addModule('lib/index');
exports.addModule('lib/lirc/index');

