import Player from "./Player.js";

describe("Battle cases between players", () => {
  let playerInstance;
  let computerInstance;
  beforeEach(() => {
    playerInstance = new Player();
    computerInstance = new Player(true);
  });
  test("Player one sink Player two ship", () => {
    computerInstance.placeShip(8, 5, 2);
    expect(playerInstance.makeMove(8, 5, computerInstance)).toBe("HIT");
    expect(playerInstance.makeMove(9, 5, computerInstance)).toBe("MISS");
    expect(playerInstance.makeMove(8, 6, computerInstance)).toBe("SUNK");
  });
  test("Player two got every ship sunk", () => {
    computerInstance.placeShip(8, 5, 2);
    playerInstance.placeShip(1, 1, 5);
    expect(playerInstance.isAllSunk()).toBe(false);
    expect(playerInstance.makeMove(8, 5, computerInstance)).toBe("HIT");
    expect(playerInstance.makeMove(9, 5, computerInstance)).toBe("MISS");
    expect(playerInstance.makeMove(8, 6, computerInstance)).toBe("SUNK");
    expect(computerInstance.isAllSunk()).toBe(true);
  });
  test("Placing ships out of board scope", () => {
    expect(playerInstance.placeShip(11, 12, 2)).toBe(false);
    expect(playerInstance.placeShip(11, 1, 2)).toBe(false);
    expect(playerInstance.placeShip(1, 1, 10)).toBe(false);
  });
});
