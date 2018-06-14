// // 'data' event
// process.stdin.on('data', (data) => {
//   // // afficher le buffer
//   // console.log(data);

//   // convertir le buffer en chaine
//   console.log(data.toString());
// });

// // 'end' event
// process.stdin.on('end', (data) => {
//   console.log('end : ', data);
// });

// **** custome events
const customer = require('./events/Customer')('fpitiot@gmail.com');
const cart = require('./events/Cart')(customer);

customer.on('customer_created', (newCustomer) => {
  console.log('nouveau client créé : %j', newCustomer);
});

cart.on('article_added', (id) => {
  console.log(`article ${id} ajouté`);
});
cart.on('show_cart', (data) => {
  console.log(`caddie : %j`, data);
});

cart.addArticle({ name: 'épée', quantity: 1 });
cart.addArticle({ name: 'DVD Kaamelott', quantity: 4 });
cart.addArticle({ name: 'catapulte', quantity: 2 });
cart.show();
// **** custome events (end)
