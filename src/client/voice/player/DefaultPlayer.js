const BasePlayer = require('./BasePlayer');
const fs = require('fs');

class DefaultPlayer extends BasePlayer {
  playFile(file, obj) {
	  var _obj = obj;
var _obj$seek = _obj.seek;
var seek = _obj$seek === undefined ? 0 : _obj$seek;
var _obj$volume = _obj.volume;
var volume = _obj$volume === undefined ? 1 : _obj$volume;

    const options = { seek: seek, volume: volume };
    return this.playStream(fs.createReadStream(file), options);
  }

  playStream(stream, obj) {
	  var _obj = obj;
var _obj$seek = _obj.seek;
var seek = _obj$seek === undefined ? 0 : _obj$seek;
var _obj$volume = _obj.volume;
var volume = _obj$volume === undefined ? 1 : _obj$volume;
var _obj$passes = _obj.passes;
var passes = _obj$passes === undefined ? 1 : _obj$passes;

    this._shutdown();
    const options = { seek, volume, passes };
    const pcmStream = this.convertStream(stream, options);
    const dispatcher = this.playPCMStream(pcmStream, options);
    return dispatcher;
  }
}

module.exports = DefaultPlayer;
