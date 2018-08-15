// // *** basic EventEmitter
// const EventEmitter = require('events').EventEmitter;

// const programmer = new EventEmitter();

// let energy = 5;
// let insomniaRisk = 0;

// programmer.on('drinkCoffee', function (coffee = 'café noir') {
//   console.log(`après avoir bu un ${coffee} le programmeur se reveille`);
//   console.log(`niveau d'énergie ${++energy}`);
// });

// programmer.on('drinkCoffee', function () {
//   console.log('coup de fouet');
// });

// const increaseInsomnia = () => {
//   insomniaRisk = insomniaRisk + 1;
//   console.log(`le risque d'insommie a augmenté et se trouve au niveau ${insomniaRisk}`);
// };

// programmer.on('drinkCoffee', increaseInsomnia);

// programmer.emit('drinkCoffee');
// programmer.emit('drinkCoffee', 'café brésilien');
// programmer.emit('drinkCoffee');

// // ***
// const ShoppingList = require('./events/ShoppingList');
// const myShoppingList = new ShoppingList();

// myShoppingList.on('listCreated', () => {
//   console.log('la liste a été créée');
// });

// myShoppingList.on('added', (data) => {
//   console.log('liste après ajout de cet article : ', data);
// });

// myShoppingList.on('error', (error) => {
//   console.log(`erreur : ${error}`);
// });

// myShoppingList.once('bringFreezerBag', (data) => {
//   console.log('sac de congélation prévu', data);
// });

// myShoppingList.add('camembert');
// myShoppingList.add('haricots verts surgelés');
// myShoppingList.add('eau minéral');
// myShoppingList.add('poisson surgelé');
// myShoppingList.add('cocaïne');
// myShoppingList.add('flocons d\'avoine');

// // *** function that returns an EventEmitter
// const EventEmitter = require('events').EventEmitter;
// const getBook = function () {
//   const ee = new EventEmitter();
//   ee.emit('searchBookStarted');
//   const searchDuration = Math.floor(Math.random() * 5 * 1000);
//   setTimeout(() => {
//     const book = { title: 'super titre', author: 'super auteur' };
//     ee.emit('bookFound', book);
//   }, searchDuration);
//   return ee;
// };

// const desiredBook = getBook();

// desiredBook.on('searchBookStarted', function () {
//   console.log('la recherche du livre a commencé');
// });

// desiredBook.on('bookFound', function (data) {
//   console.log(`livre trouvé ${JSON.stringify(data)}`);
// });

// // *** 'data' event
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

// process.on('exit', (code) => {
//   console.log(`au revoir, avec le code : ${code}`);
// });

// // **** custom events
// const customer = require('./events/Customer')('fpitiot@gmail.com');
// const cart = require('./events/Cart')(customer);

// customer.on('customer_created', (newCustomer) => {
//   console.log('nouveau client créé : %j', newCustomer);
// });

// cart.on('article_added', (id) => {
//   console.log(`article ${id} ajouté`);
// });
// cart.on('show_cart', (data) => {
//   console.log(`caddie : %j`, data);
// });

// cart.addArticle({ name: 'épée', quantity: 1 });
// cart.addArticle({ name: 'DVD Kaamelott', quantity: 4 });
// cart.addArticle({ name: 'catapulte', quantity: 2 });
// cart.show();
// // **** custom events (end)

// *** communication entre objets
const Gamer = require('./events/Gamer');
const Game = require('./events/Game');

const sam = new Gamer('Sam');
const game = new Game(sam);
game.on('created', () => {
  console.log(`jeu créé`);
});
const teeworlds = { name: 'TeeWolrds', genre: 'Fast and fun' };
sam.emit('chooseGame', teeworlds);
sam.emit('startPlaying');
sam.emit('goToBed');
