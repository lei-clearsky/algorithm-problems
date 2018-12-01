import Snake from './snake.js';
import Food from './food.js';

// Game class
export default class Game {
	constructor(container, boardSize, snakeSize) {
		// Game properties
		this.container = container;
		this.size = boardSize;
		this.snakeSize = snakeSize;
		this.score = 0;
		this.stop = false;
		this.collisionStatus = null;
		// Init entities
		this.initializeBoard();
		this.snake = new Snake(boardSize, snakeSize);
		this.food = new Food(boardSize, this.snake);
	}

	initializeBoard() {
		const boardArea = document.getElementById(this.container);
		const boardSize = this.size;
		const gameTitleHTML = '<h1>Snake Game</h1>';
		const introHTML = '<p class="snake-game__intro">(Press Space to Start; Press Esc to Pause)</p>';
		const scoreHTML = '<h2>SCORE: <span id="snake-game__score">0</span></h2>';

		boardArea.innerHTML = gameTitleHTML + '<div id="snake-game_intro-container" class="snake-game__intro-container">' + introHTML + scoreHTML + '</div>';

		for (let i = 1; i <= boardSize; i++) {
			let row = document.createElement('div');
			row.classList.add('snake-game__board-row');
			boardArea.appendChild(row);

			for (let j = 1; j <= boardSize; j++) {
				let cell = document.createElement('div');
				cell.id = i + '-' + j;
				cell.classList.add('snake-game__board-cell');
				row.appendChild(cell);
			}
		}
	}

	checkCollision() {
		const boardSize = this.size;
		const snakeBody = this.snake.snakeBodyArr;
		const snakeHead = snakeBody[0];
		const foodLocation = this.food.location;

		if (snakeHead.x === 0 || 
			snakeHead.y === 0 || 
			snakeHead.x === boardSize || 
			snakeHead.y === boardSize) {
			this.stop = true;
			this.collisionStatus = 'wall';
		}

		for (let i = 1; i < snakeBody.length; i++) {
			if (snakeHead.x === snakeBody[i].x && snakeHead.y === snakeBody[i].y) {
				this.stop = true;
				this.collisionStatus = 'snake';
			}
		}

		if (snakeHead.x === foodLocation.x && snakeHead.y === foodLocation.y) {
			this.collisionStatus = 'food';
		}
	}

	update() {
		const collisionStatus = this.collisionStatus;

		switch(collisionStatus) {
			case 'wall':
				this.stop = true;
				break;
			case 'snake':
				this.stop = true;
				break;
			case 'food':
				this.score ++;
				this.collisionStatus = null;
				this.handleGameStatus();
				this.snake.gainWeight();
				this.food.removeFood();
				this.food.generateFood();
			default:
				return;
		}
	}

	handleGameStatus() {
		document.getElementById('snake-game__score').innerHTML = this.score;
	}
}