const EventEmitter = require('events').EventEmitter;

class ShoppingList extends EventEmitter {
  constructor () {
    super();
    process.nextTick(() => {
      this.emit('listCreated');
    });
    // setImmediate(() => {
    //   this.emit('listCreated');
    // });
    this.list = [];
  }

  add (item) {
    // console.log(`${item} item.includes('surgelé')`, item.includes('surgelé'));
    this.emit('added', this.list);
    if (item.includes('surgelé')) {
      this.emit('bringFreezerBag', 'le sac rouge');
    }
    if (item.includes('cocaïne')) {
      this.emit('error', new Error('ce produit prohibé ne peut pas être ajouté à la liste'));
      return;
    }
    this.list = [...this.list, item];
  }

  shoppingDone () {
    this.emit('done');
  }
}

module.exports = ShoppingList;
