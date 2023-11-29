import { Gameboard } from "../Gameboard/Gameboard";

class Player {
  constructor() {
    this.ships = [];
    this.gameboard = new Gameboard();
  }

  attack(x, y, gameboard) {
    return gameboard.receiveAttack(x, y);
  }

  randomAttack(gameboard) {
    let result;
    const y = Math.floor(Math.random() * 10);
    const x = Math.floor(Math.random() * 10);
    result = this.attack(x, y, gameboard);
    return result;
  }

  aiMove() {
    let result;
    do {
      result = this.randomAttack(gameboard);
    } while (result !== true || result !== false);
  }
}

export { Player };
