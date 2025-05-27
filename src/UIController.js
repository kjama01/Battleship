export default class UI {
  all = document.getElementById("all");
  displayGrid(board) {
    const container = document.createElement("div");
    container.id = "board";
    board.forEach((rows, Xindex) => {
      rows.forEach((ship, Yindex) => {
        const square = document.createElement("div");
        if (ship) {
          square.classList.add("ship");
        }
        square.classList.add("square");
        square.dataset.x = Xindex;
        square.dataset.y = Yindex;
        container.appendChild(square);
      });
    });
    all.appendChild(container);
  }
  attackHandle(container) {
    let x, y;
    container.addEventListener("click", () => {
      container.forEach((square) => {
        const x = parseInt(square.dataset.x);
        const y = parseInt(square.dataset.y);
      });
    });
  }
}
