let playerWins = 0;
let computerWins = 0;

document.getElementById('game').addEventListener('click', function(event) {
    // Ellenőrizzük, hogy a klikkelt elem kép-e és a gombon belül helyezkedik-e el
    if (!event.target.matches('img')) return;
    
    const playerChoice = event.target.parentNode.id; // A gomb azonosítója, amelyikben a kép található
    const computerChoice = getRandomChoice();
    const result = determineWinner(playerChoice, computerChoice);
    updateUI(playerChoice, computerChoice, result);
    updateScore();
});

function getRandomChoice() {
    const gameChoices = ['rock', 'paper', 'scissors'];
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function determineWinner(player, computer) {
    if (player === computer) {
        return 'Döntetlen!';
    } else if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        playerWins++;
        return 'Nyertél!';
    } else {
        computerWins++;
        return 'Vesztettél!';
    }
}

function updateUI(playerChoice, computerChoice, result) {
    document.getElementById('result').textContent = `Játékos választása: ${translateChoice(playerChoice)}, Gép választása: ${translateChoice(computerChoice)}. ${result}`;
}

function updateScore() {
    document.getElementById('score').textContent = `Játékos győzelmei: ${playerWins}, Gép győzelmei: ${computerWins}`;
}

function translateChoice(choice) {
    switch (choice) {
        case 'rock': return 'Kő';
        case 'paper': return 'Papír';
        case 'scissors': return 'Olló';
        default: return '';
    }
}
