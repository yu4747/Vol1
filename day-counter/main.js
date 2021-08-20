const daycount = document.getElementById("count-p");
let now = moment();
let doraBirthday = moment("21120903", "YYYYMMDD");
let doraBirthhour = moment("00:00");
let day = doraBirthday.diff(moment(), "days");
// let hour = doraBirthhour.diff(moment(), "seconds");
// .format("YYYY年MM月DD日");

daycount.textContent = `ドラえもんが生まれるまであと${day}日`;

// let fromDate = moment();
// let toDate = moment("2112-09-03 12:00");

// let doraemon = moment().add()
