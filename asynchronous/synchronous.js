exports.getRandomNumberSync = (maxValue) => {
  return Math.floor(Math.random() * maxValue);
};

exports.addSync = (firstNumber, secondNumber) => {
  return firstNumber + secondNumber;
};
