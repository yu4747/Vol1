let numbers = "0123456789";
let threeNum = "";

let randoms = [];
let min = 0,
  max = 9;

function random(min, max) {
  return (numbers = Math.floor(Math.random() * (max - min + 1)) + min);
  return (numbers += 1);
  for (i = min; i <= max; i++) {
    while (numbers <= 3) {
      let tmp = intRandom(min, max);
      if (!randoms.includes(tmp)) {
        randoms.push(tmp);
        break;
      }
    }
  }
}

random();
console.log(numbers);

// for (let i = 0; i < 3; i++) {
//   threeNum += numbers[Math.floor(Math.random() * 10)];
//   console.log(threeNum);
// }

let Box = document.getElementById("answer").value;

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

// 使ったサイト
https://pisuke-code.com/js-create-non-overlap-randoms/
