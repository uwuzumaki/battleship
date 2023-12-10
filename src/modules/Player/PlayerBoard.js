import "./PlayerBoard.css";
import { Gameboard } from "../factories/Gameboard/Gameboard";

const PlayerBoard = (id) => {
  const playerDiv = document.getElementById(id);

  const playerBoard = new Gameboard();
  playerBoard.createBoard();

  const boardContainer = document.createElement("div");
  boardContainer.classList.add("boardContainer");
  playerDiv.appendChild(boardContainer);

  for (let i = 0; i < playerBoard.board.length; i++) {
    const square = document.createElement("div");
    square.id = `squareID${i}`;
    if (id === "opp-div") {
      square.classList.add("square-blink");
    } else {
      square.classList.add("square-solid");
    }
    boardContainer.appendChild(square);
  }

  if (id === "opp-div") {
    boardContainer.addEventListener("mouseover", (e) => {
      console.log(e.target.id);
    });
  }
};

export default PlayerBoard;
