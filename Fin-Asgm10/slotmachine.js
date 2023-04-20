
const icons = ["&#127822;", "&#127815;", "&#127818;", "&#127827;", "&#127820;"];

const winnings = {
    "&#127822;&#127822;&#127822;": 10,
    "&#127815;&#127815;&#127815;": 5, 
    "&#127818;&#127818;&#127818;": 4, 
    "&#127827;&#127827;&#127827;": 3,
    "&#127820;&#127820;&#127820;": 2 
  };


let coins = 20;
let betAmount = 1;


function spin() {
	
	if (coins >= betAmount && betAmount > 0) {
betAmount = parseInt(document.getElementById("betAmount").value);
		
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

