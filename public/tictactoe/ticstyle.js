let turn = document.querySelector("#turntext");
let button = document.querySelector("#start");

clicked = false;

let grid1 = document.querySelector("#grid1");
let grid2 = document.querySelector("#grid2");
let grid3 = document.querySelector("#grid3");
let grid4 = document.querySelector("#grid4");
let grid5 = document.querySelector("#grid5");
let grid6 = document.querySelector("#grid6");
let grid7 = document.querySelector("#grid7");
let grid8 = document.querySelector("#grid8");
let grid9 = document.querySelector("#grid9");
let grids = [grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9];

button.addEventListener("click", function(){
    if(!clicked){
        button.innerHTML = "restart";
        let roulette = Math.round(Math.random())
        if(roulette===0){
            turn.innerHTML = "Your turn!";
        }else{
            turn.innerHTML = "Computer's turn!";
        }
        clicked = true;
    }else{
        button.innerHTML = "start";
        clicked = false;
    }
    



});