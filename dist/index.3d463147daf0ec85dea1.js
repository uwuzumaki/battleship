/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/BoardCreator/BoardCreator.js":
/*!**************************************************!*\
  !*** ./src/modules/BoardCreator/BoardCreator.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BoardCreator_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoardCreator.css */ "./src/modules/BoardCreator/BoardCreator.css");
/* harmony import */ var _factories_Player_Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/Player/Player */ "./src/modules/factories/Player/Player.js");



// This function creates all 3 boards (Player, CPU, and placement).
// It creates a blank 10x10 grid, then accepts a parentID and behaves differently based on each ID.
// If ID = opp-div, it appends the square-blink class, else square-solid class
var BoardCreator = function BoardCreator(parentID) {
  var playerDiv = document.getElementById(parentID);
  var boardCreator = new _factories_Player_Player__WEBPACK_IMPORTED_MODULE_1__.Player();
  var boardContainer = document.createElement("div");
  boardContainer.classList.add("boardContainer");
  boardContainer.id = parentID + "-child";
  playerDiv.appendChild(boardContainer);
  for (var i = 0; i < boardCreator.gameboard.board.length; i++) {
    var square = document.createElement("div");
    square.id = "".concat(parentID, "-child-square-").concat(i);
    if (parentID === "opp-div") {
      square.classList.add("square-blink");
    } else {
      square.classList.add("square-solid");
    }
    boardContainer.appendChild(square);
  }
  if (parentID === "opp-div") {
    boardContainer.addEventListener("mouseover", function (e) {});
  }
  return boardCreator;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BoardCreator);

/***/ }),

/***/ "./src/modules/Footer/Footer.js":
/*!**************************************!*\
  !*** ./src/modules/Footer/Footer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_github_dark_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/github-dark.png */ "./src/modules/Footer/assets/github-dark.png");
/* harmony import */ var _Footer_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.css */ "./src/modules/Footer/Footer.css");


var Footer = function Footer() {
  var app = document.getElementById("app");
  var footer = document.createElement("div");
  footer.id = "footer";
  app.appendChild(footer);
  var link = document.createElement("a");
  link.id = "github-link";
  link.href = "https://github.com/uwuzumaki/battleship";
  footer.appendChild(link);
  var logo = document.createElement("img");
  logo.id = "github-img";
  logo.alt = "github logo";
  logo.src = _assets_github_dark_png__WEBPACK_IMPORTED_MODULE_0__;
  link.appendChild(logo);
  var githubAccount = document.createElement("p");
  githubAccount.innerHTML = "uwuzumaki";
  link.appendChild(githubAccount);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/modules/GameController/GameController.js":
/*!******************************************************!*\
  !*** ./src/modules/GameController/GameController.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Update_Update__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Update/Update */ "./src/modules/Update/Update.js");

var GameController = function GameController(combined) {
  var opponentBoard = document.getElementById("opp-div-child");
  var player = combined[0];
  var cpu = combined[1];
  opponentBoard.addEventListener("click", attack);
  function attack(e) {
    var pos = parseInt(e.target.id.match(/\d+/g)[0]);
    var result = cpu.attack(pos);
    if (result != null) {
      result ? player.goodHit() : null;
      (0,_Update_Update__WEBPACK_IMPORTED_MODULE_0__["default"])(cpu, 1);
      player.checkWin() ? endGame(0) : null;
      var result2 = player.randomAttack();
      result2 ? cpu.goodHit() : null;
      (0,_Update_Update__WEBPACK_IMPORTED_MODULE_0__["default"])(player, 0);
      cpu.checkWin() ? endGame(1) : null;
    }
  }
  var endGame = function endGame(player) {
    opponentBoard.removeEventListener("click", attack);
    if (player == 0) {
      console.log("Player Wins");
    }
    if (player == 1) {
      console.log("Cpu wins");
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameController);

/***/ }),

/***/ "./src/modules/Header/Header.js":
/*!**************************************!*\
  !*** ./src/modules/Header/Header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header.css */ "./src/modules/Header/Header.css");

var Header = function Header() {
  var app = document.getElementById("app");
  var header = document.createElement("div");
  header.id = "header";
  app.appendChild(header);
  var title = document.createElement("div");
  title.id = "header-title";
  title.textContent = "Battleship!";
  header.appendChild(title);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/modules/Initialize/Init.js":
/*!****************************************!*\
  !*** ./src/modules/Initialize/Init.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Footer/Footer */ "./src/modules/Footer/Footer.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./src/modules/Header/Header.js");
/* harmony import */ var _Main_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Main/Main */ "./src/modules/Main/Main.js");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.css */ "./src/modules/Initialize/styles.css");




var Initialize = function Initialize() {
  (0,_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_Footer_Footer__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_Main_Main__WEBPACK_IMPORTED_MODULE_2__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Initialize);

/***/ }),

/***/ "./src/modules/Main/Main.js":
/*!**********************************!*\
  !*** ./src/modules/Main/Main.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BoardCreator_BoardCreator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../BoardCreator/BoardCreator */ "./src/modules/BoardCreator/BoardCreator.js");
/* harmony import */ var _NewGame_NewGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../NewGame/NewGame */ "./src/modules/NewGame/NewGame.js");
/* harmony import */ var _Main_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.css */ "./src/modules/Main/Main.css");



