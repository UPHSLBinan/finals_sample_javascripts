const symbols = [
  { symbol: '\uD83D\uDC9B', multiplier: 10 },
  { symbol: '\uD83D\uDC99', multiplier: 5 },
  { symbol: '\uD83D\uDC9A', multiplier: 3 },
  { symbol: '\u2764\uFE0F', multiplier: 2 },
  { symbol: '\uD83D\uDC94', multiplier: 1 }
];




const coinsEl = document.getElementById('coins');
const betEl = document.getElementById('bet');
const slotsEl = document.querySelector('.slots');
const slot1El = document.getElementById('slot1');
const slot2El = document.getElementById('slot2');
const slot3El = document.getElementById('slot3');
const spinBtn = document.getElementById('spin');
const resetBtn = document.getElementById('reset');
const resultEl = document.getElementById('result');


let coins = 20;


let slots = ['', '', ''];


function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}


function spin() {
  
  const bet = parseInt(betEl.value);

  
  if (coins < bet) {
    resultEl.textContent = "Not enough coins, Thankyou For Playing!";
    return;
  }
  
  coins -= bet;
  coinsEl.textContent = coins;

  
  for (let i = 0; i < slots.length; i++) {
    
    const randomSymbol = getRandomSymbol();

   
    slots[i] = randomSymbol.symbol;

    
    if (i === 0) {
      slot1El.textContent = randomSymbol.symbol;
    } else if (i === 1) {
      slot2El.textContent = randomSymbol.symbol;
    } else if (i === 2) {
      slot3El.textContent = randomSymbol.symbol;
    }
  }

  
  if (slots[0] === slots[1] && slots[1] === slots[2]) {
    
    const multiplier = symbols.find(symbol => symbol.symbol === slots[0]).multiplier;

    
    const win = bet * multiplier;
    coins += win;
    coinsEl.textContent = coins;

    
    resultEl.textContent = `You won ${win} coins!`;
  } else {
    
    resultEl.textContent = "OOPS! Try Again?";
  }
}


function reset() {
  
  coins = 20;
  coinsEl.textContent = coins;

 
  betEl.value = 1;

  
  slots = ['', '', ''];
  slot1El.textContent = '';
  slot2El.textContent = '';
  slot3El.textContent = '';

  
  resultEl.textContent = '';
}


spinBtn.addEventListener('click', spin);
resetBtn.addEventListener('click', reset);
