import "./PlayerBoard.css";
import { Gameboard } from "../factories/Gameboard/Gameboard";

const PlayerBoard = () => {
  const playerDiv = document.getElementById("player-div");

  const playerBoard = new Gameboard();
  playerBoard.createBoard();

  const boardContainer = document.createElement("div");
  boardContainer.classList.add("boardContainer");
  playerDiv.appendChild(boardContainer);

  for (let i = 0; i < playerBoard.board.length; i++) {
    const square = document.createElement("div");
    square.id = `playerSquare${i}`;
    square.classList.add("square");
    boardContainer.appendChild(square);
  }

  boardContainer.addEventListener("mouseover", (e) => {
    console.log(e.target.id);
  });
};

export default PlayerBoard;
