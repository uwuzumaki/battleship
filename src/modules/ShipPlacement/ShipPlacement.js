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

  const randomizeBtn = document.createElement("div");
  randomizeBtn.id = "randomize-btn";
  randomizeBtn.textContent = "Randomize!";
  newShipHolder.appendChild(randomizeBtn);

  for (let i = 0; i < 5; i++) {
    const shipDiv = document.createElement("div");
    shipDiv.classList.add("ship-holder-div");
    shipDiv.textContent = i + 1;
    shipDiv.id = i + 1;
    newShipHolder.appendChild(shipDiv);
  }

  const carrier = new Ship(5);
  const battleship = new Ship(4);
  const destroyer = new Ship(3);
  const submarine = new Ship(3);
  const patrolBoat = new Ship(2);
  const nullShip = new Ship(0);

  let currentShip = nullShip;
  newShipHolder.addEventListener("click", (e) => {
    if (e.target.classList.contains("ship-holder-div")) {
      switch (e.target.id) {
        case "1":
          currentShip = carrier;
          break;
        case "2":
          currentShip = battleship;
          break;
        case "3":
          currentShip = destroyer;
          break;
        case "4":
          currentShip = submarine;
          break;
        case "5":
          currentShip = patrolBoat;
          break;
      }
    }
    console.log(currentShip);
  });
};

export default ShipPlacement;
