let a = 16;
let b = 16;
let grid = document.createElement("div");
grid.setAttribute("id", "parent");
grid.style.gridTemplateColumns = `repeat(${a}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${b}, 1fr)`;
document.body.appendChild(grid);

for (let i = 0; i < (a * b); i++) {
  let cell = document.createElement("div");
  cell.addEventListener("mouseover", function handleMouseOver() {
    cell.style.backgroundColor = "black";
  });
  grid.appendChild(cell);
};
