import { Gameboard } from "../Gameboard/Gameboard";
import { Ship } from "../Ship/Ship";
describe("Gameboard", () => {
  let newGameboard;
  let ship;
  let ship2;
  beforeEach(() => {
    newGameboard = new Gameboard();
    ship = new Ship(3);
    ship2 = new Ship(4);
    newGameboard.addShip(99, "n", ship2);
  });
  test("Checks if gameboard is made", () => {
    expect(newGameboard.board.length).toEqual(100);
  });
  test("isValidShip works", () => {
    expect(newGameboard.isValidShip(20, "n", ship)).toBeTruthy();
    expect(newGameboard.isValidShip(13, "n", ship)).toBeFalsy();
    expect(newGameboard.isValidShip(78, "s", ship)).toBeTruthy();
    expect(newGameboard.isValidShip(94, "s", ship)).toBeFalsy();
    expect(newGameboard.isValidShip(53, "e", ship)).toBeTruthy();
    expect(newGameboard.isValidShip(39, "e", ship)).toBeFalsy();
    expect(newGameboard.isValidShip(94, "w", ship)).toBeTruthy();
    expect(newGameboard.isValidShip(70, "w", ship)).toBeFalsy();
    expect(newGameboard.isValidShip(99, "w", ship)).toBeFalsy();
  });
  test("Add a valid ship", () => {
    newGameboard.addShip(32, "s", ship);
    expect(newGameboard.board[32]).toEqual(1);
    expect(newGameboard.board[42]).toEqual(1);
    expect(newGameboard.board[52]).toEqual(1);
    expect(ship.location).toEqual([32, 42, 52]);
  });
  test("Add an invalid ship", () => {
    const shipLoc = newGameboard.addShip(12, "n", ship);
    expect(shipLoc).toBeFalsy();
  });
});

describe("Player actions", () => {
  let newGameboard;
  let ship, ship2;
  beforeEach(() => {
    newGameboard = new Gameboard();
    ship = new Ship(3);
    ship2 = new Ship(3);
    newGameboard.addShip(32, "s", ship);
    newGameboard.addShip(66, "s", ship2);
  });

  test.only("receiveAttack", () => {
    expect(newGameboard.receiveAttack(3, 2)).toBeTruthy();
    expect(newGameboard.receiveAttack(5, 3)).toBeFalsy();
    expect(newGameboard.allShips[0].hit).toEqual(1);
    expect(newGameboard.receiveAttack(3, 2)).toBeNull();
  });

  test("Sink all ships", () => {
    newGameboard.receiveAttack(3, 2);
    newGameboard.receiveAttack(4, 2);
    newGameboard.receiveAttack(5, 2);
    newGameboard.receiveAttack(6, 6);
    newGameboard.receiveAttack(7, 6);
    expect(newGameboard.allSunk()).toBeFalsy();
    newGameboard.receiveAttack(8, 6);
    expect(newGameboard.allSunk()).toBeTruthy();
  });
});
