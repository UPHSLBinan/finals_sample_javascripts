var doing = false;
var spin = [new Audio("audio/spin.mp3"), new Audio("audio/spin.mp3"), new Audio("audio/spin.mp3"), new Audio("audio/spin.mp3"), new Audio("audio/spin.mp3"), new Audio("audio/spin.mp3"), new Audio("audio/spin.mp3")];
var coin = [new Audio("audio/coin.mp3"), new Audio("audio/coin.mp3"), new Audio("audio/coin.mp3")];
var win = new Audio("audio/win.mp3");
var lose = new Audio("audio/lose.mp3");
var audio = false;
let message = document.getElementById("status")
var info = true;

let coins = parseInt(document.getElementById("coins").value);
var wins = parseInt(document.getElementById("wins").value);

var payout = document.getElementById("payout");


function doSlot() {
	if (doing) { return null; }
	
	let bet = document.getElementById("bet").value;
	
	if (bet <= 0 || bet == "" ) {
		message.innerHTML = "Input bet.";
	} else if(coins == 0) {
		message.innerHTML = "No more coins.";
	} else {
		coins -= bet;
		document.getElementById("coins").value = coins;
		
		doing = true;
		var numChanges = randomInt(1, 4) * 7
		var numberSlot1 = numChanges + randomInt(1, 7)
		var numberSlot2 = numChanges + 2 * 7 + randomInt(1, 7)
		var numberSlot3 = numChanges + 4 * 7 + randomInt(1, 7)
	
		var i1 = 0;
		var i2 = 0;
		var i3 = 0;
		var sound = 0
		message.innerHTML = "Spinning!"
		slot1 = setInterval(spin1, 50);
		slot2 = setInterval(spin2, 50);
		slot3 = setInterval(spin3, 50);
	
		function spin1() {
			i1++;
			if (i1 >= numberSlot1) {
				coin[0].play()
				clearInterval(slot1);
				return null;
			}
			slotTile = document.getElementById("slot1");
			if (slotTile.className == "a5") {
				slotTile.className = "a0";
			}
			slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
		}
		function spin2() {
			i2++;
			if (i2 >= numberSlot2) {
				coin[1].play()
				clearInterval(slot2);
				return null;
			}
			slotTile = document.getElementById("slot2");
			if (slotTile.className == "a5") {
				slotTile.className = "a0";
			}
			slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
		}
		function spin3() {
			i3++;
			if (i3 >= numberSlot3) {
				coin[2].play()
				clearInterval(slot3);
				testWin();
				return null;
			}
			slotTile = document.getElementById("slot3");
			if (slotTile.className == "a5") {
				slotTile.className = "a0";
			}
			sound++;
			if (sound == spin.length) {
				sound = 0;
			}
			spin[sound].play();
			slotTile.className = "a" + (parseInt(slotTile.className.substring(1)) + 1)
		}
	}
}

function doPayout() {
	document.getElementsByClassName('payout')[0].click();
	if (wins == 0) {
		message.innerHTML = "No wins.";
	} else {
		coins.innerHTML = document.getElementById("coins").value + document.getElementById("wins").value;
		wins.innerHTML = 0;
	}
}

function testWin() {
  var slot1 = document.getElementById("slot1").className
  var slot2 = document.getElementById("slot2").className
	var slot3 = document.getElementById("slot3").className

	let bet = document.getElementById("bet").value;
	let result = 0;

	if (slot1 == slot2 && slot2 == slot3) {
		if (slot1 == "a1" && slot2 == "a1" && slot3 == "a1") {
			document.getElementById('wins').innerHTML = bet * 2;
			coins = coins + parseInt(document.getElementById('wins').innerHTML);
			document.getElementById("coins").value = coins;
		} else if (slot1 == "a2" && slot2 == "a2" && slot3 == "a2") {
			document.getElementById('wins').innerHTML = bet * 4;
			coins = coins + parseInt(document.getElementById('wins').innerHTML);
			document.getElementById("coins").value = coins;
		} else if (slot1 == "a3" && slot2 == "a3" && slot3 == "a3") {
			document.getElementById('wins').innerHTML = bet * 6;
			coins = coins + parseInt(document.getElementById('wins').innerHTML);
			document.getElementById("coins").value = coins;
		} else if (slot1 == "a4" && slot2 == "a4" && slot3 == "a4") {
			document.getElementById('wins').innerHTML = bet * 8;
			coins = coins + parseInt(document.getElementById('wins').innerHTML);
			document.getElementById("coins").value = coins;
		} else if (slot1 == "a5" && slot2 == "a5" && slot3 == "a5") {
			document.getElementById('wins').innerHTML = bet * 10;
			coins = coins + parseInt(document.getElementById('wins').innerHTML);
			document.getElementById("coins").value = coins;
		}
    message.innerHTML = "YOU WIN!";
		win.play();
	}else{
		message.innerHTML = "YOU LOSE!"
		lose.play();
	}
  doing = false;
}

function toggleAudio() {
  if (!audio) {
    audio = !audio;
    for (var x of spin) {
      x.volume = 0.5;
    }
    for (var x of coin) {
      x.volume = 0.5;
    }
    win.volume = 1.0;
    lose.volume = 1.0;
  } else {
    audio = !audio;
    for (var x of spin) {
      x.volume = 0;
    }
    for (var x of coin) {
      x.volume = 0;
    }
    win.volume = 0;
    lose.volume = 0;
  }
}


function randomInt(min, max){
	return Math.floor((Math.random() * (max-min+1)) + min);
}