const nowTeller = document.getElementById("nowpassteller");
let Passwordvalue = "summertime-renda";
nowTeller.textContent = `現在のパスワードは${Passwordvalue}`;

const change = document.getElementById("changeBtn");
change.addEventListener("click", function () {
  const nowpass = document.getElementById("now-password").value;
  const newpass = document.getElementById("new-password").value;
  console.log(newpass);
  if (Passwordvalue === nowpass) {
    if (Passwordvalue !== newpass) {
      if (8 <= newpass.length) {
        Passwordvalue = newpass;
        nowTeller.textContent = "現在のパスワードは" + Passwordvalue;
        alert("新しいパスワードは" + Passwordvalue + "です");
      } else {
        alert("8文字以上にしてください");
      }
    } else {
      alert("同じパスワードは使えません");
    }
  } else {
    alert("パスワードが間違っています");
  }
});
