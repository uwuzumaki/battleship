const Update = (player) => {
  console.log(player);
  for (let i = 0; i < 99; i++) {
    document.getElementById(`player-board-square-${i}`).style = "none";
  }
  // const board = document.getElementById("player-board");
  for (let i = 0; i < player.gameboard.shipLocations.length; i++) {
    const square = document.getElementById(
      `player-board-square-${player.gameboard.shipLocations[i]}`
    );
    square.style.backgroundColor = "red";
  }
};

export default Update;
