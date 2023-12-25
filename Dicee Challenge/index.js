// Add images
// addEventListener click on class Dice

var dice = document.querySelectorAll('.dice');

// dice.addEventListener('click', () => console.log('click'));

var isStarted = false;
var dice1;
var dice2;
var round = 0;

var player1Name = document.querySelectorAll('.dice')[0].querySelector('p').textContent;
var player2Name = document.querySelectorAll('.dice')[1].querySelector('p').textContent;

var countDice1 = 0;
var countDice2 = 0;

var buttonStart = document.querySelector('.buttonStart');

buttonStart.textContent = 'Click to Start';

// Reset The game

function resetGame() {
	console.log('----- Game Over -----');
	isStarted = false;
	countDice1 = 0;
	countDice2 = 0;
	round = 0;
	player1Paragraph.textContent = player1Paragraph.textContent;
	player2Paragraph.textContent = player2Paragraph.textContent;
	// displayResetButton();
}

const newParagraph = document.createElement('p');

const diceDiv1 = document.querySelectorAll('.dice')[0];
const player1Paragraph = diceDiv1.querySelector('p');
diceDiv1.insertBefore(newParagraph, player1Paragraph);

const diceDiv2 = document.querySelectorAll('.dice')[1];
const player2Paragraph = diceDiv2.querySelector('p');
diceDiv2.insertBefore(newParagraph, player2Paragraph);

function displayResetButton() {
	const createResetButton = document.createElement('button');
	createResetButton.classList.add('newButton');
	createResetButton.textContent = 'New Button';
	const containerGame = document.querySelector('.container');
	const titleGame = document.querySelector('.buttonStart');
	containerGame.insertBefore(createResetButton, titleGame.nextSibling);
}

// Roll the dice
function rollDice() {
	if (isStarted === false) {
		player1Paragraph.textContent = player1Name;
		player2Paragraph.textContent = player2Name;
	}
	isStarted = true;

	round++;

	dice1 = Math.floor(Math.random() * 6 + 1);
	dice2 = Math.floor(Math.random() * 6 + 1);

	console.log('------- round ' + round + ' -------');
	console.log('Dice 1 : ' + dice1);
	console.log('Dice 2 : ' + dice2);

	document.querySelectorAll('img')[0].src = './images/dice' + dice1 + '.png';
	document.querySelectorAll('img')[1].src = './images/dice' + dice2 + '.png';

	buttonStart.textContent = 'Round ' + round;

	if (dice1 > dice2) {
		countDice1 += 1;
		console.log('Result = ' + player1Name + ' won this round!');
		console.log('countDice1 = ' + countDice1);
		console.log('countDice2 = ' + countDice2);
		player1Paragraph.textContent = player1Paragraph.textContent + '🚩';
		player2Paragraph.textContent = player2Paragraph.textContent;
	} else if (dice1 < dice2) {
		countDice2 += 1;
		console.log('Result = ' + player2Name + ' won this round!');
		console.log('countDice1 = ' + countDice1);
		console.log('countDice2 = ' + countDice2);
		player1Paragraph.textContent = player1Paragraph.textContent;
		player2Paragraph.textContent = player2Paragraph.textContent + '🚩';
	} else {
		console.log('Result = Draw!');
		console.log('countDice1 = ' + countDice1);
		console.log('countDice2 = ' + countDice2);
	}

	if (countDice1 === 3) {
		buttonStart.textContent = player1Name + ' wins!';
		console.log(player1Name + ' won this game');
		resetGame();
	} else if (countDice2 === 3) {
		buttonStart.textContent = player2Name + ' wins!';
		console.log(player2Name + ' won this game');
		resetGame();
	}
}

buttonStart.addEventListener('click', () => {
	// startGame = true;
	rollDice();
});

for (let i = 0; i < dice.length; i++) {
	dice[i].addEventListener('click', () => {
		// startGame = true;
		rollDice();
	});
}
