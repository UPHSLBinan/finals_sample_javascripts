// Array of icons
const icons = ['7.png', 'bell.png', 'cherry.png', 'diamond.png', 'watermelon.png'];

// Starting coins
let coins = 20;

// Get random icon
function getRandomIcon() {
    return icons[Math.floor(Math.random() * icons.length)];
}

// Spin the slots
function spin() {
    if (coins < 1) {
        document.getElementById('message').textContent = "You're out of coins! To play one again, click Reload.";
        return;
    }
	
    coins--;

    const slot1 = document.getElementById('slot1');
    const slot2 = document.getElementById('slot2');
    const slot3 = document.getElementById('slot3');

    slot1.style.backgroundImage = `url(${getRandomIcon()})`;
    slot2.style.backgroundImage = `url(${getRandomIcon()})`;
    slot3.style.backgroundImage = `url(${getRandomIcon()})`;

    if (slot1.style.backgroundImage === slot2.style.backgroundImage && slot2.style.backgroundImage === slot3.style.backgroundImage) {
        document.getElementById('message').textContent = "You Win!";
        coins += 10; // Add 10 coins for winning
    } else {
        document.getElementById('message').textContent = "You Lose!";
    }

    document.getElementById('coins').textContent = coins;
}

// Bet function
function bet() {
    const betAmount = parseInt(prompt("Enter your bet amount (1-10):"));

    if (isNaN(betAmount) || betAmount < 1 || betAmount > 10) {
        document.getElementById('message').textContent = "Invalid bet amount!";
        return;
    }

    if (betAmount > coins) {
        document.getElementById('message').textContent = "Not enough coins to bet! Please click Reload to play again.";
        return;
    }

    coins -= betAmount;

    document.getElementById('coins').textContent = coins;
}

function reload() {
window.location.reload();
}
