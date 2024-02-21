import "./BoardCreator.css";
import { Player } from "../factories/Player/Player";

// This function creates all 3 boards (Player, CPU, and placement).
// It creates a blank 10x10 grid, then accepts a parentID and behaves differently based on each ID.
// If ID = opp-div, it appends the square-blink class, else square-solid class
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
