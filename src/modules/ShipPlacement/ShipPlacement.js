import "./ShipPlacement.css";
import PlayerBoard from "../PlayerController/PlayerController";

const ShipPlacement = () => {
  const modal = document.getElementById("newboard-modal");

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
  board.addEventListener("click", (e) => {
    console.log(e.target.id);
  });

  // ----- Controls the board end -----
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
    shipDiv.textContent = i;
    shipDiv.id = i + 1;
    newShipHolder.appendChild(shipDiv);
  }

  let currentShip = null;
  newShipHolder.addEventListener("click", (e) => {
    if (e.target.classList.contains("ship-holder-div")) {
      currentShip = e.target.id;
      console.log(currentShip);
    }
  });

  // const placementBoard = docu;
};

export default ShipPlacement;
