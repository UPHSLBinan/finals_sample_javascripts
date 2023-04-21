const icons = ['1', '2', '3', '4', '5'];

const winnings = [
  { symbols: ['1', '1', '1'], payout: 100 },
  { symbols: ['2', '2', '2'], payout: 50 },
  { symbols: ['3', '3', '3'], payout: 25 },
  { symbols: ['4', '4', '4'], payout: 10 },
  { symbols: ['5', '5', '5'], payout: 5 },
];

const slots = document.querySelectorAll('.slot');

const spinButton = document.querySelector('#spin-button');

const result2 = document.querySelector('#result2');

function randomIcon() {
  return icons[Math.floor(Math.random() * icons.length)];
}

function isWinning(symbols) {
  return winnings.some((winning) => winning.symbols.every((symbol, i) => symbol === symbols[i]));
}

function spin() {
  const symbols = Array.from({ length: 3 }, randomIcon);

  symbols.forEach((symbol, i) => {
    slots[i].textContent = symbol;
  });

  const payout = isWinning(symbols) ? winnings.find((winning) => winning.symbols.every((symbol, i) => symbol === symbols[i])).payout : 0;

  result2.textContent = payout > 0 ? `You won ${payout} percent of the grade!` : `Sorry, try again.`;
}

spinButton.addEventListener('click', spin);