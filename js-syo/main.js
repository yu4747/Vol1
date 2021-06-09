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

const elem = document.querySelector(".list");
console.log(elem.textContent);
console.log(elem.innerHTML);
for (let i = 0; i < elem.children.length; i++) {
  console.log(elem.children[i]);
}
console.log(elem.firstElementChild);
console.log(elem.lastElementChild);
console.log(elem.parentElement);

const elem2 = document.querySelector("img");

// console.log(elem2.getAttribute("src"));
elem.setAttribute("src", "https://placehold.it/400×200");

const newItem = document.createElement("li");
newItem.textContent = "新しいアイテム";

list.appendChild(newItem);
list.removeChild(list.firstElementChild);

const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");
// const list = document.querySelector(".list");
addButton.addEventListener("click", (event) => {
  const newItem = document.createElement("li");
  newItem.textContent = "新しいアイテム";
  list.appendChild(newItem);
});
removeButton.addEventListener("click", (event) => {
  list.removeChild(list.lastElementChild);
});
