const solveTime = document.getElementById("solveTime");
const bestTime = document.getElementById("bestTime");
const meanTime = document.getElementById("meanTime");
const Ao5Time = document.getElementById("Ao5Time");
const Ao12Time = document.getElementById("Ao12Time");
const Ao50Time = document.getElementById("Ao50Time");
const Ao100Time = document.getElementById("Ao100Time");

let timeReceiver = 0;
let timeBuffer = timeReceiver;
let timeOriginal = [];
let timeReadable = [];

// Session Time Manager.
function timesManager() {
  timeOriginal.push(timeReceiver);
  timeBuffer = timeReceiver;
  timeConverter();
  timeFormat();
  timeDisplay();
  statsBest();
  statsMean();
  statsAo5();
  statsAo12();
  statsAo50();
  statsAo100();
}

//Session Time Converter.
function timeConverter() {
  let minute = Math.floor(timeBuffer / 60000);
  let second = Math.floor(timeBuffer / 1000) % 60;
  let hundredth = Math.floor((timeBuffer % 1000) / 10);
  return { minute, second, hundredth };
}

//Session Time Format.
function timeFormat() {
  let { minute, second, hundredth } = timeConverter();
  if (minute >= 1) {
    timeBuffer =
      String(minute).padStart(2) +
      ":" +
      String(second).padStart(2, 0) +
      "." +
      String(hundredth).padStart(2, 0);
  } else {
    timeBuffer =
      String(second).padStart(2) + "." + String(hundredth).padStart(2, 0);
  }
}

//Session Time Display.
function timeDisplay() {
  timeReadable.push(timeBuffer);
  solveTime.textContent = timeReadable.join(" ");
}

//Session Best Time Calculator.
let best = 0;
function statsBest() {
  let lowest = Math.min(...timeOriginal);
  timeBuffer = lowest;
  timeFormat();
  best = timeBuffer;
  bestTime.textContent = best;
}

// Session Mean Time Calculator.
let mean = 0;
function statsMean() {
  let allSolve = 0;
  for (let i = 0; i < timeOriginal.length; i++) {
    allSolve = timeOriginal[i] + allSolve;
  }
  timeBuffer = allSolve / timeOriginal.length;
  timeFormat();
  mean = timeBuffer;
  meanTime.textContent = mean;
}

//Session Ao5 Time Calculator.
let ao5 = 0;
function statsAo5() {
  let lastFive = timeOriginal.slice(-5);
  if (lastFive.length === 5) {
    let minMax = Math.min(...lastFive) + Math.max(...lastFive);
    let allFive =
      lastFive[0] +
      lastFive[1] +
      lastFive[2] +
      lastFive[3] +
      lastFive[4] -
      minMax;
    timeBuffer = allFive / 3;
    timeFormat();
    ao5 = timeBuffer;
    Ao5Time.textContent = ao5;
  }
}

//Session Ao12 Time Calculator.
let ao12 = 0;
function statsAo12() {
  let lastTwelve = timeOriginal.slice(-12);
  if (lastTwelve.length === 12) {
    let minMax = Math.min(...lastTwelve) + Math.max(...lastTwelve);
    let allTwelve =
      lastTwelve[0] +
      lastTwelve[1] +
      lastTwelve[2] +
      lastTwelve[3] +
      lastTwelve[4] +
      lastTwelve[5] +
      lastTwelve[6] +
      lastTwelve[7] +
      lastTwelve[8] +
      lastTwelve[9] +
      lastTwelve[10] +
      lastTwelve[11] -
      minMax;
    timeBuffer = allTwelve / 10;
    timeFormat();
    ao12 = timeBuffer;
    Ao12Time.textContent = ao12;
  }
}

//Session Ao50 Time Calculator.
let Ao50 = 0;
function statsAo50() {
  let lastFifty = timeOriginal.slice(-50);
  if (lastFifty.length === 50) {
    let lastFiftySort = [...lastFifty].sort((a, b) => a - b);
    let min = lastFiftySort.slice(0, 3);
    let minTotal = min[0] + min[1] + min[2];
    let max = lastFiftySort.slice(-3);
    let maxTotal = max[0] + max[1] + max[2];
    let minMax = minTotal + maxTotal;
    let allFifty = 0;
    for (let i = 0; i <= 49; i++) {
      allFifty = lastFifty[i] + allFifty;
    }
    timeBuffer = (allFifty - minMax) / 44;
    timeFormat();
    Ao50 = timeBuffer;
    Ao50Time.textContent = Ao50;
  }
}

//Session Ao100 Time Calculator.
let Ao100 = 0;
function statsAo100() {
  let lastOneHundred = timeOriginal.slice(-100);
  if (lastOneHundred.length === 100) {
    let lastOneHundredSort = [...lastOneHundred].sort((a, b) => a - b);
    let min = lastOneHundredSort.slice(0, 5);
    let minTotal = min[0] + min[1] + min[2] + min[3] + min[4];
    let max = lastOneHundredSort.slice(-5);
    let maxTotal = max[0] + max[1] + max[2] + max[3] + max[4];
    let minMax = minTotal + maxTotal;
    let allOneHundred = 0;
    for (let i = 0; i <= 99; i++) {
      allOneHundred = lastOneHundred[i] + allOneHundred;
    }
    timeBuffer = (allOneHundred - minMax) / 90;
    timeFormat();
    Ao100 = timeBuffer;
    Ao100Time.textContent = Ao100;
  }
}