const opponent = document.getElementById("opponent-hand");
const decide = document.getElementById("decideBtn");
console.log(decide);
decide.addEventListener("click", function () {
  const hand = document.getElementById("handBox");
  const opponentNum = Math.floor(Math.random() * 3);

  if (opponentNum === 0) {
    opponent.textContent = "相手の手：グー";
    console.log("グー");
  }
});
