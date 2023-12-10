import "./NewGame.css";

const NewGame = () => {
  const app = document.getElementById("app");

  const newGame = document.createElement("div");
  newGame.id = "new-game";
  app.appendChild(newGame);

  const newGameBtn = document.createElement("div");
  newGameBtn.id = "new-game-btn";
  newGameBtn.innerHTML = "New Game";
  newGame.appendChild(newGameBtn);
};

export default NewGame;
