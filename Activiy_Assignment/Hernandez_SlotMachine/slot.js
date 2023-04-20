const icons = ["a", "b", "c", "d", "e"];
const winnings = {
"aaa": 2,
"bbb": 5,
"ccc": 10,
"ddd": 20,
"eee": 50
};
let coins = 20;
    function getRandomIcon() {
    return icons[Math.floor(Math.random() * icons.length)];
    }

    function spin() {

      const bet = Number(document.getElementById("bet").value);

      if (bet > coins) {
        document.getElementById("result").textContent = "Ubos Na Coins Mo Aba!";
        return;
      }

      coins -= bet;
      document.getElementById("coins").textContent = coins;

      const slot1 = getRandomIcon();
      const slot2 = getRandomIcon();
      const slot3 = getRandomIcon();

      document.getElementById("slot1").textContent = slot1;
      document.getElementById("slot2").textContent = slot2;
      document.getElementById("slot3").textContent = slot3;

      const combination = slot1 + slot2 + slot3;
      if (winnings.hasOwnProperty(combination)) {
        const winMultiplier = winnings[combination];
        const winAmount = bet * winMultiplier;
        coins += winAmount;
        document.getElementById("coins").textContent = coins;
        document.getElementById("result").textContent = "You won " + winAmount + " coins!";
      } else {
        document.getElementById("result").textContent = "You lost!";
      }
    }
