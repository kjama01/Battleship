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
  placeShipHorizontally(x, y, length) {
    return this.#board.placeShipHorizontal(x, y, length);
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
  makeRandomMove(opponent) {
    let x, y, result;
    do {
      x = Math.floor(Math.random() * 10);
      y = Math.floor(Math.random() * 10);
      result = opponent.displayBoard()[x][y];
    } while (result === "HIT" || result === "MISS");

    return this.makeMove(x, y, opponent);
  }
  getAliveShips() {
    console.log(this.#board); // sprawdź, co zwraca
    console.log(typeof this.#board.getAliveShips); // powinno być 'function'
    return this.#board.getAliveShips();
  }
}
