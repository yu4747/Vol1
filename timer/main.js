let timer;
let sec = 10;

const change = document.getElementById("changeBtn"); //setTime
const start = document.getElementById("startBtn");
const stop = document.getElementById("stopBtn");
const secondtipe = document.getElementById("displaysec"); //nowTime

change.addEventListener("click", function () {
  sec = document.getElementById("second-fill-out").value; //箱
  secondtipe.textContent = `${sec}:セット完了です`;
});

const countDown = function () {
  sec -= 1;
  secondtipe.textContent = sec;
  if (sec === 0) {
    alert("終了");
    clearInterval(timer);
  }
};

start.addEventListener("click", function () {
  clearInterval(timer);
  timer = setInterval("countDown()", 1000);
});

stop.addEventListener("click", function () {
  clearInterval(timer);
  secondtipe.textContent = `${sec}:ストップしました`;
});
