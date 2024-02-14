import NewGame from "../NewGame/NewGame";
import { Gameboard } from "../factories/Gameboard/Gameboard";

const GameController = () => {
  const content = document.getElementById("content");
  let counter = 0;

  const b1 = document.createElement("button");
  b1.textContent = "+1";
  b1.addEventListener("click", () => {
    counter++;
    update();
  });
  content.appendChild(b1);

  const b2 = document.createElement("button");
  b2.textContent = "-1";
  b2.addEventListener("click", () => {
    counter--;
    update();
  });
  content.appendChild(b2);

  const updateCounter = document.createElement("div");
  updateCounter.id = "update-counter";
  content.appendChild(updateCounter);

  const update = () => {
    document.getElementById("update-counter").textContent = counter;
  };

  while (counter <= 20) {
    playerTurn();
    cpuTurn();
  }

  const playerTurn = () => {
    console.log("123");
  };

  const cpuTurn = () => {
    console.log("abc");
  };

  NewGame();
};

export default GameController;
