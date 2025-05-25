import Player from "./Player.js";
import Gameboard from "./Gameboard.js";
import Ship from "./Ship.js";
import UI from "./UIController.js";
import "./style.css";

const PlayerInstance = new Player();
const ComputerInstance = new Player(true);
const ui = new UI();
ui.createGrid(PlayerInstance.displayBoard());
ui.createGrid(ComputerInstance.displayBoard());
