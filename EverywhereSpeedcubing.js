const timer = document.getElementById("timer");
const timerbutton = document.getElementById("timerbutton");

let second = 0;
let timestorage = null;

timerbutton.addEventListener("click", function () {
    if (timestorage === null) {
        timestorage = setInterval(function () {
            second = second + 1;
            timer.textContent = second;
        }, 1000); timerbutton.textContent = "Stop";

    }
    else {
        clearInterval(timestorage);
        timestorage = null;
        second = 0;
        timerbutton.textContent = "Start";
    }
}
);