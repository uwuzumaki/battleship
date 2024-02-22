import { Gameboard } from "../Gameboard/Gameboard";

class Player {
  constructor() {
    this.ships = [];
    this.gameboard = new Gameboard();
    this.enemyHit = 0;
  }

  attack(pos) {
    return this.gameboard.receiveAttack(pos);
  }

  randomAttack() {
    let result;
    do {
      const pos = Math.floor(Math.random() * 100);
      result = this.gameboard.receiveAttack(pos);
    } while (result == null);
    return result;
  }

  goodHit() {
    this.enemyHit++;
    console.log(this.enemyHit);
  }

  checkWin() {
    return this.enemyHit == 17;
  }
}

export { Player };
