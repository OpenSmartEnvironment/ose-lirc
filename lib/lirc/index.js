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
 * Receives and processes LIRC commands from the LIRC Unix socket
 * (/var/run/lirc/lircd). Emits the "receive" event, which can then
 * be, for example, handled by the [control.remote] component.
 *
 * @class lirc.lib.lirc
 * @type singleton
 */

/**
 * Fired when the lirc module receives a command
 *
 * @event
 * @param {Object}
 *    {
 *      count: {Number} Incremented number reached during long press
 *      remote: {String} Remote controller name
 *      lirc: {String} Original LIRC command name
 *      key: {String} Command name after pre-processing
 *    }
 */
