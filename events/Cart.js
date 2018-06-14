const EventEmitter = require('events').EventEmitter;

class Cart extends EventEmitter {
  constructor (customer) {
    super();
    this.articles = {};
    this.articles.customerId = customer.currentID;
    this.id = customer.email + '_' + Date.now();
    this.currentArticleID = 1;
  }

  addArticle (article) {
    this.currentArticleID = this.currentArticleID;
    this.articles[this.currentArticleID] = article;
    this.emit('article_added', this.currentArticleID);
    this.currentArticleID = this.currentArticleID + 1;
  }

  show () {
    this.emit('show_cart', this);
  }
}

module.exports = (customer) => new Cart(customer);
