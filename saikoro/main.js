const startBtn = document.getElementById("btn");
const body = document.querySelector("body");
const dice = document.createElement("img");
body.appendChild(dice);
dice.style.width = "100px";
dice.style.height = "100px";
let diceNum = "./img/saikoro1.png";
dice.setAttribute("src", diceNum);
const random = function () {
  diceNum = `./img/saikoro${Math.floor(Math.random() * 6 + 1)}.png`;
  dice.setAttribute("src", diceNum);
};

let timer;
startBtn.addEventListener("click", function () {
  timer = setInterval("random()", 100);
  setTimeout(function () {
    clearInterval(timer);
  }, 3000);
});
