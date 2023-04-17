let gridSize = 16;

console.log("Script loaded");

const myGrid = document.querySelector(".grid");

function makeGrid(size) {
	for (let i=0; i<size; i++) {
		for (let j=0; j<size; j++) {
			const div = document.createElement("div");
			div.style.width="10px";
			div.style.height="10px";
			div.style.border="1px solid black";
			myGrid.appendChild(div);
		}
	}
}

makeGrid(gridSize);