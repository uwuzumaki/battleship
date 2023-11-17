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
});
