'use strict';

var Ose = require('ose');
var M = Ose.singleton(module, 'ose/lib/kind');
exports = M.append('node').exports;

/** Doc // {{{1
 * @module lirc
 */

/**
 * @caption LIRC kind
 *
 * @readme
 * Entry kind for connecting to and communicating with the LIRC
 * daemon.
 *
 * Uses [control.remote] component.
 *
 * @class lirc.lib.lirc
 */
