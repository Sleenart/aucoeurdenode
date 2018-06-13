// **** promises
console.log('avant getRandomNumber()');
const { getRandomNumber } = require('./asynchronous/promises');

getRandomNumber(5)
  .then(data => console.log(`résultat : ${data}`))
  .catch(error => console.log(`erreur : ${error.message}`));
console.log('après getRandomNumber()');
// **** promises (end)

// // **** promises reject
// const { getRandomNumber } = require('./asynchronous/promises');

// getRandomNumber('salut')
//   .then(data => console.log(`résultat : ${data}`))
//   .catch(error => console.log(`erreur : ${error.message}`));

// // **** promises reject (end)
