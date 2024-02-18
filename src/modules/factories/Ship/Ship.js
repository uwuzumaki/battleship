class Ship {
  constructor(length, name = null) {
    this.length = length;
    this.location = [];
    this.name = name;
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
