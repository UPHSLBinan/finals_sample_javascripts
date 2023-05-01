var coins = 20;
var bet = 1;

function spin() {
    if (coins < bet) {
        alert("You don't have enough coins to make this bet.");
        return;
    }
    coins -= bet;
    document.getElementById("coins").innerHTML = coins;
    var slots = [];
    for (var i = 0; i < 3; i++) {
        slots[i] = Math.floor(Math.random() * 5) + 1;
    }
    document.getElementById("slot1").innerHTML = slots[0];
    document.getElementById("slot2").innerHTML = slots[1];
    document.getElementById("slot3").innerHTML = slots[2];
    if (slots[0] == slots[1] && slots[1] == slots[2]) {
        var winnings = bet * getMultiplier(slots[0]);
        coins += winnings;
        document.getElementById("coins").innerHTML = coins;
        document.getElementById("result").innerHTML = "Congratulations! You won " + winnings + " coins.";
    } else {
        document.getElementById("result").innerHTML = "Sorry, try again.";
    }
}

function getMultiplier(slot) {
    switch (slot) {
        case 1:
            return 2;
        case 2:
            return 3;
        case 3:
            return 4;
        case 4:
            return 5;
        case 5:
            return 10;
    }
}
