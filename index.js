// **** utilisation de fonction qui retourne un résultat == sans callback
// const synchronous = require('./asynchronous/synchronous');

// const result = synchronous.getRandomNumberSync(10);
// console.log(`nombre généré : ${result}`);

// let i = 0;
// const handle = setInterval(() => {
//   let result = synchronous.getRandomNumberSync(10);
//   console.log(`nombre généré dans setInterval : ${result}`);
//   i++;
//   if (i === 10) {
//     clearInterval(handle);
//     console.log('terminé');
//   }
// }, 50);

// const total = synchronous.addSync(2, 5);
// console.log(`total : ${total}`);
// **** utilisation de fonction qui retourne un résultat == sans callback (end)

// **** callback
const asynchronous = require('./asynchronous/asynchronous_1');

console.log('avant getRandomNumber()');

asynchronous.getRandomNumber(10, (err, res) => {
  if (err) throw err;
  console.log(`nombre généré par getRandomNumber() : ${res}`);
});

console.log('après getRandomNumber()');

// console.log('avant getRandomNumber() qui va provoquer une erreur');

// // string passée au lieu d'un number : provoquera une erreur
// asynchronous.getRandomNumber('azerty', (err, res) => {
//   if (err) throw err;
//   console.log(`nombre généré par getRandomNumber() : ${res}`);
// });

// console.log('après getRandomNumber() qui va provoquer une erreur');

asynchronous.add(2, 5, (error, result) => {
  if (error) console.error(`erreur : `, error.message);
  console.log(`résultat de add(2, 5) : ${result}`);
});

// **** callback (end)
