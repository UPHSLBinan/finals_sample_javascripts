var coins = 20;
    var bet = 1;
    var slots = ["🍇", "🍊", "🍒", "🍓", "🍉"];
    var winnings = {
      "🍇🍇🍇": 2,
      "🍊🍊🍊": 3,
      "🍒🍒🍒": 4,
      "🍓🍓🍓": 5,
      "🍉🍉🍉": 10
    };

    function spin() {
      if (coins < bet) {
        alert("Not enough coins!");
        return;
      }
      coins -= bet;
      document.getElementById("coins").innerHTML = coins;
      var slot1 = slots[Math.floor(Math.random() * slots.length)];
      var slot2 = slots[Math.floor(Math.random() * slots.length)];
      var slot3 = slots[Math.floor(Math.random() * slots.length)];
      document.getElementsByClassName("slot")[0].innerHTML = slot1;
      document.getElementsByClassName("slot")[1].innerHTML = slot2;
      document.getElementsByClassName("slot")[2].innerHTML = slot3;
      var result = slot1 + slot2 + slot3;
      if (winnings[result]) {
        var winAmount = bet * winnings[result];
        coins += winAmount;
        document.getElementById("coins").innerHTML = coins;
        document.getElementById("result").innerHTML = "You won " + winAmount + " coins!";
      } else {
        document.getElementById("result").innerHTML = "Try again!";
      }
    }

    function addCoins(amount) {
      coins += amount;
      document.getElementById("coins").innerHTML = coins;
    }