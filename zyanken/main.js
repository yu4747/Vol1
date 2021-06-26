const opponent = document.getElementById("opponent-hand");
const decide = document.getElementById("decideBtn");
const result = document.getElementById("gameResult");
console.log(decide);
decide.addEventListener("click", function () {
  const myNum = document.getElementById("handBox").value;
  const hand = document.getElementById("handBox");

  const opponentNum = Math.floor(Math.random() * 3);
  if (opponentNum === 0) {
    opponent.textContent = "相手の手：グー";
    console.log("oppo-rock");
  }

  if (opponentNum === 1) {
    opponent.textContent = "相手の手：チョキ";
    console.log("oppo-scissors");
  }

  if (opponentNum === 2) {
    opponent.textContent = "相手の手：パー";
    console.log("oppo-paper");
  }

  switch (myNum) {
    case "gu": {
      if (opponentNum === 0) {
        result.textContent = "結果：引き分け";
        console.log("aiko");
      } else if (opponentNum === 1) {
        result.textContent = "結果：勝ち";
        console.log("victory");
      } else {
        result.textContent = "結果：負け";
        console.log("make");
      }
      break;
    }
    case "tyoki": {
      if (opponentNum === 0) {
        result.textContent = "結果：負け";
        console.log("make");
      } else if (opponentNum === 1) {
        result.textContent = "結果：引き分け";
        console.log("aiko");
      } else {
        result.textContent = "結果：勝ち";
        console.log("victory");
      }
      break;
    }
    case "pa": {
      if (opponentNum === 0) {
        result.textContent = "結果：勝ち";
      } else if (opponentNum === 1) {
        result.textContent = "結果：負け";
      } else {
        result.textContent = "結果：引き分け";
      }
      break;
    }
  }
});
