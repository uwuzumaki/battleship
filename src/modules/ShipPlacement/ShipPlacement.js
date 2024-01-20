import "./ShipPlacement.css";
import PlayerBoard from "../PlayerController/PlayerController";
import { Ship } from "../factories/Ship/Ship";

const ShipPlacement = () => {
  const modal = document.getElementById("newboard-modal");
  modal.textContent = "";

  const newBoardTitle = document.createElement("div");
  newBoardTitle.id = "newboard-title";
  newBoardTitle.textContent = "Place your ships!";
  modal.appendChild(newBoardTitle);

  // ----- Controls the board start -----
  const newBoardBody = document.createElement("div");
  newBoardBody.id = "newgame-container";
  modal.appendChild(newBoardBody);

  const player = PlayerBoard("newgame-player-board", "newgame-container");
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
          square.style = "background-color: green";
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
          square.style = "";
          console.log("123");
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

  // ----- Controls the board end -----
  // ----- Controls the ship start -----
  const newShipHolder = document.createElement("div");
  newShipHolder.id = "newship-holder";
  newBoardBody.appendChild(newShipHolder);

  for (let i = 5; i > 1; i--) {
    const shipDiv = document.createElement("div");
    for (let j = i; j > 0; j--) {
      const innerBox = document.createElement("div");
      innerBox.classList.add("inner-box");
      shipDiv.appendChild(innerBox);
    }
    shipDiv.classList.add("ship-holder-div");
    shipDiv.dataset.shipNumber = `${i}`;
    newShipHolder.appendChild(shipDiv);
  }

  const shipDiv = document.createElement("div");
  for (let i = 3; i > 0; i--) {
    const innerBox = document.createElement("div");
    innerBox.classList.add("inner-box");
    shipDiv.appendChild(innerBox);
  }
  shipDiv.classList.add("ship-holder-div");
  shipDiv.dataset.shipNumber = "0";
  newShipHolder.insertBefore(
    shipDiv,
    document.querySelector("[data-ship-number='3']")
  );

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

  const confirmDiv = document.createElement("div");
  confirmDiv.id = "confirm-div";
  modal.appendChild(confirmDiv);

  const confirmButton = document.createElement("div");
  confirmButton.classList.add("modal-button");
  confirmButton.textContent = "Confirm";
  confirmDiv.appendChild(confirmButton);

  const resetButton = document.createElement("div");
  resetButton.classList.add("modal-button");
  resetButton.textContent = "Reset";
  confirmDiv.appendChild(resetButton);
};

export default ShipPlacement;
