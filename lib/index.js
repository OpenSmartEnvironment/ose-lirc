'use strict';

const O = require('ose')(module)
  .setPackage('ose-lirc')
;

/** Docs {{{1
 * @caption LIRC
 *
 * @readme
 * This package allows to use LIRC in OSE. It is thus possible to
 * manage your environment using IR remote controllers.
 *
 * It forwards received commands to the [control.remote] component.
 *
 * @description
 *
 * ## Command names pre-processing
 *
 * Received LIRC command names are pre-processed by removing
 * "KEY_" and "BTN_" and converting the rest of the command names to
 * lowercase.
 *
 * It also suppresses double presses of the same button within 150 ms.
 *
 * See [LIRC example].
 *
 * @planned
 * - Convert LIRC commands to Unicode characters, eg. 'TELEVISION'
 *   (U+1F4FA).
 * - Sending LIRC commands.
 *
 * @module lirc
 * @main lirc
 */

/**
 * @caption LIRC core
 *
 * @readme
 * Core singleton of ose-lirc npm package. Register [entry kinds]
 * defined by this package to the `"control"` [schema].
 *
 * @class lirc.lib
 * @type singleton
 */

// Public  // {{{1
exports.browserConfig = true;

exports.config = function(name, val, deps) {
  require('./lirc');

  O.content('../content');
};