var Main = function Main() {
  var app = document.getElementById("app");
  var container = document.createElement("div");
  container.id = "content";
  app.appendChild(container);
  var playerDiv = document.createElement("div");
  playerDiv.id = "player-div";
  container.appendChild(playerDiv);
  var playerTitle = document.createElement("div");
  playerTitle.classList = "board-identifier";
  playerTitle.innerHTML = "Player Ships";
  playerDiv.appendChild(playerTitle);
  (0,_BoardCreator_BoardCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("player-div");
  var oppDiv = document.createElement("div");
  oppDiv.id = "opp-div";
  container.appendChild(oppDiv);
  var oppTitle = document.createElement("div");
  oppTitle.classList = "board-identifier";
  oppTitle.innerHTML = "Enemy Ships";
  oppDiv.appendChild(oppTitle);
  (0,_BoardCreator_BoardCreator__WEBPACK_IMPORTED_MODULE_0__["default"])("opp-div");
  (0,_NewGame_NewGame__WEBPACK_IMPORTED_MODULE_1__["default"])();
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./src/modules/NewGame/NewGame.js":
/*!****************************************!*\
  !*** ./src/modules/NewGame/NewGame.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShipPlacement_ShipPlacement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ShipPlacement/ShipPlacement */ "./src/modules/ShipPlacement/ShipPlacement.js");
/* harmony import */ var _NewGame_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewGame.css */ "./src/modules/NewGame/NewGame.css");


var NewGame = function NewGame() {
  var app = document.getElementById("app");
  var content = document.getElementById("content");
  var newGame = document.createElement("div");
  newGame.id = "new-game";
  app.appendChild(newGame);

  //------------------- Modal Start -------------------
  var modal = document.createElement("div");
  modal.id = "modal";
  content.appendChild(modal);
  var modalC = document.createElement("div");
  modalC.id = "modal-content";
  modal.appendChild(modalC);

  //------------ Confirmation Start ------------
  var combined;
  var modalRestart = document.createElement("div");
  modalRestart.id = "restart";
  modalC.appendChild(modalRestart);
  var restartTitle = document.createElement("div");
  restartTitle.id = "restart-title";
  restartTitle.textContent = "Are you sure you want to start a new game?";
  modalRestart.appendChild(restartTitle);
  var restartButtons = document.createElement("div");
  restartButtons.id = "restart-buttons-wrapper";
  modalRestart.appendChild(restartButtons);
  var restartYes = document.createElement("div");
  restartYes.id = "restart-yes";
  restartYes.classList.add("restart-button");
  restartYes.textContent = "Yes";
  restartButtons.appendChild(restartYes);
  restartYes.addEventListener("click", function () {
    modalRestart.style.display = "none";
    newBoardModal.style.display = "flex";
    (0,_ShipPlacement_ShipPlacement__WEBPACK_IMPORTED_MODULE_0__["default"])();
  });
  var newBoardModal = document.createElement("div");
  newBoardModal.id = "newboard-modal";
  modalC.appendChild(newBoardModal);
  var restartNo = document.createElement("div");
  restartNo.id = "restart-No";
  restartNo.classList.add("restart-button");
  restartNo.textContent = "No";
  restartButtons.appendChild(restartNo);
  restartNo.addEventListener("click", function () {
    modal.style.display = "none";
  });
  //------------ Confirmation End ------------

  //------------------- Modal End -------------------

  var newGameBtn = document.createElement("div");
  newGameBtn.id = "new-game-btn";
  newGameBtn.innerHTML = "New Game";
  newGame.appendChild(newGameBtn);
  newGameBtn.addEventListener("click", function () {
    modal.style.display = "block";
    modalRestart.style.display = "block";
    newBoardModal.style.display = "none";
  });
  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NewGame);

/***/ }),

/***/ "./src/modules/Randomize/Randomize.js":
/*!********************************************!*\
  !*** ./src/modules/Randomize/Randomize.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _factories_Player_Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/Player/Player */ "./src/modules/factories/Player/Player.js");
/* harmony import */ var _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/Ship/Ship */ "./src/modules/factories/Ship/Ship.js");


var Randomize = function Randomize() {
  var cpu = new _factories_Player_Player__WEBPACK_IMPORTED_MODULE_0__.Player();
  var rCord = function rCord() {
    return Math.floor(Math.random() * 100);
  };
  var rDir = function rDir() {
    return Math.random() < 0.5;
  };
  var carrier = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5);
  var battleship = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4);
  var destroyer = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);
  var submarine = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3);
  var patrolBoat = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2);
  var placed;
  do {
    var direction = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), direction, carrier);
  } while (!placed);
  do {
    var _direction = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), _direction, battleship);
  } while (!placed);
  do {
    var _direction2 = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), _direction2, destroyer);
  } while (!placed);
  do {
    var _direction3 = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), _direction3, submarine);
  } while (!placed);
  do {
    var _direction4 = rDir() ? "e" : "s";
    placed = cpu.gameboard.addShip(rCord(), _direction4, patrolBoat);
  } while (!placed);
  return cpu;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Randomize);

/***/ }),

/***/ "./src/modules/ShipPicker/ShipPicker.js":
/*!**********************************************!*\
  !*** ./src/modules/ShipPicker/ShipPicker.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShipPicker_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipPicker.css */ "./src/modules/ShipPicker/ShipPicker.css");
