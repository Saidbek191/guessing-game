class GuessingGame {
  constructor() {
    this.min = 0;
    this.max = 0;
    this.lastGuess = 0;
  }

  setRange(min, max) {
    this.min = min + 1;
    this.max = max - 1;
  }

  guess() {
    this.lastGuess = Math.round((this.min + this.max) / 2);
    return this.lastGuess;
  }

  lower() {
    this.max = this.lastGuess - 1;
  }

  greater() {
    this.min = this.lastGuess + 1;
  }
}

module.exports = GuessingGame;
