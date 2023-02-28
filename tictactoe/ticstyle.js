startgame();

function startgame() {
  let turn = document.querySelector("#turntext");
  let button = document.querySelector("#start");

  let clicked = false;
  let gameEnd = false;
  let filled = 0;

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
    } else {
      endgame();
    }
  };

  function playermove() {
    if (filled == 9) {
      whoWin();
    }
    turn.innerHTML = "Your turn!";
    for (let i = 0; i < grids.length; i++) {
      grids[i].onclick = function () {
        if (grids[i].innerHTML != "O" && grids[i].innerHTML != "X") {
          grids[i].innerHTML = "X";
          filled += 1;
          playerturn = false;
          computerturn = true;
          swapturn(playerturn, computerturn);
          whoWin();
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
        whoWin();
        break;
      }
      if (filled == 9) {
        whoWin();
        break;
      }
    }
  }

  function swapturn(playerturn, computerturn) {
    if (gameEnd) {
      return;
    }
    if (filled == 9) {
      whoWin();
    } else if (playerturn && !computerturn) {
      playermove();
    } else {
      computermove();
    }
  }

  async function whoWin() {
    if (
      (grids[0].innerHTML === grids[1].innerHTML &&
        grids[1].innerHTML === grids[2].innerHTML &&
        grids[0].innerHTML !== "") ||
      (grids[3].innerHTML === grids[4].innerHTML &&
        grids[4].innerHTML === grids[5].innerHTML &&
        grids[3].innerHTML !== "") ||
      (grids[6].innerHTML === grids[7].innerHTML &&
        grids[7].innerHTML === grids[8].innerHTML &&
        grids[6].innerHTML !== "") ||
      (grids[0].innerHTML === grids[3].innerHTML &&
        grids[3].innerHTML === grids[6].innerHTML &&
        grids[0].innerHTML !== "") ||
      (grids[1].innerHTML === grids[4].innerHTML &&
        grids[4].innerHTML === grids[7].innerHTML &&
        grids[1].innerHTML !== "") ||
      (grids[2].innerHTML === grids[5].innerHTML &&
        grids[5].innerHTML === grids[8].innerHTML &&
        grids[2].innerHTML !== "") ||
      (grids[0].innerHTML === grids[4].innerHTML &&
        grids[4].innerHTML === grids[8].innerHTML &&
        grids[0].innerHTML !== "") ||
      (grids[2].innerHTML === grids[4].innerHTML &&
        grids[4].innerHTML === grids[6].innerHTML &&
        grids[2].innerHTML !== "")
    ) {
      if (playerturn) {
        turn.innerHTML = "You Win!";
        await new Promise((r) => setTimeout(r, 3000));
        endgame();
      } else {
        turn.innerHTML = "Computer Wins!";
        await new Promise((r) => setTimeout(r, 3000));
        endgame();
      }
      for (let i = 0; i < grids.length; i++) {
        grids[i].onclick = function () {};
      }
    } else if (filled === 9) {
      turn.innerHTML = "It's a draw!";
    }
  }
  
  function endgame(){
    clicked = false;
    for (let i = 0; i < grids.length; i++) {
      grids[i].innerHTML = null;
    }
    filled = 0;
    turn.innerHTML = null;
    button.innerHTML = "start";
    startgame();
  }
  
}
// 0 1 2
// 3 4 5
// 6 7 8


