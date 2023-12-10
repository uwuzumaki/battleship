import "./NewGame.css";

const NewGame = () => {
  const app = document.getElementById("app");
  const content = document.getElementById("content");

  const newGame = document.createElement("div");
  newGame.id = "new-game";
  app.appendChild(newGame);

  const modal = document.createElement("div");
  modal.id = "modal";
  content.appendChild(modal);

  const modalC = document.createElement("div");
  modalC.id = "modal-content";
  modal.appendChild(modalC);

  const modalRestart = document.createElement("div");
  modalRestart.id = "restart";
  modalC.appendChild(modalRestart);

  const restartTitle = document.createElement("div");
  restartTitle.id = "restart-title";
  restartTitle.textContent = "Are you sure you want to start a new game?";
  modalRestart.appendChild(restartTitle);

  const restartButtons = document.createElement("div");
  restartButtons.id = "restart-buttons-wrapper";
  modalRestart.appendChild(restartButtons);

  const restartYes = document.createElement("div");
  restartYes.id = "restart-yes";
  restartYes.classList.add("restart-button");
  restartYes.textContent = "Yes";
  restartButtons.appendChild(restartYes);

  restartYes.addEventListener("click", () => {
    modalRestart.style.display = "none";
  });

  const restartNo = document.createElement("div");
  restartNo.id = "restart-No";
  restartNo.classList.add("restart-button");
  restartNo.textContent = "No";
  restartButtons.appendChild(restartNo);

  restartNo.addEventListener("click", () => {
    modal.style.display = "none";
  });

  const newGameBtn = document.createElement("div");
  newGameBtn.id = "new-game-btn";
  newGameBtn.innerHTML = "New Game";
  newGame.appendChild(newGameBtn);

  newGameBtn.addEventListener("click", () => {
    modal.style.display = "block";
    modalRestart.style.display = "block";
  });

  window.onclick = (e) => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
};

export default NewGame;
