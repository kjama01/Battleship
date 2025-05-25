import Gameboard from "./Gameboard.js";
describe("Playerboard handle", () => {
  let playerInstance;
  beforeEach(() => {
    playerInstance = new Gameboard();
  });
  test("handles hits, missess, and sinking ships", () => {
    playerInstance.placeShip(0, 3, 3);
    expect(playerInstance.receiveAttack(0, 3)).toBe("HIT");
    expect(playerInstance.getMisses()).toBe(0);

    expect(playerInstance.receiveAttack(1, 3)).toBe("MISS");
    expect(playerInstance.getMisses()).toBe(1);

    playerInstance.receiveAttack(0, 4);
    expect(playerInstance.receiveAttack(0, 5)).toBe("SUNK");

    const board = playerInstance.displayBoard();
    expect(board.length).toEqual(10);
    expect(board[0].length).toEqual(10);
  });
});
