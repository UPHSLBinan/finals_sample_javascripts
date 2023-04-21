// Define the icons
const icons = ["\u2665", "\u270C", "\u260E", "\u2708", "\u2726"];

// Define the winnings
const winnings = {
  "\u2665\u2665\u2665": 2,
  "\u270C\u270C\u270C": 5,
  "\u260E\u260E\u260E": 10,
  "\u2708\u2708\u2708": 20,
  "\u2726\u2726\u2726": 50,
};

// Get references to the slots and the coins display
const slot1 = document.getElementById("slot1");
const slot2 = document.getElementById("slot2");
const slot3 = document.getElementById("slot3");
const coinsDisplay = document.getElementById("coins");

// Set the initial coins value
let coins = 20;

// Function to spin the slots
function spin() {
  // Get the bet amount
  const bet = parseInt(document.getElementById("bet").value);

  // Make sure the bet is valid
  if (bet > coins || bet < 1) {
    alert("Invalid bet amount!");
    return;
  }

  // Decrement the coins by the bet amount
  coins -= bet;
  coinsDisplay.innerText = coins;

  // Generate the slot values
  const slotValues = [icons[Math.floor(Math.random() * icons.length)], icons[Math.floor(Math.random() * icons.length)], icons[Math.floor(Math.random() * icons.length)]];

  // Update the slot values
  slot1.innerText = slotValues[0];
  slot2.innerText = slotValues[1];
  slot3.innerText = slotValues[2];

  // Check for winnings
  const winningCombo = slotValues.join("");
  if (winningCombo in winnings) {
    const winningsMultiplier = winnings[winningCombo];
    const winningsAmount = bet * winningsMultiplier;
    coins += winningsAmount;
    coinsDisplay.innerText = coins;
    alert(`You won ${winningsMultiplier}x your bet of ${bet} coins, for a total of ${winningsAmount} coins!`);
  }
}