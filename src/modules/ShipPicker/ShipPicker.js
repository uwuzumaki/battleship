import "./ShipPicker.css";
import { Ship } from "../factories/Ship/Ship";

const ShipPicker = (player) => {
  const newBoardBody = document.getElementById("newgame-container");

  const newShipHolder = document.createElement("div");
  newShipHolder.id = "newship-holder";
  newBoardBody.appendChild(newShipHolder);

  const board = document.getElementById("newgame-player-board");
  board.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square-solid")) {
      const location = parseInt(e.target.id.match(/\d+/g)[0]);
      const valid = player.gameboard.isValidShip(location, "e", currentShip);
      if (valid) {
        for (let i = 0; i < currentShip.length; i++) {
          const square = document.getElementById(
            `newgame-player-board-square-${location + i}`
          );
          square.classList.add("picked-square");
        }
      }
    }
  });
  board.addEventListener("mouseout", (e) => {
    if (e.target.classList.contains("square-solid")) {
      const location = parseInt(e.target.id.match(/\d+/g)[0]);
      const valid = player.gameboard.isValidShip(location, "e", currentShip);
      if (valid) {
        for (let i = 0; i < currentShip.length; i++) {
          const square = document.getElementById(
            `newgame-player-board-square-${location + i}`
          );
          square.classList.remove("picked-square");
        }
      }
    }
  });
  board.addEventListener("click", (e) => {
    if (e.target.classList.contains("square-solid")) {
      const location = parseInt(e.target.id.match(/\d+/g)[0]);
      const valid = player.gameboard.isValidShip(location, "e", currentShip);
      if (valid) {
        player.gameboard.addShip(location, "e", currentShip);
        currentShip = nullShip;
      }
    }
  });

  const shipHolder = (size) => {
    const shipDiv = document.createElement("div");
    for (let j = size; j > 0; j--) {
      const innerBox = document.createElement("div");
      innerBox.classList.add("inner-box");
      shipDiv.appendChild(innerBox);
    }
    shipDiv.classList.add("ship-holder-div");
    shipDiv.dataset.shipNumber = `${size}`;
    newShipHolder.appendChild(shipDiv);
  };

  shipHolder(5);
  shipHolder(4);
  shipHolder(3);
  shipHolder(3);
  shipHolder(2);

  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const destroyer = new Ship(3);
  const submarine = new Ship(3);
  const patrolBoat = new Ship(2);
  const nullShip = new Ship(0);

  let currentShip = nullShip;
  newShipHolder.addEventListener("click", (e) => {
    const ship = e.target.parentNode.dataset.shipNumber;
    if (e.target.parentNode.classList.contains("ship-holder-div")) {
      switch (ship) {
        case "5":
          currentShip = carrier;
          break;
        case "4":
          currentShip = battleship;
          break;
        case "3":
          currentShip = destroyer;
          break;
        case "2":
          currentShip = patrolBoat;
          break;
        case "0":
          currentShip = submarine;
          break;
      }
    }
    console.log(currentShip);
  });
  return player;
};
export default ShipPicker;
