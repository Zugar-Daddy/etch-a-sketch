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


createGrid(100, 100, container, 'grid-box');

function createGrid(gridx, gridy, obj, boxClass){

    let i = gridx;
    while (i > 0){
        let j = gridy;

        const col = document.createElement("div");
        col.classList.add("col");

        obj.appendChild(col);
        while(j > 0){
            const sq = document.createElement("div");
            sq.classList.add(boxClass);

            sq.addEventListener('mouseover', changeColor);
            sq.addEventListener('mousedown', changeColor);

            col.appendChild(sq);

            j--;
        }
        i--;
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
