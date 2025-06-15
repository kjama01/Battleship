import Ship from "./Ship.js";

export default class Gameboard {
  #ships = [];
  #availableShips = [5, 4, 3, 3, 2];
  #gameboard;
  #miss = 0;
  constructor() {
    this.#gameboard = Array.from({ length: 10 }, () => Array(10).fill(null));
  }
  placeShip(x, y, length) {
    const index = this.#availableShips.indexOf(length);
    if (index === -1) {
      return false;
    }
    const ship = new Ship(length);
    let count = 0;
    if (x + length > 10 || y >= 10) return false;
    for (let i = 0; i < length; i++) {
      if (this.#gameboard[x + i][y]) {
        for (let j = 0; j < count; j++) {
          this.#gameboard[x - j][y] = null;
        }
        return false;
      }
      count++;
      this.#gameboard[x + i][y] = ship;
    }
    this.#availableShips.splice(index, 1);
    this.#ships.push(ship);
    return true;
  }
  placeShipHorizontal(x, y, length) {
    const index = this.#availableShips.indexOf(length);
    if (index === -1) {
      return false;
    }
    const ship = new Ship(length);
    let count = 0;

    if (y + length > 10 || x >= 10) return false;

    for (let i = 0; i < length; i++) {
      if (this.#gameboard[x][y + i]) {
        for (let j = 0; j < count; j++) {
          this.#gameboard[x][y + j] = null;
        }
        return false;
      }
      count++;
      this.#gameboard[x][y + i] = ship;
    }

    this.#availableShips.splice(index, 1);
    this.#ships.push(ship);
    return true;
  }
  receiveAttack(x, y) {
    if (!this.#gameboard[x][y]) {
      this.#miss++;
      return (this.#gameboard[x][y] = "MISS");
    }
    const ship = this.#gameboard[x][y];
    this.#gameboard[x][y] = "HIT";
    ship.hit();
    if (ship.isSunk()) {
      this.#ships.splice(this.#ships.indexOf(ship), 1);
      return "SUNK";
    }
    return "HIT";
  }
  getMisses() {
    return this.#miss;
  }
  isAllSunk() {
    return this.#ships.length === 0;
  }
  displayBoard() {
    return this.#gameboard.map((row) => [...row]);
  }
  getAliveShips() {
    return this.#ships.length;
  }
}
