let stopwatch;
let isRunning = false;
let lapCounter = 1;

function startStopwatch() {
  if (!isRunning) {
    document.getElementById("timer").innerText = "00:00:00"; // Set initial timer value
    stopwatch = setInterval(updateTimer, 1000);
    isRunning = true;
    document.getElementById("startBtn").disabled = true;
    document.getElementById("pauseBtn").disabled = false;
  }
}

function pauseStopwatch() {
  clearInterval(stopwatch);
  isRunning = false;
  document.getElementById("startBtn").disabled = false;
  document.getElementById("pauseBtn").disabled = true;
}

function resetStopwatch() {
  clearInterval(stopwatch);
  isRunning = false;
  document.getElementById("timer").innerText = "00:00:00";
  lapCounter = 1;
  document.getElementById("lapList").innerHTML = "";
  document.getElementById("startBtn").disabled = false;
  document.getElementById("pauseBtn").disabled = true;
}

function updateTimer() {
  let timerElement = document.getElementById("timer");
  let time = timerElement.innerText.split(":");
  let hours = parseInt(time[0]);
  let minutes = parseInt(time[1]);
  let seconds = parseInt(time[2]);

  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  timerElement.innerText = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}
