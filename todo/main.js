const add = document.getElementById("addBtn");
const list = document.getElementById("taskswrap");

//let newTask = "";
//list.innerHTML = "";
//form.innerHTML = "";
add.addEventListener("click", function () {
  let inputBox = document.getElementById("todoBox").value;
  const complete = document.createElement("button");
  const li = document.createElement("li");
  const span = document.createElement("span");
  list.appendChild(li);
  li.appendChild(span);
  li.appendChild(complete);
  span.textContent = inputBox;
  complete.textContent = "完了";
  if (1 > inputBox.length) {
    alert("空欄です");
    list.removeChild(li);
  }
  let taskBox = document.getElementById("todoBox");
  taskBox.value = "";
  complete.addEventListener("click", function () {
    list.removeChild(li);
  });
});

document.getElementById("title1").innerText = "task";
