const { EventEmitter } = require('events');

class Gamer extends EventEmitter {
  constructor (name) {
    super();
    this.name = name;
  }
}

module.exports = Gamer;
