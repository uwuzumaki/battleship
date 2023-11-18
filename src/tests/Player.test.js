import { Gameboard } from "../Gameboard/Gameboard";
import { Player } from "../Player/Player";
import { Ship } from "../Ship/Ship";

describe("Player and gameboard interactions", () => {
  let gameboard;
  let player;
  let ship;
  beforeEach(() => {
    gameboard = new Gameboard();
    player = new Player();
    ship = new Ship(4);
    jest
      .spyOn(global.Math, "random")
      .mockReturnValue(0.6)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, "random").mockRestore();
  });

  test("The player is created", () => {
    expect(player.ships).toEqual([]);
    expect(player.gameboard.addShip(33, "s", ship).getHit()).toEqual(0);
  });
  test("The player can attack", () => {
    gameboard.addShip(33, "s", ship);
    expect(player.attack(3, 3, gameboard)).toBeTruthy();
    expect(player.attack(3, 3, gameboard)).toBeNull();
  });
  test("The AI can attack an empty square", () => {
    expect(player.randomAttack(gameboard)).toBeFalsy();
  });
  test("The AI can attack an occupied square", () => {
    gameboard.addShip(55, "s", ship);
    expect(player.randomAttack(gameboard)).toBeTruthy();
  });
  test("The AI will repick a new square", () => {
    jest
      .spyOn(global.Math, "random")
      .mockReturnValue(0.6)
      .mockReturnValueOnce(0.5)
      .mockReturnValueOnce(0.5);
    gameboard.addShip(55, "s", ship);
    expect(player.randomAttack(gameboard)).toBeTruthy();
    expect(player.randomAttack(gameboard)).toBeNull();
    expect(player.randomAttack(gameboard)).toBeFalsy();
  });
});
