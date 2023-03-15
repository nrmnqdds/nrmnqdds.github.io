let colors = ["blue", "red", "green", "orange", "pink"];

let randomcolor = Math.floor(Math.random() * colors.length);

document.querySelector(".task").style.backgroundColor = colors[randomcolor];

document.querySelector(".addwrapper button").onclick = function () {
  let todo = document.querySelector(".addwrapper input").value;
  document.querySelector(".todocontainer").innerHTML +=
    "<div class='task''>" + "<p>" + todo + "</p>" + "</div>";
  document.querySelector(".task").style.backgroundColor = colors[randomcolor];
};
