exports.getRandomNumber = (maxValue, callback) =>{
  const result = Math.floor(Math.random() * maxValue);
  // // utilise un callback mais est synchrone
  // callback(null, result);
  setTimeout(() => {
    if (typeof maxValue !== 'number') {
      return callback(new Error('veuillez passer un nombre'));
    }
    callback(null, result);
  }, 2000);
}

exports.add = (firstNumber, secondNumber, callback) =>{
  const result = firstNumber + secondNumber;
  setTimeout(() => {
    callback(null, result);
  }, 0);
}
