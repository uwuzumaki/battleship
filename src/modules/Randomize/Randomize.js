import { Player } from "../factories/Player/Player";
import { Ship } from "../factories/Ship/Ship";

const Randomize = () => {
  const cpu = new Player();
  const rCord = () => Math.floor(Math.random() * 100);
  const rDir = () => {
    return Math.random() < 0.5;
  };

  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const destroyer = new Ship(3);
  const submarine = new Ship(3);
  const patrolBoat = new Ship(2);

  let placed;

  do {
    const direction = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), direction, carrier);
  } while (!placed);

  do {
    const direction = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), direction, battleship);
  } while (!placed);

  do {
    const direction = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), direction, destroyer);
  } while (!placed);

  do {
    const direction = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), direction, submarine);
  } while (!placed);

  do {
    const direction = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), direction, patrolBoat);
  } while (!placed);

  return cpu;
};

export default Randomize;
