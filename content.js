'use strict';

var O = require('ose').object(module, Init, 'ose/lib/http/content');
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
function Init() {  // {{{2
  O.super.call(this);

  this.addModule('lib/index');
  this.addModule('lib/lirc/index');
};

// }}}1
