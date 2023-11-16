class Ship {
  constructor(length) {
    this.length = length;
    this.location = [];
  }

  hit = 0;
  shipStatus = true;

  shipHit() {
    this.hit++;
  }

  getHit() {
    return this.hit;
  }

  updateStatus() {
    this.shipStatus = false;
  }

  currentStatus() {
    return this.shipStatus;
  }

  isSunk() {
    return this.hit == this.length ? true : false;
  }
}

export { Ship };
