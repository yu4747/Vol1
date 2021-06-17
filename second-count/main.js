let timer;
let sec = 0;

const checkBtn = document.getElementById("check");
const startBtn = document.getElementById("start");
//const body = document.querySelector("body");

startBtn.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countUp()", 1000);
});

checkBtn.addEventListener("click", function () {
  if (sec === 20) {
    alert("大成功！！");
  } else if (sec < 20) {
    alert(`まだ${sec}秒、、、再スタートだ`);
  } else {
    alert(`もう${sec}秒だ！再挑戦せよ`);
  }
  clearInterval(timer);
  sec = 0;
});

const countUp = function () {
  sec += 1;
  if (sec === 40) {
    clearInterval(timer);
    alert("終了/また挑戦しろ");
    sec = 0;
  }
};
