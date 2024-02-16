import PlayerBoard from "../PlayerController/PlayerController";
import GameController from "../GameController/GameController";
import NewGame from "../NewGame/NewGame";
import "./Main.css";
import Randomize from "../Randomize/Randomize";

const Main = () => {
  const app = document.getElementById("app");
  let newPlayer;

  const container = document.createElement("div");
  container.id = "content";
  app.appendChild(container);

  const playerDiv = document.createElement("div");
  playerDiv.id = "player-div";
  container.appendChild(playerDiv);

  const playerTitle = document.createElement("div");
  playerTitle.classList = "board-identifier";
  playerTitle.innerHTML = "Player Ships";
  playerDiv.appendChild(playerTitle);

  const player = PlayerBoard("player-board", "player-div");

  const oppDiv = document.createElement("div");
  oppDiv.id = "opp-div";
  container.appendChild(oppDiv);

  const oppTitle = document.createElement("div");
  oppTitle.classList = "board-identifier";
  oppTitle.innerHTML = "Enemy Ships";
  oppDiv.appendChild(oppTitle);

  const opponent = PlayerBoard("opp-board", "opp-div");

  const opponentBoard = document.getElementById("opp-board");
  opponentBoard.addEventListener("click", (e) => {
    console.log(e.target);
    Randomize();
  });
  NewGame();
  // newPlayer = NewGame();
};

export default Main;
