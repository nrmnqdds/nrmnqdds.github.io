startgame();

function startgame() {
  let turn = document.querySelector("#turntext");
  let button = document.querySelector("#start");

  let clicked = false;
  let gameEnd = false;
  let filled = 0;
  // let hasMoved = false;

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
      clicked = true;
      let playerturn = false;
      let computerturn = false;

      button.innerHTML = "restart";
      let roulette = Math.round(Math.random());

      if (roulette === 0) {
        playerturn = true;
        playermove();
        roulette = 1;
      } else {
        computerturn = true;
        computermove();
        roulette = 0;
      }

      whoWin();
    } else {
      for (let i = 0; i < grids.length; i++) {
        grids[i].innerHTML = null;
      }
      filled = 0;
      turn.innerHTML = null;
      button.innerHTML = "start";
      startgame();
    }
  };

}

function playermove() {
  turn.innerHTML = "Your turn!";
  for (let i = 0; i < grids.length; i++) {
    grids[i].onclick = function () {
      if (grids[i].innerHTML != "O" && grids[i].innerHTML != "X") {
        grids[i].innerHTML = "X";
        filled += 1;
        playerturn = false;
        computerturn = true;
        swapturn(playerturn, computerturn);
      }
    };
  }
}

async function computermove() {
  turn.innerHTML = "Computer's turn!";
  while (true) {
    let random = Math.floor(Math.random() * grids.length);
    console.log(random);
    if (grids[random].innerHTML != "O" && grids[random].innerHTML != "X") {
      await new Promise((r) => setTimeout(r, 1100));
      grids[random].innerHTML = "O";
      filled += 1;
      computerturn = false;
      playerturn = true;
      swapturn(playerturn, computerturn);
      break;
    }
    if (filled == 9) {
      turn.innerHTML = "Game ended";
      break;
    }
  }
}

function swapturn(playerturn, computerturn) {
  if (playerturn && !computerturn) {
    playermove();
  } else {
    computermove();
  }
}

function whoWin() {
  if(
    (grids[0]==grids[1]==grids[2] == "X") ||
    (grids[0]==grids[3]==grids[6] == "X") ||
    (grids[0]==grids[4]==grids[8] == "X") ||
    (grids[1]==grids[4]==grids[7] == "X") ||
    (grids[2]==grids[5]==grids[8] == "X") ||
    (grids[2]==grids[4]==grids[6] == "X") ||
    (grids[3]==grids[4]==grids[5] == "X") ||
    (grids[6]==grids[7]==grids[8] == "X")
  ){
    turn.innerHTML = "you win!!";
  }else if(
    (grids[0]==grids[1]==grids[2] == "O") ||
    (grids[0]==grids[3]==grids[6] == "O") ||
    (grids[0]==grids[4]==grids[8] == "O") ||
    (grids[1]==grids[4]==grids[7] == "O") ||
    (grids[2]==grids[5]==grids[8] == "O") ||
    (grids[2]==grids[4]==grids[6] == "O") ||
    (grids[3]==grids[4]==grids[5] == "O") ||
    (grids[6]==grids[7]==grids[8] == "O")
  ){
    turn.innerHTML = "computer win!!";
  }else{
    turn.innerHTML = "draw!!";
  }
}
// 0 1 2
// 3 4 5
// 6 7 8


