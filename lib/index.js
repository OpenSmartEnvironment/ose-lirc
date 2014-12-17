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
