const resetBtn = document.getElementById("reset");
const violet = document.getElementById("letter-box"); //input
const until = document.getElementById("untilCnt"); //countNum
const letterNum = 400; //goalNum 最大文字数

violet.addEventListener("keyup", function () {
  until.textContent = `あと${letterNum - violet.value.length}文字です`;
});

resetBtn.addEventListener("click", function () {
  until.textContent = `あと ${letterNum}文字です`;
  violet.value = "";
});
