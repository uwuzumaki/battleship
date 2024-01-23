import "./ShipPlacement.css";
import PlayerBoard from "../PlayerController/PlayerController";
import ShipPicker from "../ShipPicker/ShipPicker";

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

  let player = PlayerBoard("newgame-player-board", "newgame-container");
  ShipPicker(player);

  // ----- Controls the board end -----
  // ----- Controls the Confirm and Reset Button -----
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
  resetButton.addEventListener("click", resetShips);
  confirmDiv.appendChild(resetButton);

  function resetShips(e) {
    e.preventDefault();
    const container = document.getElementById("newgame-container");
    container.textContent = "";
    player = PlayerBoard("newgame-player-board", "newgame-container");
    ShipPicker(player);
  }
};

export default ShipPlacement;