/* harmony import */ var _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/Ship/Ship */ "./src/modules/factories/Ship/Ship.js");



// This functions creates the holder for the ships in the "Place your ships!" modal
// Each ship can be clicked and then placed on the board.
// Once placed on the board, it will be added to a player object that gets returned to ShipPlacement
var ShipPicker = function ShipPicker(player) {
  var newBoardBody = document.getElementById("newgame-container");
  var newShipHolder = document.createElement("div");
  newShipHolder.id = "newship-holder";
  newBoardBody.appendChild(newShipHolder);
  var board = document.getElementById("newgame-container-child");
  board.addEventListener("mouseover", function (e) {
    if (e.target.classList.contains("square-solid")) {
      var location = parseInt(e.target.id.match(/\d+/g)[0]);
      var valid = player.gameboard.isValidShip(location, "e", currentShip);
      if (valid) {
        for (var i = 0; i < currentShip.length; i++) {
          var square = document.getElementById("newgame-container-child-square-".concat(location + i));
          square.classList.add("picked-square");
        }
      }
    }
  });
  board.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("square-solid")) {
      var location = parseInt(e.target.id.match(/\d+/g)[0]);
      var valid = player.gameboard.isValidShip(location, "e", currentShip);
      if (valid) {
        for (var i = 0; i < currentShip.length; i++) {
          var square = document.getElementById("newgame-container-child-square-".concat(location + i));
          square.classList.remove("picked-square");
        }
      }
    }
  });
  board.addEventListener("click", function (e) {
    if (currentShip.length != 0) {
      if (e.target.classList.contains("square-solid")) {
        var location = parseInt(e.target.id.match(/\d+/g)[0]);
        var valid = player.gameboard.isValidShip(location, "e", currentShip);
        if (valid) {
          player.gameboard.addShip(location, "e", currentShip);
          document.getElementById(currentShip.name).style.display = "none";
          currentShip = nullShip;
        }
      }
    }
  });
  var shipHolder = function shipHolder(size, name) {
    var shipDivWrapper = document.createElement("div");
    shipDivWrapper.classList.add("ship-text");
    shipDivWrapper.id = name;
    shipDivWrapper.textContent = "".concat(name);
    var shipDiv = document.createElement("div");
    for (var j = size; j > 0; j--) {
      var innerBox = document.createElement("div");
      innerBox.classList.add("inner-box");
      shipDiv.appendChild(innerBox);
    }
    shipDiv.classList.add("ship-holder-div");
    shipDiv.dataset.shipName = "".concat(name);
    shipDivWrapper.appendChild(shipDiv);
    newShipHolder.appendChild(shipDivWrapper);
  };
  shipHolder(5, "Carrier");
  shipHolder(4, "Battleship");
  shipHolder(3, "Destroyer");
  shipHolder(3, "Submarine");
  shipHolder(2, "Patrol Boat");
  var carrier = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(5, "Carrier");
  var battleship = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(4, "Battleship");
  var destroyer = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3, "Destroyer");
  var submarine = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(3, "Submarine");
  var patrolBoat = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(2, "Patrol Boat");
  var nullShip = new _factories_Ship_Ship__WEBPACK_IMPORTED_MODULE_1__.Ship(0);
  var currentShip = nullShip;
  newShipHolder.addEventListener("click", function (e) {
    var ship = e.target.parentNode.dataset.shipName;
    if (e.target.parentNode.classList.contains("ship-holder-div")) {
      switch (ship) {
        case "Carrier":
          currentShip = carrier;
          break;
        case "Battleship":
          currentShip = battleship;
          break;
        case "Destroyer":
          currentShip = destroyer;
          break;
        case "Patrol Boat":
          currentShip = patrolBoat;
          break;
        case "Submarine":
          currentShip = submarine;
          break;
      }
    }
  });
  return player;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipPicker);

/***/ }),

/***/ "./src/modules/ShipPlacement/ShipPlacement.js":
/*!****************************************************!*\
  !*** ./src/modules/ShipPlacement/ShipPlacement.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ShipPlacement_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShipPlacement.css */ "./src/modules/ShipPlacement/ShipPlacement.css");
/* harmony import */ var _BoardCreator_BoardCreator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BoardCreator/BoardCreator */ "./src/modules/BoardCreator/BoardCreator.js");
/* harmony import */ var _GameController_GameController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../GameController/GameController */ "./src/modules/GameController/GameController.js");
/* harmony import */ var _ShipPicker_ShipPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ShipPicker/ShipPicker */ "./src/modules/ShipPicker/ShipPicker.js");
/* harmony import */ var _Update_Update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Update/Update */ "./src/modules/Update/Update.js");
/* harmony import */ var _Randomize_Randomize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Randomize/Randomize */ "./src/modules/Randomize/Randomize.js");






