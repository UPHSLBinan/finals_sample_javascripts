//Don't forget to save as slotmachine.js for the Slot machine html

const symbols = ["🏆", "🥇", "🏅", "🏀", "🎾"];


const winningCombinations = {
  "🏆🏆🏆": 2,
  "🥇🥇🥇": 5,
  "🏅🏅🏅": 10,
  "🏀🏀🏀": 20,
  "🎾🎾🎾": 50
};


const slotEls = document.querySelectorAll('.slot');
const coinsEl = document.getElementById('coins');
const betEl = document.getElementById('betinput');
const resultEl = document.getElementById('result');
const spinBtn = document.getElementById('spinbtn');


let coins = 20;


spinBtn.addEventListener('click', spin);

function spin() {
  
  const bet = parseInt(betEl.value);

  
  if (bet < 1 || bet > 10) {
    resultEl.textContent = "Bet must be between 1 and 10.";
    return;
  }

  
  if (coins < bet) {
    resultEl.textContent = "You don't have enough coins to place that bet.";
    return;
  }

  
  coins -= bet;

  
  coinsEl.textContent = coins;

 
  const symbolsArr = [];
  for (let i = 0; i < 3; i++) {
    const symbolIndex = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[symbolIndex];
    symbolsArr.push(symbol);
    slotEls[i].textContent = symbol;
  }

  
  const combination = symbolsArr.join('');
  if (winningCombinations.hasOwnProperty(combination)) {
    const multiplier = winningCombinations[combination];
    const winnings = bet * multiplier;
    coins += winnings;
    coinsEl.textContent = coins;
    resultEl.textContent = `You won ${winnings} coins!`;
  } else {
    resultEl.textContent = "Sorry, try again.";
  }
}