const container = document.querySelector(".container");

// The bubbling thing catches this
let mouseDown = false;
document.body.onmousedown = () => {mouseDown = true; console.log("UPPPPP");}
document.body.onmouseup = () => {mouseDown = false;console.log("DOWNN");}

// Current Color


createGrid(100);

function createGrid(gridSize){

    let i = gridSize;
    while (i >= 0){
        j = gridSize;

        const col = document.createElement("div");
        col.classList.add("col");

        container.appendChild(col);
        while(j >= 0){
            const sq = document.createElement("div");
            sq.classList.add("grid-box");

            sq.addEventListener('mouseover', changeColor);

            col.appendChild(sq);

            j--;
        }
        i--;
    }

}

// event object is passed
function changeColor(e){
    if(e.type == 'mouseover' && !mouseDown) return;

    e.target.style.background = 'black';
}
