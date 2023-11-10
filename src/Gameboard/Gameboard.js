class Gameboard {
  constructor() {
    this.board = this.createBoard();
  }

  createBoard() {
    const newBoard = [];
    for (let i = 0; i < 100; i++) {
      newBoard.push(0);
    }
    return newBoard;
  }

  isValid(initialLocation, direction, ship) {
    let first = initialLocation;
    let last;
    if (direction == "n") last = first - 10 * (ship.length - 1);
    if (direction == "e") last = first + (ship.length - 1);
    if (direction == "s") last = first + 10 * (ship.length - 1);
    if (direction == "w") last = first - (ship.length - 1);

    let valid;
    //prettier-ignore
    if (direction == "n" || direction == "s") valid = ((first >= 0 && first <= 99) && (last>= 0 && last <=100)) ? true: false
    if (direction == "e" || direction == "w")
      valid = Math.floor(first / 10) == Math.floor(last / 10) ? true : false;
    return valid;
  }

  addShip(initialLocation, direction, ship) {
    let currentLocation = initialLocation;
    let valid = this.isValid(initialLocation, direction, ship);
    let shipLocation = [];
    if (valid) {
      for (let i = 0; i < ship.length; i++) {
        if (direction == "n") {
          this.board[currentLocation] = 1;
          shipLocation.push(currentLocation);
          currentLocation -= 10;
        }
        if (direction == "e") {
          this.board[currentLocation] = 1;
          shipLocation.push(currentLocation);
          currentLocation += 1;
        }
        if (direction == "s") {
          this.board[currentLocation] = 1;
          shipLocation.push(currentLocation);
          currentLocation += 10;
        }
        if (direction == "w") {
          this.board[currentLocation] = 1;
          shipLocation.push(currentLocation);
          currentLocation -= 1;
        }
      }
    }
    return valid ? shipLocation : null;
  }
}

export { Gameboard };
