let intervalId;
let minutes = 25;
let seconds = 0;

const timerElement = document.getElementById("timer");

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function resetTimer() {
  clearInterval(intervalId);
  minutes = 25;
  seconds = 0;
  updateTimerDisplay();
}

function updateTimer() {
  if (minutes === 0 && seconds === 0) {
    clearInterval(intervalId);
    return;
  }

  if (seconds === 0) {
    minutes--;
    seconds = 59;
  } else {
    seconds--;
  }

  updateTimerDisplay();
}

function updateTimerDisplay() {
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(seconds).padStart(2, "0");
  timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
}
