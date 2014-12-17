'use strict';

var Ose = require('ose');
var M = Ose.module(module);

var Net = require('net');

// Public {{{1
exports.homeInit = function(entry) {  // {{{2
  connect(entry);
};

// }}}1
// Entry Event Handlers {{{1
// `this` is bound to entry.
function onError() {  // {{{2
  M.log.unhandled('LIRC ERROR', arguments);

  delete this.socket;

  setTimeout(connect.bind(null, this), 1000);
};

function onData(data) {  // {{{2
// console.log('LIRC DATA', data);

  data = data.split(' ');
  data = {
    remote: data[3],
    lirc: data[2],
    count: parseInt(data[1], 16)
  };

//  console.log('LIRC DATA', data);

  if (
    this.lastData &&
    (this.lastData.count === 0) &&
    (this.lastData.remote === data.remote) &&
    (this.lastData.lirc === data.lirc) &&
    (this.lastTime > (new Date().getTime() - 150))
  ) {
//    console.log('DOUBLE KEY SUPRESSED', data);
    return;
  }

  this.lastData = data;
  this.lastTime = new Date().getTime();

  var match =
    data.lirc.match(/^KEY_(.*)/) ||
    data.lirc.match(/^BTN_(.*)/)
  ;

  if (match) {
    data.key = match[1].toLowerCase();
  } else {
    data.key = data.lirc.toLowerCase();
  }

  this.emit('receive', data);
  return;
};

function onEnd(data) {  // {{{2
  M.log.unhandled('lirc end', data);

  delete this.socket;

  setTimeout(connect.bind(null, this), 1000);
};

// }}}1
// Private {{{1
function connect(entry) {  // {{{2
  entry.socket = Net.connect({path: '/var/run/lirc/lircd'});
  entry.socket.setEncoding('utf8');
  entry.socket.on('error', onError.bind(entry));
  entry.socket.on('data', onData.bind(entry));
  entry.socket.on('end', onEnd.bind(entry));
};

// }}}1
