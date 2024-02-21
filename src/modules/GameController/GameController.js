const GameController = (combined) => {
  const opponentBoard = document.getElementById("opp-div-child");
  let player = combined[0];
  let cpu = combined[1];

  opponentBoard.addEventListener("click", attack);
  function attack(e) {
    console.log(e.target);
    console.log(player.gameboard.shipLocations);
    console.log(cpu.gameboard.shipLocations);
  }
};

export default GameController;
