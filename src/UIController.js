import { updateBoards, startGame } from "./GameController.js";

export default class UI {
  gameStarted = false;
  main = document.getElementById("main");
  displayGrid(playerInstance, player) {
    this.attackEnabled = true;
    const board = playerInstance.displayBoard();
    console.log(board);
    const box = document.createElement("div");
    const container = document.createElement("div");
    const name = document.createElement("h1");
    name.textContent = player ? "Player" : "Computer";

    container.classList.add(player ? "player" : "computer");
    box.classList.add(player ? "player-box" : "computer-box");
    container.classList.add("board");
    board.forEach((rows, Xindex) => {
      rows.forEach((cell, Yindex) => {
        const square = document.createElement("div");
        if (cell === "MISS") {
          square.classList.add("miss");
        } else if (cell === "HIT") {
          square.classList.add("hit");
        } else if (cell !== null && player) {
          square.classList.add("ship");
        }
        square.classList.add("square");
        square.dataset.x = Xindex;
        square.dataset.y = Yindex;
        container.appendChild(square);
      });
    });
    box.appendChild(name);
    box.appendChild(container);
    if (this.gameStarted) {
      const aliveShips = document.createElement("span");
      aliveShips.classList.add(player ? "player-ships" : "computer-ships");
      aliveShips.textContent = `Alive Ships: ${playerInstance.getAliveShips()}`;
      box.appendChild(aliveShips);
    }
    this.main.appendChild(box);
    return container;
  }
  updateAliveShips(playerInstance, isPlayer) {
    const selector = isPlayer ? ".player-ships" : ".computer-ships";
    const el = document.querySelector(selector);
    if (el) {
      el.textContent = `Alive Ships: ${playerInstance.getAliveShips()}`;
    }
  }
  clearBoard() {
    this.main.innerHTML = "";
  }
  attack(callback) {
    this.main.addEventListener("click", (e) => {
      if (!this.attackEnabled) return;
      if (
        e.target.classList.contains("square") &&
        e.target.closest(".computer")
      ) {
        const square = e.target;
        if (
          square.classList.contains("hit") ||
          square.classList.contains("miss")
        )
          return;

        const x = parseInt(square.dataset.x);
        const y = parseInt(square.dataset.y);
        callback(x, y);
      }
    });
  }
  restart() {
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "New Game";
    restartBtn.classList.add("restart-button");
    restartBtn.onclick = () => window.location.reload();
    const bottom = document.getElementById("bottom");
    bottom.appendChild(restartBtn);
    document.querySelectorAll(".board").forEach((el) => {
      el.classList.add("end");
    });
  }
  disableAttack() {
    this.attackEnabled = false;
  }
}
let shipsToPlace = [5, 4, 3, 3, 2];
let currentIndex = 0;
let currentOrientation = "vertical";

function setupOrientationButton() {
  const swapBtn = document.getElementById("swap");
  swapBtn.textContent = "Vertical";

  swapBtn.addEventListener("click", () => {
    currentOrientation =
      currentOrientation === "vertical" ? "horizontal" : "vertical";
    swapBtn.textContent =
      currentOrientation === "vertical" ? "Vertical" : "Horizontal";
  });
}

function handleClick(e, PlayerInstance) {
  const square = e.target;
  if (!square.classList.contains("square")) return;
  if (!square.closest(".player")) return;

  const x = parseInt(square.dataset.x);
  const y = parseInt(square.dataset.y);
  const length = shipsToPlace[currentIndex];

  const placed =
    currentOrientation === "vertical"
      ? PlayerInstance.placeShip(x, y, length)
      : PlayerInstance.placeShipHorizontally(x, y, length);

  updateBoards();

  if (placed) {
    currentIndex++;
    if (currentIndex >= shipsToPlace.length) {
      finishPlacement();
    }
  }
}

function handleHover(e) {
  const square = e.target;
  if (!square.classList.contains("square")) return;
  if (!square.closest(".player")) return;

  const x = parseInt(square.dataset.x);
  const y = parseInt(square.dataset.y);
  const length = shipsToPlace[currentIndex];

  clearPreview();

  const toHighlight = [];
  let isValid = true;

  for (let i = 0; i < length; i++) {
    const dx = currentOrientation === "vertical" ? x + i : x;
    const dy = currentOrientation === "vertical" ? y : y + i;
    const el = document.querySelector(
      `.square[data-x="${dx}"][data-y="${dy}"]`
    );
    if (!el || el.classList.contains("ship")) isValid = false;
    if (el) toHighlight.push(el);
  }

  toHighlight.forEach((el) => {
    el.classList.add("preview");
    if (!isValid) el.classList.add("invalid");
  });
}

function clearPreview() {
  document
    .querySelectorAll(".preview")
    .forEach((el) => el.classList.remove("preview", "invalid"));
}

export function startShipPlacement(PlayerInstance) {
  setupOrientationButton();
  updateBoards();

  document
    .getElementById("main")
    .addEventListener("click", (e) => handleClick(e, PlayerInstance));
  document.getElementById("main").addEventListener("mouseover", handleHover);
  document.getElementById("main").addEventListener("mouseout", clearPreview);
}
function finishPlacement() {
  document.getElementById("main").removeEventListener("click", handleClick);
  document.getElementById("main").removeEventListener("mouseover", handleHover);
  document.getElementById("main").removeEventListener("mouseout", clearPreview);
  startGame();
}
