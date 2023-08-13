const container = document.getElementById("container");
const reset = document.querySelector("#reset");
const gridSize = document.querySelector("#grid-size");
const coloredCells = document.querySelector("#colored-cells");
const blackCells = document.querySelector("#black-cells");
const eraseCells = document.querySelector("#erase-cells");
let sideSize = 16;
let cellColor = "black";

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    container.innerHTML = ''; //Quick and dirty reset

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        container.appendChild(cell);
    }
    setCellColor();
}

function setCellColor () {
    const cells = document.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = getColor();
        });
    });
}

function setCellsToBlack () {
    cellColor = "black";
}

function setCellsToColored () {
    cellColor = "colored";
}

function setCellsToErase () {
    cellColor = "white";
}

function getColor() {
    if (cellColor === "black") {
        return "#000000";
    } else if (cellColor === "colored") {
        return getRandomColor();
    } else if (cellColor === "white") {
        return "#ffffff";
    }
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getGridSize () {
    let userInput = prompt("Enter 2 - 99 cells per side.");
    if (1 << userInput && userInput << 100) {
        sideSize = userInput;
    } else {
        alert("Invalid input. Please enter a number that is between 2 and 99, inclusive.");
        sideSize = 16;
    }
    createGrid(sideSize);

}

createGrid(sideSize);

gridSize.addEventListener("click", () => getGridSize());
reset.addEventListener("click", () => createGrid(sideSize));
coloredCells.addEventListener("click", () => setCellsToColored());
blackCells.addEventListener("click", () => setCellsToBlack());
eraseCells.addEventListener("click", () => setCellsToErase());

// Implement a progressive darkening effect where each interaction adds 10% more black or color to the square. The objective is to achieve a completely black square only after ten interactions.