var ShipPlacement = function ShipPlacement() {
  var modal = document.getElementById("newboard-modal");
  modal.textContent = "";
  var newBoardTitle = document.createElement("div");
  newBoardTitle.id = "newboard-title";
  newBoardTitle.textContent = "Place your ships!";
  modal.appendChild(newBoardTitle);

  // ----- Controls the board start -----
  var newBoardBody = document.createElement("div");
  newBoardBody.id = "newgame-container";
  modal.appendChild(newBoardBody);
  var player = (0,_BoardCreator_BoardCreator__WEBPACK_IMPORTED_MODULE_1__["default"])("newgame-container");
  player = (0,_ShipPicker_ShipPicker__WEBPACK_IMPORTED_MODULE_3__["default"])(player);

  // ----- Controls the board end -----
  // ----- Controls the Confirm and Reset Button -----
  var cpu;
  var combined = [];
  var confirmDiv = document.createElement("div");
  confirmDiv.id = "confirm-div";
  modal.appendChild(confirmDiv);
  var confirmButton = document.createElement("div");
  confirmButton.classList.add("modal-button");
  confirmButton.textContent = "Confirm";
  confirmButton.addEventListener("click", confirmShips);
  confirmDiv.appendChild(confirmButton);
  function confirmShips(e) {
    e.preventDefault();
    document.getElementById("opp-div-child").remove();
    (0,_BoardCreator_BoardCreator__WEBPACK_IMPORTED_MODULE_1__["default"])("opp-div");
    var modal = document.getElementById("modal");
    modal.style.display = "none";
    cpu = (0,_Randomize_Randomize__WEBPACK_IMPORTED_MODULE_5__["default"])();
    combined.push(player);
    combined.push(cpu);
    (0,_Update_Update__WEBPACK_IMPORTED_MODULE_4__["default"])(player, 0);
    (0,_Update_Update__WEBPACK_IMPORTED_MODULE_4__["default"])(cpu, 1);
    (0,_GameController_GameController__WEBPACK_IMPORTED_MODULE_2__["default"])(combined);
  }
  var resetButton = document.createElement("div");
  resetButton.classList.add("modal-button");
  resetButton.textContent = "Reset";
  resetButton.addEventListener("click", resetShips);
  confirmDiv.appendChild(resetButton);
  function resetShips(e) {
    e.preventDefault();
    var container = document.getElementById("newgame-container");
    container.textContent = "";
    player = (0,_BoardCreator_BoardCreator__WEBPACK_IMPORTED_MODULE_1__["default"])("newgame-container");
    player = (0,_ShipPicker_ShipPicker__WEBPACK_IMPORTED_MODULE_3__["default"])(player);
  }
  return combined;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShipPlacement);

/***/ }),

/***/ "./src/modules/Update/Update.js":
/*!**************************************!*\
  !*** ./src/modules/Update/Update.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Update = function Update(player, board) {
  if (board == 0) {
    var pos = player.gameboard.board;
    for (var i = 0; i <= 99; i++) {
      document.getElementById("player-div-child-square-".concat(i)).style = "none";
    }
    for (var _i = 0; _i <= 99; _i++) {
      var square = document.getElementById("player-div-child-square-".concat(_i));
      if (pos[_i] == 1) {
        square.style.backgroundColor = "green";
      }
      if (pos[_i] == 2) {
        square.style.backgroundColor = "white";
      }
      if (pos[_i] == 3) {
        square.style.backgroundColor = "red";
      }
    }
  }
  if (board == 1) {
    var _pos = player.gameboard.board;
    for (var _i2 = 0; _i2 <= 99; _i2++) {
      document.getElementById("opp-div-child-square-".concat(_i2)).style = "none";
    }
    for (var _i3 = 0; _i3 <= 99; _i3++) {
      var _square = document.getElementById("opp-div-child-square-".concat(_i3));
      // Makes enemy ships visible
      // if (pos[i] == 1) {
      //   square.style.backgroundColor = "green";
      // }
      if (_pos[_i3] == 2) {
        _square.style.backgroundColor = "white";
      }
      if (_pos[_i3] == 3) {
        _square.style.backgroundColor = "red";
      }
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Update);

/***/ }),

/***/ "./src/modules/factories/Gameboard/Gameboard.js":
/*!******************************************************!*\
  !*** ./src/modules/factories/Gameboard/Gameboard.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gameboard: () => (/* binding */ Gameboard)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);
    this.board = this.createBoard();
    this.shipLocations = [];
    this.attempts = [];
  }
  _createClass(Gameboard, [{
    key: "createBoard",
    value: function createBoard() {
      var newBoard = [];
      for (var i = 0; i < 100; i++) {
        newBoard.push(0);
      }
      return newBoard;
    }
  }, {
    key: "isValidShip",
    value: function isValidShip(initialLocation, direction, ship) {
      var first = parseInt(initialLocation);
      var last = 0;
      if (direction == "e") last = first + (ship.length - 1);
      if (direction == "s") last = first + 10 * (ship.length - 1);
      //Makes sure the ships are placed on the board and don't go off it
      var validLocation;
      //prettier-ignore
      if (direction == "s") validLocation = first >= 0 && first <= 99 && last >= 0 && last <= 100 ? true : false;
      if (direction == "e") validLocation = Math.floor(first / 10) == Math.floor(last / 10) ? true : false;

      //Makes sure the ships don't overlap
      var locations = [];
      var unoccupied;
      for (var i = 0; i < ship.length; i++) {
        if (direction == "e") {
          locations.push(initialLocation + i);
        }
        if (direction == "s") {
          locations.push(initialLocation + i * 10);
        }
      }
      this.shipLocations.some(function (position) {
        return locations.includes(position);
      }) ? unoccupied = false : unoccupied = true;
      return validLocation && unoccupied ? true : false;
    }
  }, {
    key: "addShip",
    value: function addShip(initialLocation, direction, ship) {
      var currentLocation = initialLocation;
      var valid = this.isValidShip(initialLocation, direction, ship);
      if (valid) {
        for (var i = 0; i < ship.length; i++) {
          if (direction == "e") {
            this.board[currentLocation] = 1;
            this.shipLocations.push(currentLocation);
            ship.location.push(currentLocation);
            currentLocation += 1;
          }
          if (direction == "s") {
            this.board[currentLocation] = 1;
            this.shipLocations.push(currentLocation);
            ship.location.push(currentLocation);
            currentLocation += 10;
          }
        }
      }
      return valid ? ship : null;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(pos) {
      var hit = this.shipLocations.includes(pos);
      var triedBefore = this.attempts.includes(pos);
      var result;
      triedBefore ? null : this.attempts.push(pos);
      if (hit && !triedBefore) {
        this.board[pos] = 2;
        result = true;
      } else if (!hit && !triedBefore) {
        this.board[pos] = 3;
        result = false;
      } else {
        result = null;
      }
      return result;
    }
  }, {
    key: "allSunk",
    value: function allSunk() {
      var numberOfships = this.allShips.length;
      var sunkShips = 0;
      for (var i = 0; i < numberOfships; i++) {
        var currentShip = this.allShips[i];
        if (!currentShip.currentStatus()) {
          sunkShips++;
        }
      }
      return numberOfships == sunkShips ? true : false;
    }
  }]);
  return Gameboard;
}();


