class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.shipLocations = [];
    this.missed = [];
    this.allShips = [];
  }

  createBoard() {
    const newBoard = [];
    for (let i = 0; i < 100; i++) {
      newBoard.push(0);
    }
    return newBoard;
  }

  isValidShip(initialLocation, direction, ship) {
    let first = initialLocation;
    let last;
    if (direction == "n") last = first - 10 * (ship.length - 1);
    if (direction == "e") last = first + (ship.length - 1);
    if (direction == "s") last = first + 10 * (ship.length - 1);
    if (direction == "w") last = first - (ship.length - 1);

    //Makes sure the ships are placed on the board and don't go off it
    let validLocation;
    //prettier-ignore
    if (direction == "n" || direction == "s") validLocation = ((first >= 0 && first <= 99) && (last>= 0 && last <=100)) ? true: false
    if (direction == "e" || direction == "w")
      validLocation =
        Math.floor(first / 10) == Math.floor(last / 10) ? true : false;

    //Makes sure the ships don't overlap
    const locations = [];
    let unoccupied;
    for (let i = 0; i < ship.length; i++) {
      if (direction == "n") {
        locations.push(initialLocation - i * 10);
      }
      if (direction == "e") {
        locations.push(initialLocation + i);
      }
      if (direction == "s") {
        locations.push(initialLocation + i * 10);
      }
      if (direction == "w") {
        locations.push(initialLocation - i);
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
        if (direction == "n") {
          this.board[currentLocation] = 1;
          this.shipLocations.push(currentLocation);
          ship.location.push(currentLocation);
          currentLocation -= 10;
        }
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
        if (direction == "w") {
          this.board[currentLocation] = 1;
          this.shipLocations.push(currentLocation);
          ship.location.push(currentLocation);
          currentLocation -= 1;
        }
      }
    }
    this.allShips.push(ship);
    return valid ? ship : null;
  }

  receiveAttack(x, y) {
    const pos = x * 10 + y;
    const hit = this.shipLocations.includes(pos);
    if (hit) {
      for (let i = 0; i < this.allShips.length; i++) {
        const currentShip = this.allShips[i];
        if (currentShip.location.includes(pos)) {
          currentShip.shipHit();
          if (currentShip.getHit() == currentShip.length) {
            currentShip.updateStatus();
          }
        }
      }
    } else {
      this.missed.push(pos);
    }
    return hit;
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
