// define icons and winning combinations
const icons = ["#", "$", "%", "&", "@"];
const wins = [
  {combo: ["#", "#", "#"], payout: 2},
  {combo: ["$", "$", "$"], payout: 5},
  {combo: ["%", "%", "%"], payout: 10},
  {combo: ["&", "&", "&"], payout: 20},
  {combo: ["@", "@", "@"], payout: 50}
];

// get DOM elements
const coinsEl = document.getElementById("coins");
const betEl = document.getElementById("bet");
const slotsEl = document.getElementById("slots");
const slot1El = document.getElementById("slot1");
const slot2El = document.getElementById("slot2");
const slot3El = document.getElementById("slot3");
const resultEl = document.getElementById("result");

// initialize variables
let coins = 20;
let bet = 1;

// function to spin the slots
function spin() {
  // check if bet is valid
  if (bet > coins) {
    resultEl.textContent = "Not enough coins!";
    return;
  }
  
  // update coins and DOM element
  coins -= bet;
  coinsEl.textContent = coins;
  
  // spin the slots
  const slot1 = Math.floor(Math.random() * icons.length);
  const slot2 = Math.floor(Math.random() * icons.length);
  const slot3 = Math.floor(Math.random() * icons.length);
  
  // update the slot DOM elements
  slot1El.textContent = icons[slot1];
  slot2El.textContent = icons[slot2];
  slot3El.textContent = icons[slot3];
  
  // check for winning combinations
  for (let i = 0; i < wins.length; i++) {
    if (icons[slot1] === wins[i].combo[0] &&
        icons[slot2] === wins[i].combo[1] &&
        icons[slot3] === wins[i].combo[2]) {
      const payout = bet * wins[i].payout;
      coins += payout;
      coinsEl.textContent = coins;
      resultEl.textContent = "You won " + payout + " coins!";
      return;
    }
  }
  
  // no winning combination
  resultEl.textContent = "You didn't win!";
}

// update bet variable on input change
betEl.addEventListener("change", function() {
  bet = parseInt(betEl.value);
});