/***/ }),

/***/ "./src/modules/factories/Player/Player.js":
/*!************************************************!*\
  !*** ./src/modules/factories/Player/Player.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Player: () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Gameboard/Gameboard */ "./src/modules/factories/Gameboard/Gameboard.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);
    this.ships = [];
    this.gameboard = new _Gameboard_Gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard();
    this.enemyHit = 0;
  }
  _createClass(Player, [{
    key: "attack",
    value: function attack(pos) {
      return this.gameboard.receiveAttack(pos);
    }
  }, {
    key: "randomAttack",
    value: function randomAttack() {
      var result;
      do {
        var pos = Math.floor(Math.random() * 100);
        result = this.gameboard.receiveAttack(pos);
      } while (result == null);
      return result;
    }
  }, {
    key: "goodHit",
    value: function goodHit() {
      this.enemyHit++;
      console.log(this.enemyHit);
    }
  }, {
    key: "checkWin",
    value: function checkWin() {
      return this.enemyHit == 17;
    }
  }]);
  return Player;
}();


/***/ }),

/***/ "./src/modules/factories/Ship/Ship.js":
/*!********************************************!*\
  !*** ./src/modules/factories/Ship/Ship.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ship: () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    _classCallCheck(this, Ship);
    _defineProperty(this, "hit", 0);
    _defineProperty(this, "shipStatus", true);
    this.length = length;
    this.location = [];
    this.name = name;
  }
  _createClass(Ship, [{
    key: "shipHit",
    value: function shipHit() {
      this.hit++;
    }
  }, {
    key: "getHit",
    value: function getHit() {
      return this.hit;
    }
  }, {
    key: "updateStatus",
    value: function updateStatus() {
      this.shipStatus = false;
    }
  }, {
    key: "currentStatus",
    value: function currentStatus() {
      return this.shipStatus;
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      return this.hit == this.length ? true : false;
    }
  }]);
  return Ship;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/BoardCreator/BoardCreator.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/BoardCreator/BoardCreator.css ***!
  \*****************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.boardContainer {
  width: 20rem;
  height: 20rem;
  margin: 5rem;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  background-color: #18abe6;
  overflow: hidden;
}

.square-blink,
.square-solid {
  overflow: hidden;
  width: 100%;
  border-right: 1px solid black;
  border-top: 1px solid black;
}

@keyframes colour_change {
  from {
    background-color: #18abe6;
  }
  to {
    background-color: #fffdd0;
  }
}

.square-blink:hover {
  animation: colour_change 400ms infinite alternate;
}

@media all and (max-width: 960px) {
  .boardContainer {
    width: 15rem;
    height: 15rem;
    margin: 2.5rem;
  }
}

@media all and (max-width: 479px) {
  .boardContainer {
    width: 10rem;
    height: 10rem;
    margin: 2.5rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/modules/BoardCreator/BoardCreator.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,8BAA8B;EAC9B,4BAA4B;EAC5B,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;;EAEE,gBAAgB;EAChB,WAAW;EACX,6BAA6B;EAC7B,2BAA2B;AAC7B;;AAEA;EACE;IACE,yBAAyB;EAC3B;EACA;IACE,yBAAyB;EAC3B;AACF;;AAEA;EACE,iDAAiD;AACnD;;AAEA;EACE;IACE,YAAY;IACZ,aAAa;IACb,cAAc;EAChB;AACF;;AAEA;EACE;IACE,YAAY;IACZ,aAAa;IACb,cAAc;EAChB;AACF","sourcesContent":[".boardContainer {\n  width: 20rem;\n  height: 20rem;\n  margin: 5rem;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  border-bottom: 1px solid black;\n  border-left: 1px solid black;\n  background-color: #18abe6;\n  overflow: hidden;\n}\n\n.square-blink,\n.square-solid {\n  overflow: hidden;\n  width: 100%;\n  border-right: 1px solid black;\n  border-top: 1px solid black;\n}\n\n@keyframes colour_change {\n  from {\n    background-color: #18abe6;\n  }\n  to {\n    background-color: #fffdd0;\n  }\n}\n\n.square-blink:hover {\n  animation: colour_change 400ms infinite alternate;\n}\n\n@media all and (max-width: 960px) {\n  .boardContainer {\n    width: 15rem;\n    height: 15rem;\n    margin: 2.5rem;\n  }\n}\n\n@media all and (max-width: 479px) {\n  .boardContainer {\n    width: 10rem;\n    height: 10rem;\n    margin: 2.5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/Footer/Footer.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/Footer/Footer.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#footer {
  width: 100%;
  height: 3rem;
  background-color: #e0fcf4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  font-family: "Source Sans Pro";
}

#github-link {
  text-decoration: none;
  color: black;
  display: flex;
  align-items: center;
}

#github-img {
  width: 1rem;
  height: auto;
  margin: 1rem 2rem;
}
`, "",{"version":3,"sources":["webpack://./src/modules/Footer/Footer.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,SAAS;EACT,8BAA8B;AAChC;;AAEA;EACE,qBAAqB;EACrB,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;AACnB","sourcesContent":["#footer {\n  width: 100%;\n  height: 3rem;\n  background-color: #e0fcf4;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  bottom: 0;\n  font-family: \"Source Sans Pro\";\n}\n\n#github-link {\n  text-decoration: none;\n  color: black;\n  display: flex;\n  align-items: center;\n}\n\n#github-img {\n  width: 1rem;\n  height: auto;\n  margin: 1rem 2rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/Header/Header.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/Header/Header.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#header {
  width: 100%;
  height: 14em;
  display: flex;
  justify-content: center;
  align-items: center;
}

#header-title {
  font-size: 5em;
  color: #e0fcf4;
}

@media all and (max-width: 960px) {
  #header-title {
    font-size: 2.5rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/modules/Header/Header.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,cAAc;AAChB;;AAEA;EACE;IACE,iBAAiB;EACnB;AACF","sourcesContent":["#header {\n  width: 100%;\n  height: 14em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#header-title {\n  font-size: 5em;\n  color: #e0fcf4;\n}\n\n@media all and (max-width: 960px) {\n  #header-title {\n    font-size: 2.5rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/Initialize/styles.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/Initialize/styles.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Aclonica&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*,
html,
body {
  margin: 0;
  padding: 0;
  min-width: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

#app {
  background-color: #18abe6;
  width: 100%;
  height: 100vh;
  max-height: 100%;
  font-family: "Aclonica";
}
`, "",{"version":3,"sources":["webpack://./src/modules/Initialize/styles.css"],"names":[],"mappings":"AAEA;;;EAGE,SAAS;EACT,UAAU;EACV,YAAY;EACZ,sBAAsB;AACxB;;AAEA;;EAEE,YAAY;AACd;;AAEA;EACE,yBAAyB;EACzB,WAAW;EACX,aAAa;EACb,gBAAgB;EAChB,uBAAuB;AACzB","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Aclonica&display=swap\");\n\n*,\nhtml,\nbody {\n  margin: 0;\n  padding: 0;\n  min-width: 0;\n  box-sizing: border-box;\n}\n\nhtml,\nbody {\n  height: 100%;\n}\n\n#app {\n  background-color: #18abe6;\n  width: 100%;\n  height: 100vh;\n  max-height: 100%;\n  font-family: \"Aclonica\";\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/Main/Main.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/Main/Main.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#content {
  max-width: 60rem;
  height: auto;
  position: relative;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #18abe6;
}

#player-div {
  flex: 1;
}

#opp-div {
  flex: 1;
}

.board-identifier {
  margin: 2rem 5rem 0rem 5rem;
  font-size: 2rem;
  color: #e0fcf4;
}

@media all and (max-width: 960px) {
  #content {
    flex-direction: column;
  }
  .board-identifier {
    font-size: 1rem;
    margin: 1rem 2.5rem 1rem 2.5rem;
  }
}

.occ-square {
  background-color: white;
}
`, "",{"version":3,"sources":["webpack://./src/modules/Main/Main.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,YAAY;EACZ,kBAAkB;EAClB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,2BAA2B;EAC3B,eAAe;EACf,cAAc;AAChB;;AAEA;EACE;IACE,sBAAsB;EACxB;EACA;IACE,eAAe;IACf,+BAA+B;EACjC;AACF;;AAEA;EACE,uBAAuB;AACzB","sourcesContent":["#content {\n  max-width: 60rem;\n  height: auto;\n  position: relative;\n  margin: 0 auto;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  background-color: #18abe6;\n}\n\n#player-div {\n  flex: 1;\n}\n\n#opp-div {\n  flex: 1;\n}\n\n.board-identifier {\n  margin: 2rem 5rem 0rem 5rem;\n  font-size: 2rem;\n  color: #e0fcf4;\n}\n\n@media all and (max-width: 960px) {\n  #content {\n    flex-direction: column;\n  }\n  .board-identifier {\n    font-size: 1rem;\n    margin: 1rem 2.5rem 1rem 2.5rem;\n  }\n}\n\n.occ-square {\n  background-color: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/NewGame/NewGame.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/NewGame/NewGame.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#new-game {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #18abe6;
}

#modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 10rem;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
}

#modal-content {
  background-color: #e0fcf4;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  max-width: 50%;
}

@media all and (max-width: 1640px) {
  #modal-content {
    max-width: 60%;
  }
}

@media all and (max-width: 1200px) {
  #modal-content {
    max-width: 80%;
  }
}

@media all and (max-width: 960px) {
  #modal {
    padding-top: 2rem;
  }
  #modal-content {
    min-height: 70%;
  }
}

#restart {
  display: none;
}

#restart-title {
  display: flex;
  justify-content: center;
}

#restart-buttons-wrapper {
  display: flex;
  justify-content: center;
}

.restart-button {
  border: 1px solid black;
  padding: 1rem 2rem;
  margin: 1.5rem 1rem 0rem 1rem;
  border-radius: 1.5rem;
  transition: box-shadow 200ms;
  background-color: #17e698;
}

.restart-button:hover {
  box-shadow: 0 0 0.75rem rgba(33, 33, 33, 0.8);
}

#new-game-btn {
  margin: 2rem;
  padding: 0.5rem 1rem;
  border: 0.1rem black solid;
  border-radius: 1rem;
  background-color: #17e698;
  transition: box-shadow 200ms;
}

#new-game-btn:hover {
  box-shadow: 0 0 0.75rem rgba(33, 33, 33, 0.8);
}
`, "",{"version":3,"sources":["webpack://./src/modules/NewGame/NewGame.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,eAAe;EACf,UAAU;EACV,kBAAkB;EAClB,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,oCAAoC;AACtC;;AAEA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,cAAc;EAChB;AACF;;AAEA;EACE;IACE,iBAAiB;EACnB;EACA;IACE,eAAe;EACjB;AACF;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,kBAAkB;EAClB,6BAA6B;EAC7B,qBAAqB;EACrB,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,6CAA6C;AAC/C;;AAEA;EACE,YAAY;EACZ,oBAAoB;EACpB,0BAA0B;EAC1B,mBAAmB;EACnB,yBAAyB;EACzB,4BAA4B;AAC9B;;AAEA;EACE,6CAA6C;AAC/C","sourcesContent":["#new-game {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #18abe6;\n}\n\n#modal {\n  display: none;\n  position: fixed;\n  z-index: 1;\n  padding-top: 10rem;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background-color: rgba(0, 0, 0, 0.4);\n}\n\n#modal-content {\n  background-color: #e0fcf4;\n  margin: auto;\n  padding: 20px;\n  border: 1px solid #888;\n  max-width: 50%;\n}\n\n@media all and (max-width: 1640px) {\n  #modal-content {\n    max-width: 60%;\n  }\n}\n\n@media all and (max-width: 1200px) {\n  #modal-content {\n    max-width: 80%;\n  }\n}\n\n@media all and (max-width: 960px) {\n  #modal {\n    padding-top: 2rem;\n  }\n  #modal-content {\n    min-height: 70%;\n  }\n}\n\n#restart {\n  display: none;\n}\n\n#restart-title {\n  display: flex;\n  justify-content: center;\n}\n\n#restart-buttons-wrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.restart-button {\n  border: 1px solid black;\n  padding: 1rem 2rem;\n  margin: 1.5rem 1rem 0rem 1rem;\n  border-radius: 1.5rem;\n  transition: box-shadow 200ms;\n  background-color: #17e698;\n}\n\n.restart-button:hover {\n  box-shadow: 0 0 0.75rem rgba(33, 33, 33, 0.8);\n}\n\n#new-game-btn {\n  margin: 2rem;\n  padding: 0.5rem 1rem;\n  border: 0.1rem black solid;\n  border-radius: 1rem;\n  background-color: #17e698;\n  transition: box-shadow 200ms;\n}\n\n#new-game-btn:hover {\n  box-shadow: 0 0 0.75rem rgba(33, 33, 33, 0.8);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/ShipPicker/ShipPicker.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/ShipPicker/ShipPicker.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `#newship-holder {
  margin: 5rem;
  display: flex;
  width: 10rem;
  max-width: 100%;
  flex-direction: column;
  justify-content: space-between;
}

.ship-text {
  color: blue;
}

.ship-holder-div {
  width: auto;
  display: flex;
  flex-direction: row;
  margin: 5px;
}

.inner-box {
  aspect-ratio: 1/1;
  max-width: 1.5rem;
  flex: 0 1 100px;
  margin: -1px 0 0 -1px;
  border: var(--border);
}

#confirm-div {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.picked-square {
  background-color: white;
  background-clip: padding-box;
  overflow: hidden;
  /* background-clip: content-box; */
}

