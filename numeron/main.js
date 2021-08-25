let numberscount = 0;
let randoms = [];
let min = 0;
let max = 9;

for (i = min; i <= max; i++) {
  while (numberscount <= 3) {
    let virtualnum = intRandom(min, max);
    if (!randoms.includes(virtualnum)) {
      randoms.push(virtualnum);
      numberscount += 1;
      break;
    }
  }
}

function intRandom(min, max) {
  return (randomnum = Math.floor(Math.random() * (max - min + 1)) + min);
}

intRandom();
console.log(randomnum);

let Box = document.getElementById("answer").value;
let array = Box.split("");
console.log(array);

const Btn = document.getElementById("kotaeawase");
Btn.addEventListener("click", function () {
  checkResult();
  if (Box.length === 3) {
    console.log("check");
  }
  if (Box.length != 3) {
    alert("3文字にしてください");
  }
});

function checkResult() {}
