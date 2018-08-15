const { EventEmitter } = require('events');

class Game extends EventEmitter {
  constructor (gamer) {
    super();
    this.gamer = gamer;
    this.currentGame = {};
    setImmediate(() => {
      console.log('appel setImmediate');
      this.emit('created');
    });
    process.nextTick(() => {
      console.log('appel de process.nextTick');
      this.emit('created');
    });
    gamer.on('chooseGame', (game) => {
      this.currentGame = game;
      console.log(`${gamer.name} a choisi ${game.name}`);
    });
    gamer.on('startPlaying', () => {
      console.log(`${gamer.name} commence à jouer à ${this.currentGame.name}`);
    });
    gamer.on('goToBed', () => {
      console.log(`${gamer.name} arrête de jouer a ${this.currentGame.name} et va se coucher`);
    });
  }
}

module.exports = Game;
