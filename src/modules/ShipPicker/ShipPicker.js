import "./ShipPicker.css";
import { Ship } from "../factories/Ship/Ship";

// This functions creates the holder for the ships in the "Place your ships!" modal
// Each ship can be clicked and then placed on the board.
// Once placed on the board, it will be added to a player object that gets returned to ShipPlacement
const ShipPicker = (player) => {
  const newBoardBody = document.getElementById("newgame-container");

  const newShipHolder = document.createElement("div");
  newShipHolder.id = "newship-holder";
  newBoardBody.appendChild(newShipHolder);

  const board = document.getElementById("newgame-container-child");
  board.addEventListener("mouseover", (e) => {
    if (e.target.classList.contains("square-solid")) {
      const location = parseInt(e.target.id.match(/\d+/g)[0]);
      const valid = player.gameboard.isValidShip(location, "e", currentShip);
      if (valid) {
        for (let i = 0; i < currentShip.length; i++) {
          const square = document.getElementById(
            `newgame-container-child-square-${location + i}`
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
            `newgame-container-child-square-${location + i}`
          );
          square.classList.remove("picked-square");
        }
      }
    }
  });
  board.addEventListener("click", (e) => {
    if (currentShip.length != 0) {
      if (e.target.classList.contains("square-solid")) {
        const location = parseInt(e.target.id.match(/\d+/g)[0]);
        const valid = player.gameboard.isValidShip(location, "e", currentShip);
        if (valid) {
          player.gameboard.addShip(location, "e", currentShip);
          document.getElementById(currentShip.name).style.display = "none";
          currentShip = nullShip;
        }
      }
    }
  });

  const shipHolder = (size, name) => {
    const shipDivWrapper = document.createElement("div");
    shipDivWrapper.classList.add("ship-text");
    shipDivWrapper.id = name;
    shipDivWrapper.textContent = `${name}`;
    const shipDiv = document.createElement("div");
    for (let j = size; j > 0; j--) {
      const innerBox = document.createElement("div");
      innerBox.classList.add("inner-box");
      shipDiv.appendChild(innerBox);
    }
    shipDiv.classList.add("ship-holder-div");
    shipDiv.dataset.shipName = `${name}`;
    shipDivWrapper.appendChild(shipDiv);
    newShipHolder.appendChild(shipDivWrapper);
  };

  shipHolder(5, "Carrier");
  shipHolder(4, "Battleship");
  shipHolder(3, "Destroyer");
  shipHolder(3, "Submarine");
  shipHolder(2, "Patrol Boat");

  const carrier = new Ship(5, "Carrier");
  const battleship = new Ship(4, "Battleship");
  const destroyer = new Ship(3, "Destroyer");
  const submarine = new Ship(3, "Submarine");
  const patrolBoat = new Ship(2, "Patrol Boat");
  const nullShip = new Ship(0);

  let currentShip = nullShip;
  newShipHolder.addEventListener("click", (e) => {
    const ship = e.target.parentNode.dataset.shipName;
    if (e.target.parentNode.classList.contains("ship-holder-div")) {
      switch (ship) {
        case "Carrier":
          currentShip = carrier;
          break;
        case "Battleship":
          currentShip = battleship;
          break;
        case "Destroyer":
          currentShip = destroyer;
          break;
        case "Patrol Boat":
          currentShip = patrolBoat;
          break;
        case "Submarine":
          currentShip = submarine;
          break;
      }
    }
  });
  return player;
};
export default ShipPicker;
