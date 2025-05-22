import Ship from "./ship.js";

test("IsSunkLogic", () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
