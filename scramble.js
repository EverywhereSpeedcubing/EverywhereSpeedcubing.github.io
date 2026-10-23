const scrambleDisplay = document.getElementById("scramble");
const scrambleButton = document.getElementById("scramblebutton");

let positionMemory = "memory";
let lastPosition = "last";

function makeMove() {
  const faces = ["L", "R", "U", "D", "F", "B"];
  let position = Math.floor(Math.random() * 6);
  const endings = ["", "'", "2"];
  let endingsPosition = Math.floor(Math.random() * 3);
  positionMemory = position;
  while (position === lastPosition) {
    position = Math.floor(Math.random() * 6);
    positionMemory = position;
  }
  return faces[position] + endings[endingsPosition];
}

function newScramble() {
  let scramble = "";
  for (let i = 0; i < 20; i++) {
    scramble += makeMove() + " ";
    lastPosition = positionMemory;
  }
  scrambleDisplay.textContent = scramble;
}

newScramble();

scrambleButton.addEventListener("click", newScramble);