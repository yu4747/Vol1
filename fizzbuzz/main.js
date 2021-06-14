for (let i = 1; i < 21; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

let v = 0;
const countup = document.getElementById("countup");
countup.innerHTML = v;

const rewriteCountUp = function () {
  v += 1;
  if (v % 3 === 0 && v % 5 === 0) {
    countup.innerHTML = "fizzbuzz";
  } else if (v % 3 === 0) {
    countup.innerHTML = "fizz";
  } else if (v % 5 === 0) {
    countup.innerHTML = "buzz";
  } else {
    countup.innerHTML = v;
  }
};
