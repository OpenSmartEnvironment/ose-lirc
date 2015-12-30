'use strict';

var O = require('ose').module(module);

var Net = require('net');

// Public {{{1
exports.homeInit = function(entry) {
  connect(entry);
};

// Entry Event Handlers {{{1
// `this` is bound to entry.
function onError() {  // {{{2
  O.log.unhandled('LIRC ERROR', arguments);

  delete this.socket;

  setTimeout(connect.bind(null, this), 1000);
};

function onData(val) {  // {{{2
// console.log('LIRC val', val);

  val = val.split(' ');
  val = {
    remote: val[3],
    lirc: val[2],
    count: parseInt(val[1], 16)
  };

//  console.log('LIRC val', val);

  if (
    this.lastData &&
    (this.lastData.count === 0) &&
    (this.lastData.remote === val.remote) &&
    (this.lastData.lirc === val.lirc) &&
    (this.lastTime > (new Date().getTime() - 200))
  ) {
//    console.log('DOUBLE KEY SUPRESSED', val);
    return;
  }

  this.lastData = val;
  this.lastTime = new Date().getTime();

  var match =
    val.lirc.match(/^KEY_(.*)/) ||
    val.lirc.match(/^BTN_(.*)/)
  ;

  if (match) {
    val.key = match[1].toLowerCase();
  } else {
    val.key = val.lirc.toLowerCase();
  }

  this.emit('receive', val);
  return;
};

function onEnd(val) {  // {{{2
  O.log.unhandled('lirc end', val);

  delete this.socket;

  setTimeout(connect.bind(null, this), 1000);
};

// Private {{{1
function connect(entry) {
  entry.socket = Net.connect({path: entry.dval.socket || '/var/run/lirc/lircd'});
  entry.socket.setEncoding('utf8');
  entry.socket.on('error', onError.bind(entry));
  entry.socket.on('data', onData.bind(entry));
  entry.socket.on('end', onEnd.bind(entry));
};

