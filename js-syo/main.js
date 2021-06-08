window.alert("これはwindow.alert()で表示したアラートです");
alert("これはalert()で表示したアラートです");

console.log(document.doctype);
console.log(document.title);

const intro = document.getElementById("intro");
console.log(intro.textContent); //=>これは紹介文です。

const list = document.querySelector(".list");
console.log(list.children.length); //=>3

const items = document.querySelectorAll(".list li");

items.forEach((item) => {
  console.log(item.textContent);
});
