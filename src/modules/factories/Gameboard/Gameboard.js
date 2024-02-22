class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.shipLocations = [];
    this.attempts = [];
  }

  createBoard() {
    const newBoard = [];
    for (let i = 0; i < 100; i++) {
      newBoard.push(0);
    }
    return newBoard;
  }

  isValidShip(initialLocation, direction, ship) {
    let first = parseInt(initialLocation);
    let last = 0;
    if (direction == "e") last = first + (ship.length - 1);
    if (direction == "s") last = first + 10 * (ship.length - 1);
    //Makes sure the ships are placed on the board and don't go off it
    let validLocation;
    //prettier-ignore
    if (direction == "s") validLocation = ((first >= 0 && first <= 99) && (last>= 0 && last <=100)) ? true: false
    if (direction == "e")
      validLocation =
        Math.floor(first / 10) == Math.floor(last / 10) ? true : false;

    //Makes sure the ships don't overlap
    const locations = [];
    let unoccupied;
    for (let i = 0; i < ship.length; i++) {
      if (direction == "e") {
        locations.push(initialLocation + i);
      }
      if (direction == "s") {
        locations.push(initialLocation + i * 10);
      }
    }
    this.shipLocations.some((position) => locations.includes(position))
      ? (unoccupied = false)
      : (unoccupied = true);
    return validLocation && unoccupied ? true : false;
  }

  addShip(initialLocation, direction, ship) {
    let currentLocation = initialLocation;
    let valid = this.isValidShip(initialLocation, direction, ship);
    if (valid) {
      for (let i = 0; i < ship.length; i++) {
        if (direction == "e") {
          this.board[currentLocation] = 1;
          this.shipLocations.push(currentLocation);
          ship.location.push(currentLocation);
          currentLocation += 1;
        }
        if (direction == "s") {
          this.board[currentLocation] = 1;
          this.shipLocations.push(currentLocation);
          ship.location.push(currentLocation);
          currentLocation += 10;
        }
      }
    }
    return valid ? ship : null;
  }

  receiveAttack(pos) {
    const hit = this.shipLocations.includes(pos);
    const triedBefore = this.attempts.includes(pos);
    let result;
    triedBefore ? null : this.attempts.push(pos);
    if (hit && !triedBefore) {
      this.board[pos] = 2;
      result = true;
    } else if (!hit && !triedBefore) {
      this.board[pos] = 3;
      result = false;
    } else {
      result = null;
    }
    return result;
  }

  allSunk() {
    const numberOfships = this.allShips.length;
    let sunkShips = 0;
    for (let i = 0; i < numberOfships; i++) {
      const currentShip = this.allShips[i];
      if (!currentShip.currentStatus()) {
        sunkShips++;
      }
    }
    return numberOfships == sunkShips ? true : false;
  }
}

export { Gameboard };
