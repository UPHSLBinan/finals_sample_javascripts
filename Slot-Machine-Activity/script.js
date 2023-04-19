const icons = ['✊', '✌️', '🤚', '👍', '👎'];
let coins = 20;
let bet = 1;

function spin() {
	
	coins -= bet;
	document.getElementById("coins").innerHTML = coins;
	
	let one = Math.floor(Math.random() * 5);
	let two = Math.floor(Math.random() * 5);
	let three = Math.floor(Math.random() * 5);
	
	document.getElementById("one").innerHTML = icons[one];
	document.getElementById("two").innerHTML = icons[two];
	document.getElementById("three").innerHTML = icons[three];

	
	if (one === two && two === three) 
	{
		coins += bet * 5;
		document.getElementById("coins").innerHTML = coins;
		document.getElementById("result").innerHTML = `You won ${bet * 5} coins!`;
		document.getElementById("result").classList.remove("alert-danger");
		document.getElementById("result").classList.add("alert-success");
	} 
	else if (one === two || two === three || one === three) 
	{
		coins += bet * 2;
		document.getElementById("coins").innerHTML = coins;
		document.getElementById("result").innerHTML = `You won ${bet * 2} coins!`;
		document.getElementById("result").classList.remove("alert-danger");
		document.getElementById("result").classList.add("alert-success");
	} 
	else 
	{		
		document.getElementById("result").innerHTML = `Sorry, try again!`;
		document.getElementById("result").classList.remove("alert-success");
		document.getElementById("result").classList.add("alert-danger");
	}
	document.getElementById("result").style.display = "block";
	document.getElementById("bet").innerHTML = 1;
	document.getElementById("bet-slider").value = 1;
}

function updateBet() 
{	
	bet = document.getElementById("bet-slider").value;
	document.getElementById("bet").innerHTML = bet;
}
