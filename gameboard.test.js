import Gameboard from "./gameboard.js";
describe("Playerboard handle", () => {
  let boardInstance;
  beforeEach(() => {
    boardInstance = new Gameboard();
  });
  test("handles hits, missess, and sinking ships", () => {
    boardInstance.placeShip(0, 3, 3);
    expect(boardInstance.receiveAttack(0, 3)).toBe("HIT");
    expect(boardInstance.getMisses()).toBe(0);

    expect(boardInstance.receiveAttack(1, 3)).toBe("MISS");
    expect(boardInstance.getMisses()).toBe(1);

    boardInstance.receiveAttack(0, 4);
    expect(boardInstance.receiveAttack(0, 5)).toBe("SUNK");

    const board = boardInstance.displayBoard();
    expect(board.length).toEqual(10);
    expect(board[0].length).toEqual(10);
  });
});
