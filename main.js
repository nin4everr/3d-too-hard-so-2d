let pressCount = 0;
let cursorCount = 0;

const button = document.getElementById("button");
const pressCountDisplay = document.getElementById("press-count");
const upgradeButton = document.getElementById("upgrade-button");

button.onclick = () => {
  pressCount++;
  updateDisplay();
};

upgradeButton.onclick = () => {
  if (pressCount >= 10) {
    pressCount -= 10;
    cursorCount++;
    setInterval(() => {
      pressCount += cursorCount;
      updateDisplay();
    }, 1000);
  }
};

function updateDisplay() {
  pressCountDisplay.textContent = pressCount;
}
