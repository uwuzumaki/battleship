const Update = (player, board) => {
  if (board == 0) {
    for (let i = 0; i <= 99; i++) {
      document.getElementById(`player-div-child-square-${i}`).style = "none";
    }
    for (let i = 0; i < player.gameboard.shipLocations.length; i++) {
      const square = document.getElementById(
        `player-div-child-square-${player.gameboard.shipLocations[i]}`
      );
      console.log(square);
      square.style.backgroundColor = "red";
    }
  }
  if (board == 1) {
    console.log(player);
    for (let i = 0; i <= 99; i++) {
      document.getElementById(`opp-div-child-square-${i}`).style = "none";
    }
    for (let i = 0; i < player.gameboard.shipLocations.length; i++) {
      const square = document.getElementById(
        `opp-div-child-square-${player.gameboard.shipLocations[i]}`
      );
      square.style.backgroundColor = "red";
    }
  }
};

export default Update;
