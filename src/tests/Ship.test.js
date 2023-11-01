import { Ship } from "../Ship/Ship";

describe("Ship test", () => {
  let tempShip;
  beforeEach(() => {
    tempShip = new Ship(3);
  });

  test("Test ship length", () => {
    expect(tempShip.length).toEqual(3);
  });
  test("Test counter twice", () => {
    tempShip.shipHit();
    tempShip.shipHit();
    expect(tempShip.getHit()).toEqual(2);
  });
  test("Ship is sunk", () => {
    tempShip.shipHit();
    tempShip.shipHit();
    tempShip.shipHit();
    expect(tempShip.isSunk()).toBeTruthy();
  });
});
