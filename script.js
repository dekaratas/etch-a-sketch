// Check if script loads
// Query Selectors
// Define default grid size
console.log("Script loaded");
let gridSize = 16;
const myBody = document.querySelector("body");
const changeGrid = document.querySelector("#sizeBtn");




// Create new grid with default values on page load
makeGrid(gridSize);


function makeGrid(size) {	
	let theGrid = document.createElement("div");
	theGrid.setAttribute("class", "myGrid");
	theGrid.style.gridTemplateColumns = `repeat(${size}, minmax(0, 1fr))`;
	theGrid.style.gridTemplateRows = `repeat(${size}, minmax(0, 1fr))`;
	myBody.appendChild(theGrid);
	for (let i=0; i<size; i++) {
		for (let j=0; j<size; j++) {
			const div = document.createElement("div");
			div.setAttribute("class", "gridSpace");

			theGrid.appendChild(div);
		}
	}
}

// Button that prompts for new grid size
// Cancel returns to the existing grid
// Range must be between 2 and 100
// Then removes the existing grid and replaces it with the new one
changeGrid.addEventListener("click", () => {
	let newSize = prompt("What grid size do you prefer?");
	if (newSize != null) {
	while(newSize<2 || newSize>100) {
		alert("Grid size must be in the range 2-100");
		newSize = null;
	}
	console.log("Button works");
	let toRemove = document.querySelector(".myGrid");
	toRemove.remove();
	makeGrid(newSize);
	}
});
