import { Gameboard } from "../Gameboard/Gameboard";
import { Ship } from "../Ship/Ship";
describe("Gameboard", () => {
  let newGameboard;
  let ship;
  beforeEach(() => {
    newGameboard = new Gameboard();
    ship = new Ship(3);
  });
  test("Checks if gameboard is made", () => {
    expect(newGameboard.board.length).toEqual(100);
  });
  test("isValid works", () => {
    expect(newGameboard.isValid(20, "n", ship)).toBeTruthy();
    expect(newGameboard.isValid(13, "n", ship)).toBeFalsy();
    expect(newGameboard.isValid(79, "s", ship)).toBeTruthy();
    expect(newGameboard.isValid(94, "s", ship)).toBeFalsy();
    expect(newGameboard.isValid(53, "e", ship)).toBeTruthy();
    expect(newGameboard.isValid(39, "e", ship)).toBeFalsy();
    expect(newGameboard.isValid(94, "w", ship)).toBeTruthy();
    expect(newGameboard.isValid(70, "w", ship)).toBeFalsy();
  });
  test("Add a valid ship", () => {
    const shipLoc = newGameboard.addShip(32, "s", ship);
    expect(newGameboard.board[32]).toEqual(1);
    expect(newGameboard.board[42]).toEqual(1);
    expect(newGameboard.board[52]).toEqual(1);
    expect(shipLoc).toEqual([32, 42, 52]);
  });
  test("Add an invalid ship", () => {
    const shipLoc = newGameboard.addShip(12, "n", ship);
    expect(shipLoc).toBeFalsy();
  });
});
