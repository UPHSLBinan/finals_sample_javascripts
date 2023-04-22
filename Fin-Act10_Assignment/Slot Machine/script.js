const SYMBOLS = ["🍒", "🍊", "🍇", "🍎", "🍓"];
const WIN_AMOUNTS = [5, 10, 15, 20, 25];

let coins = 20;

const spinButton = document.getElementById("spin");
spinButton.addEventListener("click", spin);

function spin() {
  const bet = parseInt(document.getElementById("bet").value);
  if (bet > coins) {
    setMessage("You don't have enough coins to make that bet!");
    return;
  }
  coins -= bet;
  updateCoins();
  const symbols = [];
  for (let i = 0; i < 3; i++) {
    const symbolIndex = Math.floor(Math.random() * SYMBOLS.length);
    symbols.push(SYMBOLS[symbolIndex]);
  }
  updateSlots(symbols);
  const winAmount = checkWin(symbols);
  if (winAmount > 0) {
    coins += bet * winAmount;
    updateCoins();
    setMessage(`You won ${bet * winAmount} coins!`);
  } else {
    setMessage("You didn't win anything. Try again!");
  }
}
function setMessage(message) {
  document.getElementById("message").textContent = message;
}

function updateCoins() {
  document.getElementById("coins").textContent = `Coins: ${coins}`;
}

function updateSlots(symbols) {
  const slots = document.getElementsByClassName("slot");
  for (let i = 0; i < 3; i++) {
    slots[i].firstElementChild.textContent = symbols[i];
  }
}
function addTenCoins() {
  coins += 10;
  updateCoins();
}

function addTwentyCoins() {
  coins += 20;
  updateCoins();
}

function checkWin(symbols) {
  const symbolCounts = {};
  symbols.forEach(symbol => {
    symbolCounts[symbol] = (symbolCounts[symbol] || 0) + 1;
  });
  const uniqueSymbols = Object.keys(symbolCounts).length;
  if (symbolCounts[SYMBOLS[0]] === 3) {
    return WIN_AMOUNTS[0];
  } else if (symbolCounts[SYMBOLS[1]] === 3) {
    return WIN_AMOUNTS[1];
  } else if (symbolCounts[SYMBOLS[2]] === 3) {
    return WIN_AMOUNTS[2];
  } else if (symbolCounts[SYMBOLS[3]] === 3) {
    return WIN_AMOUNTS[3];
  } else if (symbolCounts[SYMBOLS[4]] === 3) {
    return WIN_AMOUNTS[4];
  } else {
    return 0;
  }}