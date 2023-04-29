
const icons = ["🍎", "🍊", "🍇", "🍒", "🔔"];


const winnings = {
  "🍎🍎🍎": 2,
  "🍊🍊🍊": 3,
  "🍇🍇🍇": 4,
  "🍒🍒🍒": 5,
  "🔔🔔🔔": 10,
};


const coinsDisplay = document.getElementById("coins");
const betInput = document.getElementById("bet");
const spinButton = document.getElementById("spin");
const slots = document.querySelectorAll(".slot");
const resultDisplay = document.getElementById("result");


let coins = 20;


function spin() {
  
  const bet = parseInt(betInput.value);
  if (isNaN(bet) || bet < 1 || bet > 10) {
    resultDisplay.textContent = "Invalid bet!";
    return;
  }
  if (bet > coins) {
    resultDisplay.textContent = "Not enough coins!";
    return;
  }

 
  coins -= bet;
  coinsDisplay.textContent = coins;

  
  const values = [];
  for (let i = 0; i < 3; i++) {
    const value = icons[Math.floor(Math.random() * icons.length)];
    values.push(value);
    slots[i].textContent = value;
  }

  
  const combination = values.join("");
  if (winnings.hasOwnProperty(combination)) {
    const multiplier = winnings[combination];
    coins += bet * multiplier;
    coinsDisplay.textContent = coins;
    resultDisplay.textContent = `You won ${multiplier}x!`;
  } else {
    resultDisplay.textContent = "Try again!";
  }
}


spinButton.addEventListener("click", spin);

function spin() {
  
  const bet = parseInt(betInput.value);
  if (isNaN(bet) || bet < 1 || bet > 10) {
    resultDisplay.textContent = "Invalid bet!";
    return;
  }
  if (bet > coins) {
    resultDisplay.textContent = "Not enough coins!";
    return;
  }

  
  coins -= bet;
  coinsDisplay.textContent = coins;

  
  let spinCount = 0;
  const spinInterval = setInterval(() => {
    spinCount++;
    for (let i = 0; i < 3; i++) {
      const value = icons[Math.floor(Math.random() * icons.length)];
      slots[i].textContent = value;
    }
    if (spinCount >= 10) {
      clearInterval(spinInterval);

    
      const values = slots.map((slot) => slot.textContent);
      const combination = values.join("");
      if (winnings.hasOwnProperty(combination)) {
        const multiplier = winnings[combination];
        coins += bet * multiplier;
        coinsDisplay.textContent = coins;
        resultDisplay.textContent = `You won ${multiplier}x!`;
      } else {
        resultDisplay.textContent = "Try again!";
      }
    }
  }, 100);
}

const resetButton = document.getElementById("reset");


function reset() {
  coins = 20;
  coinsDisplay.textContent = coins;
  resultDisplay.textContent = "";
  betInput.value = "";
  for (let i = 0; i < 3; i++) {
    slots[i].textContent = icons[Math.floor(Math.random() * icons.length)];
  }
}


resetButton.addEventListener("click", reset);


