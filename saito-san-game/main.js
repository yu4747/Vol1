const setBtn = function () {
  const hoge = Math.random() * 10;
  console.log("hoge");
  // hoge < 5 ? alert("斎藤さんだぞ") : alert("ぺっぺっぺー");
  if (hoge < 5) {
    alert("ぺっぺっぺー");
  } else {
    alert("斎藤さんだぞ？");
  }
};
setBtn();
