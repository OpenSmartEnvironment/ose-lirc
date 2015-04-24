'use strict';

var O = require('ose').object(module, 'ose/lib/kind');
exports = O.append('node').exports;

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
 * (/var/run/lirc/lircd). Emits the `"receive"` event, which can then
 * be, for example, handled by the [control.remote] component.
 *
 * @kind lirc
 * @class lirc.lib.lirc
 * @type singleton
 */

/**
 * Fired when the lirc module receives a command
 *
 * @event receive
 * @param data {Object}
 * @param data.count {Number} Incremented number reached during long press
 * @param data.remote {String} Remote controller name
 * @param data.lirc {String} Original LIRC command name
 * @param data.key {String} Command name after pre-processing
 */
