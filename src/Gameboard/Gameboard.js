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
    for (let i = 0; i <= shipSize.length; i++) {
      direction == "n"
        ? ((this.board[currentLocation - 10] = 1),
          (currentLocation -= 10),
          shipLocation.push(currentLocation))
        : null;
      direction == "e"
        ? ((this.board[currentLocation + 1] = 1),
          (currentLocation += 1),
          shipLocation.push(currentLocation))
        : null;
      direction == "s"
        ? ((this.board[currentLocation + 10] = 1),
          (currentLocation += 10),
          shipLocation.push(currentLocation))
        : null;
      direction == "w"
        ? ((this.board[currentLocation - 1] = 1),
          (currentLocation -= 1),
          shipLocation.push(currentLocation - 1))
        : null;
    }
  }
}

export { Gameboard };
