let grid = document.createElement("div");
grid.setAttribute("id", "parent");
grid.style.gridTemplateColumns = `repeat(${16}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${16}, 1fr)`;
document.body.appendChild(grid);
let button = document.getElementById("newGridButton");
button.addEventListener("click", createNewGrid);

let addCells = function(columns, rows) {
  for (let i = 0; i < (columns * rows); i++) {
  let cell = document.createElement("div");
  cell.addEventListener("mouseover", function handleMouseOver() {
    cell.style.backgroundColor = "black";
  });
  grid.appendChild(cell);
}};

addCells(16, 16);

function createNewGrid() {
  let choiceX = prompt("Please enter the amount of columns");
  let choiceY = prompt("Please enter the amount of rows");
  if (choiceX > 100 || choiceY > 100) {
    return alert("Error. You can't create more than 100 rows or columns");
  };
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${choiceX}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${choiceY}, 1fr)`;
  addCells(choiceX, choiceY);
};
