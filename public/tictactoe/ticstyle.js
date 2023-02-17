let turn = document.querySelector("#turntext");
let button = document.querySelector("#start");

let clicked = false;
let gameEnd = false;
let hasMoved = false;

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

button.onclick = function () {
  if (!clicked) {
    let playerturn = false;
    let computerturn = false;

    button.innerHTML = "restart";
    let roulette = Math.round(Math.random());
    // while(!gameEnd){
    if(roulette === 0){
      turn.innerHTML = "Your turn!";
      playerturn = true;
      playermove();
    }else{
      turn.innerHTML = "Computer's turn!";
      computerturn = true;
      computermove();
    }
    // }

    clicked = true;
  }else{
    for (let i = 0; i < grids.length; i++) {
      grids[i].innerHTML = null;
    }
    button.innerHTML = "start";
    clicked = false;
  }
};

// while(!gameEnd){
//     if(playerturn){
//         playermove();
//     }else if(computerturn){
//         computermove();
//     }else{
//         gameEnd = true;
//     }
// }

function playermove(){
  for(let i = 0; i<grids.length; i++){
    grids[i].onclick = function(){
      if(grids[i].innerHTML != "O" && grids[i].innerHTML != "X"){
        grids[i].innerHTML = "X";
        // grids[i] = 0;
        return;
      }
    };
  }
}

async function computermove(){
  while(true){
    let random = Math.floor(Math.random() * grids.length);
    console.log(random);
    if (grids[random].innerHTML != "O" && grids[random].innerHTML != "X"){
      await new Promise(r => setTimeout(r, 1500));
      grids[random].innerHTML = "O";
      return;
    }
  }
}
