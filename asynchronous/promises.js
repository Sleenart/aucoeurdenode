exports.getRandomNumber = (maxValue) => {
  return new Promise((resolve, reject) => {
    const result = Math.floor(Math.random() * maxValue);
    if (typeof maxValue !== 'number') {
      return reject(new Error('veuillez passer un nombre'));
    }
    resolve(result);
  });
};
