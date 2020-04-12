let date1 = new Date("December 1, 1995 03:24:00");
let date2 = new Date("December 31, 1995 03:25:00");

/* setInterval(() => {
  checkSeconds();
  refresh();
}, 1000);

function refresh() {
  alarmDay.innerText = currentTime.days;
  alarmHour.innerText = currentTime.hours;
  alarmMinute.innerText = currentTime.minutes;
  alarmSecond.innerText = currentTime.seconds;
}

function checkSeconds() {
  currentTime.seconds--;

  if (currentTime.seconds <= 0) {
    if (currentTime.minutes > 0) {
      currentTime.minutes--;
      currentTime.seconds = 59;
    } else {
      if (currentTime.hours > 0) {
        currentTime.hours--;
        currentTime.minutes = 59;
        currentTime.seconds = 59;
      } else {
        if (currentTime.days > 0) {
          currentTime.days--;
          currentTime.hours = 23;
          currentTime.minutes = 59;
          currentTime.seconds = 59;
        } else {
          console.log("finished!");
          currentTime.seconds = 0;
        }
      }
    }
  }
  return;
} */
