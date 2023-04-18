// Define the available icons and winning combinations
const icons = ["&#9824;", "&#9830;", "&#9827;", "&#9829;", "&#9819;"];
const winnings = {"&#9824;&#9824;&#9824;": 2, "&#9830;&#9830;&#9830;": 3, "&#9827;&#9827;&#9827;": 4, "&#9829;&#9829;&#9829;": 5, "&#9819;&#9819;&#9819;": 10};

// Set the initial values for coins and bet amount
let coins = 20;
let betAmount = 1;

// Define a function to spin the slot machine
function spin() {
	// Only allow spin if user has enough coins and bet amount is valid
	if (coins >= betAmount && betAmount > 0) {
		// Deduct bet amount from coins
		coins -= betAmount;
		document.getElementById("coins").innerHTML = "Coins: " + coins;
		// Spin each slot
		let slot1Value = spinSlot("slot1");
		let slot2Value = spinSlot("slot2");
		let slot3Value = spinSlot("slot3");
		// Check for a win and display message
		let winAmount = checkWin(slot1Value, slot2Value, slot3Value);
		if (winAmount > 0) {
			coins += winAmount;
			document.getElementById("coins").innerHTML = "Coins: " + coins;
			document.getElementById("message").innerHTML = "You won " + winAmount + " coins!";
		} else {
			document.getElementById("message").innerHTML = "Try again!";
		}
	} else {
		document.getElementById("message").innerHTML = "Invalid bet amount or not enough coins.";
	}
}

// Define a function to spin a single slot
function spinSlot(slotId) {
	let slotValue = icons[Math.floor(Math.random() * icons.length)];
	document.getElementById(slotId).innerHTML = slotValue;
	return slotValue;
}

// Define a function to check for a win
function checkWin(value1, value2, value3) {
	let combo = value1 + value2 + value3;
	if (winnings[combo]) {
		return betAmount * winnings[combo];
	} else {
		return 0;
	}
}

// Add CSS styles for black, white, and red designs
const blackStyle = "color: #000; background-color: #fff; border: 2px solid #000;";
const whiteStyle = "color: #fff; background-color: #000; border: 2px solid #fff;";
const redStyle = "color: #fff; background-color: #f00; border: 2px solid #000;";

document.getElementById("slot1").style = blackStyle;
document.getElementById("slot2").style = whiteStyle;
document.getElementById("slot3").style = redStyle;