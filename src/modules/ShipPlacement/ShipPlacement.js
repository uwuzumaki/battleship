import "./ShipPlacement.css";
import PlayerBoard from "../PlayerController/PlayerController";

const ShipPlacement = () => {
  const modal = document.getElementById("newboard-modal");

  const newBoardTitle = document.createElement("div");
  newBoardTitle.id = "newboard-title";
  newBoardTitle.textContent = "Place your ships!";
  modal.appendChild(newBoardTitle);

  const newBoardBody = document.createElement("div");
  newBoardBody.id = "newgame-gameboard";
  modal.appendChild(newBoardBody);

  PlayerBoard("newgame-gameboard");

  const newShipHolder = document.createElement("div");
  newShipHolder.id = "newship-holder";
  newBoardBody.appendChild(newShipHolder);

  const randomizeBtn = document.createElement("div");
  randomizeBtn.id = "randomize-btn";
  randomizeBtn.textContent = "Randomize!";
  newShipHolder.appendChild(randomizeBtn);

  for (let i = 0; i < 4; i++) {
    const shipDiv = document.createElement("div");
    shipDiv.classList.add("ship-holder-div");
    shipDiv.textContent = i;
    newShipHolder.appendChild(shipDiv);
  }
};

export default ShipPlacement;