#Carrier > .ship-holder-div > .inner-box {
  background-color: red;
}

#Battleship > .ship-holder-div > .inner-box {
  background-color: green;
}

#Destroyer > .ship-holder-div > .inner-box {
  background-color: blue;
}

[id="Patrol Boat"] > .ship-holder-div > .inner-box {
  background-color: yellow;
}

#Submarine > .ship-holder-div > .inner-box {
  background-color: lime;
}
`, "",{"version":3,"sources":["webpack://./src/modules/ShipPicker/ShipPicker.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,8BAA8B;AAChC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,qBAAqB;EACrB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,uBAAuB;EACvB,4BAA4B;EAC5B,gBAAgB;EAChB,kCAAkC;AACpC;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,sBAAsB;AACxB","sourcesContent":["#newship-holder {\n  margin: 5rem;\n  display: flex;\n  width: 10rem;\n  max-width: 100%;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.ship-text {\n  color: blue;\n}\n\n.ship-holder-div {\n  width: auto;\n  display: flex;\n  flex-direction: row;\n  margin: 5px;\n}\n\n.inner-box {\n  aspect-ratio: 1/1;\n  max-width: 1.5rem;\n  flex: 0 1 100px;\n  margin: -1px 0 0 -1px;\n  border: var(--border);\n}\n\n#confirm-div {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.picked-square {\n  background-color: white;\n  background-clip: padding-box;\n  overflow: hidden;\n  /* background-clip: content-box; */\n}\n\n#Carrier > .ship-holder-div > .inner-box {\n  background-color: red;\n}\n\n#Battleship > .ship-holder-div > .inner-box {\n  background-color: green;\n}\n\n#Destroyer > .ship-holder-div > .inner-box {\n  background-color: blue;\n}\n\n[id=\"Patrol Boat\"] > .ship-holder-div > .inner-box {\n  background-color: yellow;\n}\n\n#Submarine > .ship-holder-div > .inner-box {\n  background-color: lime;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/ShipPlacement/ShipPlacement.css":
/*!*******************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/ShipPlacement/ShipPlacement.css ***!
  \*******************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --border: 1px black solid;
}

#newboard-modal {
  display: block;
  flex-direction: column;
}

#newboard-title {
  display: flex;
  justify-content: center;
  align-items: center;
}

#newgame-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

@media all and (max-width: 960px) {
  #newgame-container {
    flex-direction: column;
  }
}

.modal-button {
  border: var(--border);
  padding: 1rem 2rem;
  margin: 1.5rem 1rem 0rem 1rem;
  border-radius: 1.5rem;
  transition: box-shadow 200ms;
  background-color: #17e698;
}

.modal-button:hover {
  box-shadow: 0 0 0.75rem rgba(33, 33, 33, 0.8);
}
`, "",{"version":3,"sources":["webpack://./src/modules/ShipPlacement/ShipPlacement.css"],"names":[],"mappings":"AAAA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,6BAA6B;EAC7B,qBAAqB;EACrB,4BAA4B;EAC5B,yBAAyB;AAC3B;;AAEA;EACE,6CAA6C;AAC/C","sourcesContent":[":root {\n  --border: 1px black solid;\n}\n\n#newboard-modal {\n  display: block;\n  flex-direction: column;\n}\n\n#newboard-title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newgame-container {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n@media all and (max-width: 960px) {\n  #newgame-container {\n    flex-direction: column;\n  }\n}\n\n.modal-button {\n  border: var(--border);\n  padding: 1rem 2rem;\n  margin: 1.5rem 1rem 0rem 1rem;\n  border-radius: 1.5rem;\n  transition: box-shadow 200ms;\n  background-color: #17e698;\n}\n\n.modal-button:hover {\n  box-shadow: 0 0 0.75rem rgba(33, 33, 33, 0.8);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/modules/BoardCreator/BoardCreator.css":
/*!***************************************************!*\
  !*** ./src/modules/BoardCreator/BoardCreator.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_BoardCreator_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./BoardCreator.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/BoardCreator/BoardCreator.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_BoardCreator_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_BoardCreator_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_BoardCreator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_BoardCreator_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/Footer/Footer.css":
/*!***************************************!*\
  !*** ./src/modules/Footer/Footer.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Footer.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/Footer/Footer.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Footer_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/Header/Header.css":
/*!***************************************!*\
  !*** ./src/modules/Header/Header.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Header.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/Header/Header.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Header_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/Initialize/styles.css":
/*!*******************************************!*\
  !*** ./src/modules/Initialize/styles.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/Initialize/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/Main/Main.css":
/*!***********************************!*\
  !*** ./src/modules/Main/Main.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./Main.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/Main/Main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_Main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/NewGame/NewGame.css":
/*!*****************************************!*\
  !*** ./src/modules/NewGame/NewGame.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_NewGame_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./NewGame.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/NewGame/NewGame.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_NewGame_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_NewGame_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_NewGame_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_NewGame_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/ShipPicker/ShipPicker.css":
/*!***********************************************!*\
  !*** ./src/modules/ShipPicker/ShipPicker.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ShipPicker_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./ShipPicker.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/ShipPicker/ShipPicker.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ShipPicker_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ShipPicker_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ShipPicker_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ShipPicker_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/ShipPlacement/ShipPlacement.css":
/*!*****************************************************!*\
  !*** ./src/modules/ShipPlacement/ShipPlacement.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ShipPlacement_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./ShipPlacement.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/ShipPlacement/ShipPlacement.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ShipPlacement_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ShipPlacement_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ShipPlacement_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ShipPlacement_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/modules/Footer/assets/github-dark.png":
/*!***************************************************!*\
  !*** ./src/modules/Footer/assets/github-dark.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "github-dark.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Initialize_Init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Initialize/Init */ "./src/modules/Initialize/Init.js");

(0,_modules_Initialize_Init__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=index.3d463147daf0ec85dea1.js.map