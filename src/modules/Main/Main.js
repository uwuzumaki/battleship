import PlayerBoard from "../Player/PlayerBoard";
import "./Main.css";

const Main = () => {
  const app = document.getElementById("app");

  const container = document.createElement("div");
  container.id = "content";
  app.appendChild(container);

  const playerDiv = document.createElement("div");
  playerDiv.id = "player-div";
  container.appendChild(playerDiv);

  PlayerBoard();

  const oppDiv = document.createElement("div");
  oppDiv.id = "opp-div";
  oppDiv.textContent = "123";
  container.appendChild(oppDiv);
};

export default Main;
