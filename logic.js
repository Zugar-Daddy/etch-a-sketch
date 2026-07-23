let size = Number(prompt('Hey Man, what size of grid do you want?'));
size = size >= 100 ? 100 : size;
let boxSize = Math.floor(800 / size);

// container size is 800 x 800
const container = document.querySelector(".grid-box-container");
const rainbow = document.querySelector(".rainbow");
const black = document.querySelector(".black");

let drawMode = 'black';

black.addEventListener('click', () => {
    drawMode = 'black';
});

rainbow.addEventListener('click', () => {
    drawMode = 'rainbow';
});

// The bubbling thing catches this
let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true; console.log("UPPPPP");}
document.body.onmouseup = () => {mouseDown = false;console.log("DOWNN");}

// Current Color
let COLOR = 'black';
let setColor = (col) => COLOR = col;


createGrid(size, size, container, 'grid-box');

function createGrid(rows, cols, container, boxClass) {
    for (let i = 0; i < rows; i++) {
        const col = document.createElement("div");
        col.classList.add("col");
        container.appendChild(col);

        for (let j = 0; j < cols; j++) {
            const sq = document.createElement("div");
            sq.classList.add(boxClass);
            sq.style.width = `${boxSize}px`;
            sq.style.height = `${boxSize}px`;

            sq.addEventListener("mousedown", changeColor);
            sq.addEventListener("mouseover", changeColor);

            col.appendChild(sq);
        }
    }
}


// event object is passed
function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return;

    if(drawMode === 'black'){
        e.target.style.background = 'black';
    } 
    else{
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        e.target.style.background = `rgb(${r}, ${g}, ${b})`;
    }
}
