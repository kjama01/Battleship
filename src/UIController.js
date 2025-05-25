export default class UI {
  all = document.getElementById("all");
  createGrid(board) {
    const container = document.createElement("div");
    container.id = "board";
    board.forEach((rows, Xindex) => {
      rows.forEach((_, Yindex) => {
        const square = document.createElement("div");
        square.classList.add("square");
        square.dataset.x = Xindex;
        square.dataset.y = Yindex;
        container.appendChild(square);
      });
    });
    all.appendChild(container);
  }
}
