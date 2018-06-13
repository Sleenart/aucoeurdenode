const { getRandomNumber } = require('./asynchronous/promises');

console.log('avant getRandomNumber()');
// **** passage de deux arguments : un nombre et un callback
getRandomNumber(5, (err, result) => {
  if (err) {
    console.log(`erreur : ${err.message}`);
    throw err;
  }
  console.log(`résultat : ${result}`);
});
console.log('après getRandomNumber()');
// **** passage de deux arguments : un nombre et un callback (end)

console.log('avant getRandomNumber()');
// **** passage d'un seul argument : le nombre seul
getRandomNumber(5)
  .then(data => console.log(`résultat : ${data}`))
  .catch(error => console.log(`erreur : ${error.message}`));
console.log('après getRandomNumber()');
// **** passage d'un seul argument : le nombre seul (end)
