export default class Ship {
  #length;
  #hits;
  #sunk;
  constructor(length) {
    this.#length = length;
    this.#hits = 0;
    this.#sunk = false;
  }
  getLength() {
    return this.#length;
  }
  hit() {
    return this.#hits++;
  }
  isSunk() {
    return (this.#sunk = this.#hits === this.#length);
  }
}
