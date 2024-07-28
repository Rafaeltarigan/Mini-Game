let score = 0;
const button = document.getElementById('click-button');
const scoreDisplay = document.getElementById('score');

button.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveButton();
});

function moveButton() {
    const gameContainer = document.getElementById('game-container');
    const containerRect = gameContainer.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const newLeft = Math.random() * (containerRect.width - buttonWidth);
    const newTop = Math.random() * (containerRect.height - buttonHeight);

    button.style.position = 'absolute';
    button.style.left = `${newLeft}px`;
    button.style.top = `${newTop}px`;
}
