const game = document.querySelector('#game');
const reset = document.querySelector('#reset');

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

function updateScores(player, opponent) {
    player.score += 1;
    game.disabled = true;
    player.display.innerText = `${player.score}`;
    if (player.score == parseInt(game.value)) {
        p1.button.disabled = true;
        p2.button.disabled = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');
    }
}

p1.button.addEventListener('click', () => {
    updateScores(p1, p2);
})
p2.button.addEventListener('click', () => {
    updateScores(p2, p1);
})
reset.addEventListener('click', () => {
    game.disabled = false;
    for (let player of [p1, p2]) {
        player.score = 0;
        player.button.disabled = false;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.display.innerText = `${player.score}`;
    }
})