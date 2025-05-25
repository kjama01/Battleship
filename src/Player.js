import Gameboard from "./Gameboard.js";
export default class Player {
  #board;
  #isComputer;
  constructor(isComputer = false) {
    this.#board = new Gameboard();
    this.#isComputer = isComputer;
  }
  placeShip(x, y, length) {
    return this.#board.placeShip(x, y, length);
  }
  receiveAttack(x, y) {
    return this.#board.receiveAttack(x, y);
  }
  getMisses() {
    return this.#board.getMisses();
  }
  isAllSunk() {
    return this.#board.isAllSunk();
  }
  displayBoard() {
    return this.#board.displayBoard();
  }
  makeMove(x, y, opponent) {
    return opponent.receiveAttack(x, y);
  }
}
