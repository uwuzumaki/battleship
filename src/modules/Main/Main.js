import PlayerBoard from "../PlayerController/PlayerController";
import "./Main.css";

const Main = () => {
  const app = document.getElementById("app");

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

  PlayerBoard("player-div");

  const oppDiv = document.createElement("div");
  oppDiv.id = "opp-div";
  container.appendChild(oppDiv);

  const oppTitle = document.createElement("div");
  oppTitle.classList = "board-identifier";
  oppTitle.innerHTML = "Enemy Ships";
  oppDiv.appendChild(oppTitle);

  PlayerBoard("opp-div");
};

export default Main;
