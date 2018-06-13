exports.getRandomNumber = (maxValue, cb) => {
  const errorMessage = 'veuillez passer un nombre';
  if (cb !== undefined) {
    setTimeout(() => {
      const result = Math.floor(Math.random() * maxValue);
      if (typeof maxValue !== 'number') {
        const error = new Error(errorMessage);
        return cb(error);
      }
      return cb(null, result);
    }, 0);
  }

  return new Promise((resolve, reject) => {
    const result = Math.floor(Math.random() * maxValue);
    if (typeof maxValue !== 'number') {
      const error = new Error(errorMessage);
      reject(error);
    }
    return resolve(result);
  });
};
