'use strict';

var Ose = require('ose');
var M = Ose.package(module);
exports = M.init();

/** Docs {{{1
 * @caption Open Smart Environment LIRC package
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
 * @planned
 * - Convert LIRC commands to Unicode characters, eg. 'TELEVISION'
 *   (U+1F4FA).
 * - Sending LIRC commands.
 *
 * See [bundle.lirc] example application
 *
 * @module lirc
 * @main lirc
 */

/**
 * @caption OSE LIRC core
 *
 * @readme
 * Core singleton of ose-lirc npm package. Register [entry kinds]
 * defined by this package to the `"control"` [scope].
 *
 * @class lirc.lib
 * @type singleton
 */

// Public  // {{{1
exports.browserConfig = true;

M.content();

M.scope = 'control';
M.kind('./lirc', 'lirc');
