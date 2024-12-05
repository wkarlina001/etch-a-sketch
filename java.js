const grid = document.querySelector('.grid');
const reset = document.querySelector('.reset')

// Add a click event to a <button> element:
const resolutionInput = document.querySelector('#resolutionInput'); 
const resolutionLabel = document.querySelector('.resolutionLabel'); 

const defaultColor = document.querySelector('.default');
const randomColor = document.querySelector('.color'); 
let numSquares = 16;

resolutionInput.addEventListener('input', changeGrid); 
function changeGrid(e){
    numSquares = e.target.value;
    resolutionLabel.textContent = `${numSquares}x${numSquares}`;
}

reset.addEventListener('click', resetGrid);
function resetGrid() {
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    createGrid(numSquares);
}

// Function to create the grid div boxes, retrieve CSS, add 'mouseover' effect, and append to HTML
function createGrid(resolutionInput){
  let gridSize = (resolutionInput * resolutionInput); 
    
  for (i = 0; i < gridSize; ++i){ 
        let gridDiv = document.createElement('div') 
        gridDiv.className = 'box' 
        gridDiv.addEventListener('mouseover', changeColor); 
        
        grid.appendChild(gridDiv)
  }

  grid.style.gridTemplateColumns =`repeat(${resolutionInput}, 1fr)` 
  grid.style.gridTemplateRows =`repeat(${resolutionInput}, 1fr)`
  //Fr is a fractional unit and 1fr is for 1 part of the available space
}
createGrid(numSquares);

// Default button - makes the defaultColorMode type active, and removes active from randomColorMode
defaultColor.addEventListener("click", function() {
    type = "defaultColorMode";
    
    this.classList.add("active");
    randomColor.classList.remove("active");
});
  
// Color button - makes the randomColorMode type active, and removes active from defaultColorMode
randomColor.addEventListener("click", function() {
    type = "randomColorMode";

    this.classList.add("active");
    defaultColor.classList.remove("active");
});

function changeColor(e) {
    if (type === "randomColorMode") {  
        const randomR = Math.floor(Math.random() * 256) 
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if (type === "defaultColorMode") {
        e.target.style.backgroundColor = 'lightblue' ;
    }
}
