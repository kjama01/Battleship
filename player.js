import Gameboard from "./gameboard";
export default class Player {
  #board;
  constructor() {
    this.#board = new Gameboard();
  }
}
