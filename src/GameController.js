import Player from "./Player.js";
import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";
import UI from "./UIController.js";
import "./style.css";

const PlayerInstance = new Player();
const ComputerInstance = new Player(true);
const ui = new UI();

populateBoard(PlayerInstance);
populateBoard(ComputerInstance);

ui.displayGrid(PlayerInstance.displayBoard());
ui.displayGrid(ComputerInstance.displayBoard());

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
