// Get the elements
const betInput = document.getElementById('bet');
const coinsDisplay = document.getElementById('coins');
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');

// Define the icons
const icons = ['❤️', '🍇', '🍊', '🍋', '🍒'];

// Define the starting coins
let coins = 20;
coinsDisplay.innerText = coins;

// Spin function
function spin() {
  // Check if the bet is valid
  const bet = parseInt(betInput.value);
  if (bet > coins || bet < 1) {
    alert('Invalid bet!');
    return;
  }

  // Update the coins
  coins -= bet;
  coinsDisplay.innerText = coins;

  // Generate the slot values
  const values = [];
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * icons.length);
    const icon = icons[randomIndex];
    values.push(icon);
  }

  // Set the slot values
  slot1.innerText = values[0];
  slot2.innerText = values[1];
  slot3.innerText = values[2];

  // Check if the player wins
  if (values[0] === values[1] && values[1] === values[2]) {
    const winnings = bet * 5;
    coins += winnings;
    coinsDisplay.innerText = coins;
    alert(`You won ${winnings} coins!`);
  } else {
    alert('Try again!');
  }
}