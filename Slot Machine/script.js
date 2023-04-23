const symbols = ["🍌", "🍄", "🥒", "🍕", "🧋"];

const prices = {
  
  "🍌🍌🍌": 2,
  "🍄🍄🍄": 5,
  "🥒🥒🥒": 10,
  "🍕🍕🍕": 20,
  "🧋🧋🧋": 40,
};

const slotAll = document.querySelectorAll('.slot');
const coinsAmount = document.getElementById('coins');
const betAmount = document.getElementById('bets');
const resultAmount = document.getElementById('result');
const spinBtn = document.getElementById('spinbtn');
const betBtn = document.getElementById('betbtn');
const betDisplayAll = document.getElementById('bet-display');

let coins = 20;

betAmount.value = 0;

betBtn.addEventListener('click', placeBet);
spinBtn.addEventListener('click', spin);

function placeBet() {
  
  const bet = prompt("Please enter your bet (1-10):");
  if (bet >= 1 && bet <= 10) {
    betAmount.value = bet;
    betDisplayAll.textContent = `Your bet: ${bet}`;
  } else {
    resultAmount.textContent = "The Choosen Bet number must be between 1 to 10.";
  }
}

function spin() {
 
  const bet = parseInt(betAmount.value);

  if (bet <= 0) {
    resultAmount.textContent = "Please place a valid bet.";
    return;
  }

  if (coins < bet) {
    resultAmount.textContent = "You don't have enough coins .";
    return;
  }

  coins -= bet;
  coinsAmount.textContent = coins;

  const symbolsAre = [];
  for (let i = 0; i < 3; i++) {
   
    const symbolIndex = Math.floor(Math.random() * symbols.length);
    const symbol = symbols[symbolIndex];
    symbolsAre.push(symbol);
    slotAll[i].textContent = symbol;
  }

  const combination = symbolsAre.join('');
  
  if (prices.hasOwnProperty(combination)) {
   
    const multiplier = prices[combination];
    const wins = bet * multiplier;
    coins += wins;
    coinsAmount.textContent = coins;
    resultAmount.textContent = `You won ${wins} coins!`;
 
  } else {
    resultAmount.textContent = "Sorry, try again.";
  }
}
