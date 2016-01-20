'use strict';

const O = require('ose')(module)
  .singleton('ose/lib/kind')
  .prepend('node')
;

exports = O.init('control', 'lirc');

exports.role = ['remote'];

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
 * @param val {Object}
 * @param val.count {Number} Incremented number reached during long press
 * @param val.remote {String} Remote controller name
 * @param val.lirc {String} Original LIRC command name
 * @param val.key {String} Command name after pre-processing
 */

