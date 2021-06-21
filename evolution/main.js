const evolutionEnjin = document.getElementById("evolution-Img");
const evolve = document.getElementById("evolveBtn");
const reset = document.getElementById("resetBtn");

evolutionEnjin.style.width = "180px";
evolutionEnjin.style.height = "230px";

const imgElement = document.getElementById("enjin-img");
const html = imgElement.innerHTML;

evolutionEnjin.innerHTML = "";

evolve.addEventListener("click", function () {
  const enjinNum = Math.random() * 10;
  evolutionEnjin.innerHTML = ""; //ボタン再度押した時に一回リセットする

  const lev1 = document.createElement("div");
  lev1.innerHTML = "<img src='img/evolution1.png' alt='原人' />";
  evolutionEnjin.appendChild(lev1);

  if (enjinNum >= 4) {
    const lev2 = document.createElement("div");
    lev2.innerHTML = "<img src='img/evolution2.png' alt='旧人'/>";
    evolutionEnjin.appendChild(lev2);
    console.log("lev2");
  }

  if (enjinNum >= 7) {
    const lev3 = document.createElement("div");
    lev3.innerHTML = "<img src='img/evolution3.png' alt='新人' />";
    evolutionEnjin.appendChild(lev3);
    console.log("lev3");
  }

  if (enjinNum >= 9) {
    const lev4 = document.createElement("div");
    lev4.innerHTML = "<img src='img/evolution4.png' alt='現代人' />";
    evolutionEnjin.appendChild(lev4);
    console.log("lev4");
  }
});

reset.addEventListener("click", function () {
  evolutionEnjin.innerHTML = "";
});
