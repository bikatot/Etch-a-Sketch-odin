let grid = document.createElement("div");
grid.setAttribute("id", "parent");
grid.style.gridTemplateColumns = `repeat(${16}, 1fr)`;
grid.style.gridTemplateRows = `repeat(${16}, 1fr)`;
document.body.appendChild(grid);

let newGridButton = document.getElementById("newGridButton");
newGridButton.addEventListener("click", createNewGrid);

let classicModeButton = document.getElementById("classicMode");
classicModeButton.addEventListener("click", () => {
  state.mode = "Classic";
});

let rainbowModeButton = document.getElementById("rainbowMode");
rainbowModeButton.addEventListener("click", () => {
  state.mode = "Rainbow";
});

let grayScaleModeButton = document.getElementById("grayScaleMode");
grayScaleModeButton.addEventListener("click", () => {
  state.mode = "Gray scale";
});

const state = {
  mode: "Classic"
};

let addCells = function(cellsPerSide) {
  for (let i = 0; i < (cellsPerSide * cellsPerSide); i++) {
  let cell = document.createElement("div");
  let r = 255;
  let g = 255;
  let b = 255;
  cell.addEventListener("mouseover", function handleMouseOver() {
    if (state.mode === "Classic") {
      cell.style.backgroundColor = "black";
    } else if (state.mode === "Rainbow"){
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    let colorHexValue = "#" + randomColor;
    cell.style.backgroundColor = colorHexValue;
    } else if (state.mode === "Gray scale") {
    cell.style.backgroundColor = `rgb(${r -= 25.5}, ${g -= 25.5}, ${b -= 25.5})`;
  }});
  grid.appendChild(cell);
}};

addCells(16);

function createNewGrid() {
  let userChoice = prompt("Please enter the amount of cells per side of the grid");
  if (userChoice > 100) {
    return alert("Error. You can't create more than 100 cells per side");
  };
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${userChoice}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${userChoice}, 1fr)`;
  addCells(userChoice);
};
