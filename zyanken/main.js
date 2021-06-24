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
  }

  if (opponentNum === 1) {
    opponent.textContent = "相手の手：チョキ";
  }

  if (opponentNum === 2) {
    opponent.textContent = "相手の手：パー";
  }

  switch (myNum) {
    case "gu": {
      if (opponentNum === 0) {
        result.textContent = "結果：引き分け";
      } else if (opponentNum === 1) {
        result.textContent = "結果：勝ち";
      } else {
        result.textContent = "結果：負け";
      }
    }
    case "tyoki": {
      if (opponentNum === 0) {
        result.textContent = "結果：負け";
      } else if (opponentNum === 1) {
        result.textContent = "結果：引き分け";
      } else {
        result.textContent = "結果：勝ち";
      }
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
