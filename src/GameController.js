import Player from "./Player.js";
import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";
import UI, { startShipPlacement } from "./UIController.js";
import "./style.css";

const PlayerInstance = new Player();
const ComputerInstance = new Player(true);
const ui = new UI();

export function startGame() {
  ui.gameStarted = true;
  populateBoard(ComputerInstance);
  updateBoards();
  ui.attack((x, y) => {
    const hit = PlayerInstance.makeMove(x, y, ComputerInstance);
    updateBoards();
    if (ComputerInstance.isAllSunk()) {
      endGame("Player");
    }
    if (hit === "MISS") {
      computerTurn();
    }
  });
}
function computerTurn() {
  let hit;
  do {
    hit = ComputerInstance.makeRandomMove(PlayerInstance);
    updateBoards();
    if (PlayerInstance.isAllSunk()) {
      endGame("Computer");
      return;
    }
  } while (hit !== "MISS");
}

function populateBoard(instance) {
  let availableShips = [5, 4, 3, 3, 2];
  for (let i = 0; i < 5; i++) {
    while (
      !instance.placeShip(
        Math.floor(Math.random() * 10),
        Math.floor(Math.random() * 10),
        availableShips[0]
      )
    );
    availableShips.shift();
  }
}
export function updateBoards() {
  ui.clearBoard();
  ui.displayGrid(PlayerInstance, true);
  ui.displayGrid(ComputerInstance, false);

  ui.updateAliveShips(PlayerInstance, true);
  ui.updateAliveShips(ComputerInstance, false);
}
let gameOver = false;
function endGame(winner) {
  if (gameOver) return;
  gameOver = true;
  ui.clearBoard();
  ui.displayGrid(PlayerInstance, true);
  ui.displayGrid(ComputerInstance, false);
  ui.restart();
  ui.updateAliveShips(PlayerInstance, true);
  ui.updateAliveShips(ComputerInstance, false);

  setTimeout(() => {
    alert(`${winner} wygrał!`);
  }, 100);
}
startShipPlacement(PlayerInstance);
