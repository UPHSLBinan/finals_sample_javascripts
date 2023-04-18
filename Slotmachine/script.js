
const icons = ["&#9824;", "&#9830;", "&#9827;", "&#9829;", "&#9819;"];
const winnings = {"&#9824;&#9824;&#9824;": 2, "&#9830;&#9830;&#9830;": 3, "&#9827;&#9827;&#9827;": 4, "&#9829;&#9829;&#9829;": 5, "&#9819;&#9819;&#9819;": 10};

let coins = 20;
let betAmount = 1;

function spin() {

	if (coins >= betAmount && betAmount > 0) {

		coins -= betAmount;
		document.getElementById("coins").innerHTML = "Coins: " + coins;

		let slot1Value = spinSlot("slot1");
		let slot2Value = spinSlot("slot2");
		let slot3Value = spinSlot("slot3");

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

function spinSlot(slotId) {
	let slotValue = icons[Math.floor(Math.random() * icons.length)];
	document.getElementById(slotId).innerHTML = slotValue;
	return slotValue;
}

function checkWin(value1, value2, value3) {
	let combo = value1 + value2 + value3;
	if (winnings[combo]) {
		return betAmount * winnings[combo];
	} else {
		return 0;
	}
}

const blackStyle = "color: #000; background-color: #fff; border: 2px solid #000;";
const whiteStyle = "color: #fff; background-color: #000; border: 2px solid #fff;";
const redStyle = "color: #fff; background-color: #f00; border: 2px solid #000;";

document.getElementById("slot1").style = blackStyle;
document.getElementById("slot2").style = whiteStyle;
document.getElementById("slot3").style = redStyle;