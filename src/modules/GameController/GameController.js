import Update from "../Update/Update";

const GameController = (combined) => {
  const opponentBoard = document.getElementById("opp-div-child");
  let player = combined[0];
  let cpu = combined[1];

  opponentBoard.addEventListener("click", attack);

  function attack(e) {
    let pos = parseInt(e.target.id.match(/\d+/g)[0]);
    let result = cpu.attack(pos);
    if (result != null) {
      result ? player.goodHit() : null;
      Update(cpu, 1);
      player.checkWin() ? endGame(0) : null;

      let result2 = player.randomAttack();
      result2 ? cpu.goodHit() : null;
      Update(player, 0);
      cpu.checkWin() ? endGame(1) : null;
    }
  }

  const endGame = (player) => {
    opponentBoard.removeEventListener("click", attack);
    if (player == 0) {
      console.log("Player Wins");
    }
    if (player == 1) {
      console.log("Cpu wins");
    }
  };
};

export default GameController;
