import "./PlayerController.css";
import { Player } from "../factories/Player/Player";

const PlayerBoard = (childID, parentID) => {
  const playerDiv = document.getElementById(parentID);

  const playerBoard = new Player();

  const boardContainer = document.createElement("div");
  boardContainer.classList.add("boardContainer");
  boardContainer.id = childID;
  playerDiv.appendChild(boardContainer);

  for (let i = 0; i < playerBoard.gameboard.board.length; i++) {
    const square = document.createElement("div");
    square.id = `${childID}-square-${i}`;
    if (parentID === "opp-div") {
      square.classList.add("square-blink");
    } else {
      square.classList.add("square-solid");
    }
    boardContainer.appendChild(square);
  }

  if (parentID === "opp-div") {
    boardContainer.addEventListener("mouseover", (e) => {
      console.log(e.target.id);
    });
  }
  return playerBoard;
};

export default PlayerBoard;
