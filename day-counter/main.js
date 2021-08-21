const daycount = document.getElementById("count-p");
function clock() {
  let now = moment();
  let doraBirthday = moment("21120903", "YYYYMMDD");
  let doraBirthhour = moment("00:00");
  let day = doraBirthday.diff(moment(), "days");
  let hourB = doraBirthday.diff(moment(), "hours");
  let hour = hourB % 24;
  let minuteB = doraBirthday.diff(moment(), "minutes");
  let minute = minuteB % 60;
  let secondB = doraBirthday.diff(moment(), "seconds");
  let second = secondB % 60;

  daycount.textContent = `ドラえもんが生まれるまであと${day}日${hour}時間${minute}分${second}秒`;
}

setInterval("clock()", 1000);
