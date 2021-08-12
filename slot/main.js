const slotNumber1 = document.getElementById("number1");
const slotNumber2 = document.getElementById("number2");
const slotNumber3 = document.getElementById("number3");
const FBtn = document.getElementById("firstStBtn");
const SBtn = document.getElementById("secondStBtn");
const TBtn = document.getElementById("thirdStBtn");
const start = document.getElementById("startBtn");

let slot1 = "0";
slotNumber1.textContent = `${slot1}`;
let timer1;
let slot2 = "0";
slotNumber2.textContent = `${slot2}`;
let timer2;
let slot3 = "0";
slotNumber3.textContent = `${slot3}`;
let timer3;
let stopCount = 0;

start.addEventListener("click", function () {
  stopCount = 0;
  const random1 = function () {
    slot1 = Math.floor(Math.random() * 9);
    slotNumber1.textContent = `${slot1}`;
  };

  clearInterval(timer1);
  timer1 = setInterval(random1, 100);

  const random2 = function () {
    slot2 = Math.floor(Math.random() * 9);
    slotNumber2.textContent = `${slot2}`;
  };

  clearInterval(timer2);
  timer2 = setInterval(random2, 100);

  const random3 = function () {
    slot3 = Math.floor(Math.random() * 9);
    slotNumber3.textContent = `${slot3}`;
  };

  clearInterval(timer3);
  timer3 = setInterval(random3, 100);

  FBtn.disabled = false;
  SBtn.disabled = false;
  TBtn.disabled = false;
});

FBtn.addEventListener("click", function () {
  clearInterval(timer1);
  slotNumber1.textContent = `${slot1}`;
  console.log("stop1");
  FBtn.disabled = true;
  stopCount++;
  if (stopCount == 3) {
    checkResult();
  }
});

SBtn.addEventListener("click", function () {
  clearInterval(timer2);
  slotNumber2.textContent = `${slot2}`;
  console.log("stop2");
  SBtn.disabled = true;
  stopCount++;
  if (stopCount == 3) {
    checkResult();
  }
});

TBtn.addEventListener("click", function () {
  clearInterval(timer3);
  slotNumber3.textContent = `${slot3}`;
  console.log("stop3");
  TBtn.disabled = true;
  stopCount++;
  if (stopCount == 3) {
    checkResult();
  }
});

function checkResult() {
  console.log("check");
  if (slot1 == slot2 && slot2 == slot3 && slot1 == slot3) {
    alert("成功！");
  } else {
    alert("再挑戦");
  }
}
