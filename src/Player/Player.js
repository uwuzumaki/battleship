import { Gameboard } from "../Gameboard/Gameboard";

class Player {
  constructor() {
    this.ships = [];
    this.gameboard = new Gameboard();
  }

  attack(x, y, gameboard) {
    return gameboard.receiveAttack(x, y);
  }
}

export { Player };
