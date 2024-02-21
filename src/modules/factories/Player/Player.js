import { Gameboard } from "../Gameboard/Gameboard";

class Player {
  constructor() {
    this.ships = [];
    this.gameboard = new Gameboard();
  }

  attack(x, y) {
    return this.gameboard.receiveAttack(x, y);
  }

  randomAttack(gameboard) {
    let result;
    const y = Math.floor(Math.random() * 10);
    const x = Math.floor(Math.random() * 10);
    result = this.attack(x, y, gameboard);
    return result;
  }
}

export { Player };
