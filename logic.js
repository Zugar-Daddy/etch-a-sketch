const container = document.querySelector(".container");

createGrid(200);

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

            sq.addEventListener('mouseenter', (event) => sq.style.background = 'black');


            col.appendChild(sq);

            j--;
        }
        i--;
    }

}


