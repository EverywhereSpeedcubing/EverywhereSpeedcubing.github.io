const timerDisplay = document.getElementById("timer");
const timerButton = document.getElementById("timerbutton");

let startTime = 0;
let intervalId = null;

function timerCode() {
  timerButton.blur();
  if (intervalId === null) {
    timerDisplay.textContent = "00:00.00";
    startTime = Date.now();
    intervalId = setInterval(function () {
      let elapsedMs = Date.now() - startTime;
      let minutes = Math.floor(elapsedMs / 60000);
      let totalSeconds = Math.floor(elapsedMs / 1000);
      let seconds = totalSeconds % 60;
      let leftoverMs = elapsedMs % 1000;
      let hundredths = Math.floor(leftoverMs / 10);
      timerDisplay.textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0") +
        "." +
        String(hundredths).padStart(2, "0");
    }, 10);
    timerButton.textContent = "Stop";
  } else {
    clearInterval(intervalId);
    intervalId = null;
    timerButton.textContent = "Start";
  }
}

timerButton.addEventListener("click", timerCode);
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    timerCode();
  }
});