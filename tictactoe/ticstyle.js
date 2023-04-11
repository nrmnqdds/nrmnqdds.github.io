
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

let startbtn = document.querySelector("#start");
let turntext = document.querySelector("#turntext");

let started = false;

turntext.textContent = "press play";

startbtn.addEventListener("click", function(){
  if(!started){
    started = true;
    startbtn.textContent = "restart";
  }else{
    started = false;
    startbtn.textContent = "play";
  }
  startgame();
})

function startgame(){
  // startbtn.textContent = "Start";
  for (let i = 0; i < grids.length; i++) {
    grids[i].textContent = "";
  }
  


}

