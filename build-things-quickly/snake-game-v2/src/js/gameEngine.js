import Game from './game.js';

export default function gameEngine(container, boardSize, fps, snakeSize) {
	const interval = 1000 / fps;
	let game = new Game(container, boardSize, snakeSize);
	let start = null;

	init();

	// Main function to create animation
	function runGameEngine(timestamp) {
		if (game.stop) {
			handleGameOver();
			return;
		}

		if (!start) {
			start = timestamp;
		}

		const elapsed = timestamp - start;

		if (elapsed > interval) {
			start = timestamp - (elapsed % interval);
			// update entities
			game.update();
			game.snake.update();
			// handle collisions
			game.checkCollision();
			// render entities
			game.snake.render();
		}

		window.requestAnimationFrame(runGameEngine);
	}

	function handleGameRestart() {
		document.getElementById('snake-game__restart-button').addEventListener('click', function(e) {
			game = new Game(container, boardSize, snakeSize);
			runGameEngine();
		});
	}

	function init() {
		document.addEventListener('keydown', function(key) {
			const eventKeys = {
				27: 'pause',
				32: 'start',
				37: 'left',
				38: 'up',
				39: 'right',
				40: 'down'
			};
			const action = eventKeys[key.keyCode];

			if (action === 'start') {
				game.stop = false;
				runGameEngine();
			} else if (action === 'pause') {
				game.stop = true;
			} else {
				game.snake.direction = action;
			}
		});
	}

	// Handle game over
	function handleGameOver() {
		// display final score and instruction to play again
		const yourScore = '<h2 class="snake-game__final-score">Game Over! Your Final Score: <span id="snake-game__final-score"></span></h2>';
		const restartButton = '<div class="snake-game__restart-button" id="snake-game__restart-button">Restart</div>';
		document.getElementById('snake-game_intro-container').innerHTML = yourScore + restartButton;
		document.getElementById('snake-game__final-score').innerHTML = game.score;

		handleGameRestart();
	}
}