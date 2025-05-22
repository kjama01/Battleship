import Ship from "./ship.js";

export default class Gameboard {
  #ships = [];
  #gameboard;
  constructor() {
    this.#gameboard = Array.from({ length: 10 }, () => Array(10).fill(null));
  }
  placeShip(x, y, length) {
    const ship = new Ship(length);
    let count = 0;
    for (let i = 0; i < length; i++) {
      if (this.#gameboard[x][y + i]) {
        for (let j = 0; j < count; j++) {
          this.#gameboard[x][y - j] = null;
        }
        return false;
      }
      count++;
      this.#gameboard[x][y + i] = ship;
    }
    this.#ships.push(ship);
    return ship;
  }
}
