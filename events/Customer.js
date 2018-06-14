const { EventEmitter } = require('events');

class Customer extends EventEmitter {
  constructor (email) {
    super();
    this.email = email;
    this.creationDate = Date.now();
    this.id = this.generateId();
    setImmediate(() => {
      this.emit('customer_created', this);
    });
  }

  generateId () {
    var d = new Date().getTime();
    if (Date.now) {
      d = Date.now();
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }
}

module.exports = (email) => new Customer(email);
