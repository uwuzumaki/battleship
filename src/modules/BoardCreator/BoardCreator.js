import "./BoardCreator.css";
import { Player } from "../factories/Player/Player";

const BoardCreator = (parentID) => {
  const playerDiv = document.getElementById(parentID);

  const boardCreator = new Player();

  const boardContainer = document.createElement("div");
  boardContainer.classList.add("boardContainer");
  boardContainer.id = parentID + "-child";
  playerDiv.appendChild(boardContainer);

  for (let i = 0; i < boardCreator.gameboard.board.length; i++) {
    const square = document.createElement("div");
    square.id = `${parentID}-child-square-${i}`;
    if (parentID === "opp-div") {
      square.classList.add("square-blink");
    } else {
      square.classList.add("square-solid");
    }
    boardContainer.appendChild(square);
  }

  if (parentID === "opp-div") {
    boardContainer.addEventListener("mouseover", (e) => {});
  }
  return boardCreator;
};

export default BoardCreator;
