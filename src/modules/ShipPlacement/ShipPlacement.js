import "./ShipPlacement.css";
import BoardCreator from "../BoardCreator/BoardCreator";
import GameController from "../GameController/GameController";
import ShipPicker from "../ShipPicker/ShipPicker";
import Update from "../Update/Update";
import Randomize from "../Randomize/Randomize";

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

  let player = BoardCreator("newgame-container");
  player = ShipPicker(player);

  // ----- Controls the board end -----
  // ----- Controls the Confirm and Reset Button -----
  let cpu;
  let combined = [];
  const confirmDiv = document.createElement("div");
  confirmDiv.id = "confirm-div";
  modal.appendChild(confirmDiv);

  const confirmButton = document.createElement("div");
  confirmButton.classList.add("modal-button");
  confirmButton.textContent = "Confirm";
  confirmButton.addEventListener("click", confirmShips);
  confirmDiv.appendChild(confirmButton);

  function confirmShips(e) {
    e.preventDefault();
    document.getElementById("opp-div-child").remove();
    BoardCreator("opp-div");
    const modal = document.getElementById("modal");
    modal.style.display = "none";
    cpu = Randomize();
    combined.push(player);
    combined.push(cpu);
    Update(player, 0);
    Update(cpu, 1);
    console.log(combined);
    GameController(combined);
  }

  const resetButton = document.createElement("div");
  resetButton.classList.add("modal-button");
  resetButton.textContent = "Reset";
  resetButton.addEventListener("click", resetShips);
  confirmDiv.appendChild(resetButton);

  function resetShips(e) {
    e.preventDefault();
    const container = document.getElementById("newgame-container");
    container.textContent = "";
    player = BoardCreator("newgame-container");
    player = ShipPicker(player);
  }
  return combined;
};

export default ShipPlacement;
