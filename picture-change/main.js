const data = [
  { img: "img/slide1.png", text: "春へ" },
  { img: "img/slide2.png", text: "夏へ" },
  { img: "img/slide3.png", text: "秋へ" },
  { img: "img/slide4.png", text: "冬へ" },
];
const image4 = document.getElementById("img4");
let imgNum = 0;
const change = document.getElementById("imgChange");
image4.setAttribute("src", data[imgNum].img);

change.addEventListener("click", function () {
  if (imgNum === 3) {
    imgNum = 0;
  } else {
    imgNum += 1;
  }
  image4.setAttribute("src", data[imgNum].img);
  change.textContent = data[imgNum].text;
});
