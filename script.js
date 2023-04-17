// Check if script loads
// Query Selectors
// Define default grid size
console.log("Script loaded");
let gridSize = 16;
const myBody = document.querySelector("body");
const changeGrid = document.querySelector("#sizeBtn");
const theGrid = document.createElement("div");



// Create new grid with default values on page load
makeGrid(gridSize);


function makeGrid(size) {
	
	
	console.log("New grid made");
	theGrid.setAttribute("class", "myGrid");
	theGrid.style.gridTemplateColumns = `repeat(${size}, 11px)`;
	theGrid.style.gridTemplateRows = `repeat(${size}, 11px)`;
	myBody.appendChild(theGrid);
	for (let i=0; i<size; i++) {
		for (let j=0; j<size; j++) {
			const div = document.createElement("div");
			div.setAttribute("class", "gridSpace");
			div.style.width="10px";
			div.style.height="10px";
			div.style.border="1px solid black";
			theGrid.appendChild(div);
		}
	}
}

// Button that first removes the existing grid
changeGrid.addEventListener("click", () => {
	console.log("Button works");
	theGrid.remove();
});
