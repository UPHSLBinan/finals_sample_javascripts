const symbols = ["🍎", "🍊", "🍇", "🍓", "🍒"];
const winnings = [0, 5, 10, 20, 50, 100];

let coins = 20;
const coinsDisplay = document.getElementById("coins");
coinsDisplay.innerHTML = coins;

const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");

const betInput = document.getElementById("bet");

const spinButton = document.getElementById("spinButton");
spinButton.addEventListener("click", spin);

function spin() {
  const bet = parseInt(betInput.value);
  if (bet > coins) {
    alert("Not enough coins.");
    return;
  }
  coins -= bet;
  coinsDisplay.innerHTML = coins;
  const symbol1 = getRandomSymbol();
  const symbol2 = getRandomSymbol();
  const symbol3 = getRandomSymbol();
  slot1.innerHTML = symbol1;
  slot2.innerHTML = symbol2;
  slot3.innerHTML = symbol3;
  const winAmount = getWinAmount(symbol1, symbol2, symbol3);
  if (winAmount > 0) {
    const winningsCoins = bet * winAmount;
    coins += winningsCoins;
    coinsDisplay.innerHTML = coins;
    alert(`You won ${winningsCoins} coins!`);
  } else {
    alert("Try again.");
  }
}

function getRandomSymbol() {
  const index = Math.floor(Math.random() * symbols.length);
  return symbols[index];
}

function getWinAmount(symbol1, symbol2, symbol3) {
  if (symbol1 === symbol2 && symbol2 === symbol3) {
    switch (symbol1) {
      case symbols[0]:
        return 5;
      case symbols[1]:
        return 10;
      case symbols[2]:
        return 20;
      case symbols[3]:
        return 50;
      case symbols[4]:
        return 100;
    }
  }
  return 0;
}
