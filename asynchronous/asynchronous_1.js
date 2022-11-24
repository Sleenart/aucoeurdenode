exports.getRandomNumber = (maxValue, callback) => {
  const result = Math.floor(Math.random() * maxValue);
  // // utilise un callback mais est synchrone
  // callback(null, result);
  setTimeout(() => {
    if (typeof maxValue !== "number") {
      console.log("getRandomNumber probleme de type");
      callback(new Error("veuillez passer un nombre"));
    }

    console.log("getRandomNumber: Avant Appel de la CallBack");
    callback(null, result); // Return et Appelé après 2secondes
    console.log("getRandomNumber: Après Appel de la CallBack");
  }, 2000);
};

exports.add = (firstNumber, secondNumber, callback) => {
  const result = firstNumber + secondNumber;
  setTimeout(() => {
    console.log("add: Avant Appel de la CallBack");
    callback(null, result); // Appelé après 2secondes

    console.log("add: Après Appel de la CallBack");
  }, 0);
};
