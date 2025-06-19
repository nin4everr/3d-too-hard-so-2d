let cookieCount = 0;
let cursorCount = 0;

const cookie = document.getElementById("cookie");
const cookieCountDisplay = document.getElementById("cookie-count");
const upgradeButton = document.getElementById("upgrade-button");

cookie.onclick = () => {
  cookieCount++;
  updateDisplay();
};

upgradeButton.onclick = () => {
  if (cookieCount >= 10) {
    cookieCount -= 10;
    cursorCount++;
    setInterval(() => {
      cookieCount += cursorCount;
      updateDisplay();
    }, 1000);
  }
};

function updateDisplay() {
  cookieCountDisplay.textContent = cookieCount;
}
