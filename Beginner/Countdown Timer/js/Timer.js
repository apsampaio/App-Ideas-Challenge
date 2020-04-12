class Timer {
  constructor(name, start, end) {
    this.name = name;
    this.start = start;
    this.end = end;
    this.handler = null;
    this.time = this.getTime(this.start, this.end);
    this.generateNode();
    this.startCountDown();
    this.handler = null;
  }

  generateNode() {
    this.timerEl = document.createElement("div");
    this.timerEl.className = "timer";

    document.querySelector(".timer-holder").appendChild(this.timerEl);

    this.descriptionEl = document.createElement("p");
    this.descriptionEl.className = "name";
    this.descriptionEl.innerText = this.name;

    this.secEl = document.createElement("section");

    this.timerEl.appendChild(this.descriptionEl);
    this.timerEl.appendChild(this.secEl);

    this.dayEl = document.createElement("div");
    this.dayEl.className = "day";
    this.dayEl.innerHTML = `<span>0</span><p>Days</p>`;

    this.hourEl = document.createElement("div");
    this.hourEl.className = "hour";
    this.hourEl.innerHTML = `<span>0</span><p>Hours</p>`;

    this.minuteEl = document.createElement("div");
    this.minuteEl.className = "minute";
    this.minuteEl.innerHTML = `<span>0</span><p>Minutes</p>`;

    this.secondEl = document.createElement("div");
    this.secondEl.className = "second";
    this.secondEl.innerHTML = `<span>0</span><p>Seconds</p>`;

    this.secEl.appendChild(this.dayEl);
    this.secEl.appendChild(this.hourEl);
    this.secEl.appendChild(this.minuteEl);
    this.secEl.appendChild(this.secondEl);
  }

  getTime(start, end) {
    const millis = end - start;
    const time = new Date(millis);

    let seconds = time.getUTCSeconds();
    let minutes = time.getUTCMinutes();
    let hours = time.getUTCHours();
    let days = time.getUTCDate() - 1;

    return {
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days
    };
  }

  startCountDown() {
    this.handler = setInterval(() => {
      this.checkSeconds();
      this.refresh();
    }, 1000);
  }

  refresh() {
    this.dayEl.firstElementChild.innerText = this.time.days;
    this.hourEl.firstElementChild.innerText = this.time.hours;
    this.minuteEl.firstElementChild.innerText = this.time.minutes;
    this.secondEl.firstElementChild.innerText = this.time.seconds;
  }

  checkSeconds() {
    this.time.seconds--;

    if (this.time.seconds <= 0) {
      if (this.time.minutes > 0) {
        this.time.minutes--;
        this.time.seconds = 59;
      } else {
        if (this.time.hours > 0) {
          this.time.hours--;
          this.time.minutes = 59;
          this.time.seconds = 59;
        } else {
          if (this.time.days > 0) {
            this.time.days--;
            this.time.hours = 23;
            this.time.minutes = 59;
            this.time.seconds = 59;
          } else {
            console.log("finished!");
            this.time.seconds = 0;
          }
        }
      }
    }
    return;
  }
}
