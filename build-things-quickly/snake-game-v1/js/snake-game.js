// Game engine class
// Start game and animation
var GameEngine = function (container, boardSize, fps, snakeSize) {
	var game = new Game(container, boardSize, snakeSize);
	var interval = 1000 / fps;
	var start = null;
	// Main function to create animation
	function runGameEngine(timestamp) {
		if (game.stop) {
			handleGameOver();
			return;
		}

		if (!start) {
			start = timestamp;
		}

		var elapsed = timestamp - start;

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
			var eventKeys = {
				27: 'pause',
				32: 'start',
				37: 'left',
				38: 'up',
				39: 'right',
				40: 'down'
			};
			var action = eventKeys[key.keyCode];

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
		var yourScore = '<h2 class="snake-game__final-score">Game Over! Your Final Score: <span id="snake-game__final-score"></span></h2>';
		var restartButton = '<div class="snake-game__restart-button" id="snake-game__restart-button">Restart</div>';
		document.getElementById('snake-game_intro-container').innerHTML = yourScore + restartButton;
		document.getElementById('snake-game__final-score').innerHTML = game.score;

		handleGameRestart();
	}

	init();
}

// Game class
var Game = function (container, boardSize, snakeSize) {
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
	this.food = new Food(boardSize);
}

// Game related functions
// Handle board inilization
Game.prototype.initializeBoard = function() {
	var boardArea = document.getElementById(this.container);
	var boardSize = this.size;
	var gameTitleHTML = '<h1>Snake Game</h1>';
	var introHTML = '<p class="snake-game__intro">(Press Space to Start; Press Esc to Pause)</p>';
	var scoreHTML = '<h2>SCORE: <span id="snake-game__score">0</span></h2>';

	boardArea.innerHTML = gameTitleHTML + '<div id="snake-game_intro-container" class="snake-game__intro-container">' + introHTML + scoreHTML + '</div>';

	for (var i = 1; i <= boardSize; i++) {
		var row = document.createElement('div');
		row.classList.add('snake-game__board-row');
		boardArea.appendChild(row);

		for (var j = 1; j <= boardSize; j++) {
			var cell = document.createElement('div');
			cell.id = i + '-' + j;
			cell.classList.add('snake-game__board-cell');
			row.appendChild(cell);
		}
	}
}

// Handle collision 
Game.prototype.checkCollision = function() {
	var boardSize = this.size;
	var snakeBody = this.snake.snakeBodyArr;
	var snakeHead = snakeBody[0];
	var foodLocation = this.food.location;

	if (snakeHead.x === 0 || 
		snakeHead.y === 0 || 
		snakeHead.x === boardSize || 
		snakeHead.y === boardSize) {
		this.stop = true;
		this.collisionStatus = 'wall';
	}

	for (var i = 1; i < snakeBody.length; i++) {
		if (snakeHead.x === snakeBody[i].x && snakeHead.y === snakeBody[i].y) {
			this.stop = true;
			this.collisionStatus = 'snake';
		}
	}

	if (snakeHead.x === foodLocation.x && snakeHead.y === foodLocation.y) {
		this.collisionStatus = 'food';
	}
}

// Handle game updates
Game.prototype.update = function() {
	var collisionStatus = this.collisionStatus;

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

// Handle game status
Game.prototype.handleGameStatus = function() {
	document.getElementById('snake-game__score').innerHTML = this.score;
};

// Snake class
var Snake = function (boardSize, snakeSize) {
	this.boardSize = boardSize;
	this.snakeSize = snakeSize;
	this.snakeBodyArr = [];
	this.snakeTail = null;
	this.direction = 'up';
	this.initSnake();
}

// Handle init snake
Snake.prototype.initSnake = function() {
	var midPosition = Math.floor(this.boardSize / 2);
	var snakeSize = this.snakeSize;
	for (var i = 0; i < snakeSize; i++) {
		this.snakeBodyArr.push({ x: midPosition, y: midPosition + i });
	}
	this.render(true);
}

// Handle update snake
Snake.prototype.addNewHead = function() {
	var snakeBody = this.snakeBodyArr;
	var snakeHead = snakeBody[0];
	var direction = this.direction;
	var newHead;

	switch(direction) {
		case 'left':
			newHead = {
				x: snakeHead.x,
				y: snakeHead.y - 1 < 1 ? 1 : snakeHead.y - 1
			};
			break;
		case 'up':
			newHead = {
				x: snakeHead.x - 1 < 1 ? 1 : snakeHead.x - 1,
				y: snakeHead.y
			};
			break;
		case 'right':
			newHead = {
				x: snakeHead.x,
				y: snakeHead.y + 1 > this.boardSize ? this.boardSize : snakeHead.y + 1
			};
			break;
		case 'down':
			newHead = {
				x: snakeHead.x + 1 > this.boardSize ? this.boardSize : snakeHead.x + 1,
				y: snakeHead.y
			};
			break;
		default:
			return;
	}

	snakeBody.unshift(newHead);	
};

Snake.prototype.removeTail = function() {
	this.snakeTail = this.snakeBodyArr.pop();
};

// Handle update snake
Snake.prototype.update = function() {
	this.addNewHead();
	this.removeTail();
};

// Handle snake rendering
Snake.prototype.render = function(isInit) {
	var snakeBody = this.snakeBodyArr;

	for (var i = 0; i < snakeBody.length; i++) {
		var snakeCellId = snakeBody[i].x + '-' + snakeBody[i].y;
		document.getElementById(snakeCellId).classList.add('snake-game__board-cell--snake');
	}

	if (isInit) return;

	var snakeTailId = this.snakeTail.x + '-' + this.snakeTail.y;
	document.getElementById(snakeTailId).classList.remove('snake-game__board-cell--snake');
}

// Snake gain weight after eating food
Snake.prototype.gainWeight = function() {
	this.addNewHead();
}

// Food class
var Food = function(boardSize) {
	this.boardSize = boardSize;
	this.location;
	this.generateFood();
}

// Clear food location
Food.prototype.removeFood = function() {
	var foodToBeEaten = this.location;
	var foodId = foodToBeEaten.x + '-' + foodToBeEaten.y;
	document.getElementById(foodId).classList.remove('snake-game__board-cell--food');
}

// Handle generate random food
Food.prototype.generateFood = function() {
	var boardSize = this.boardSize;
	var randomFood = {
		x: Math.floor(Math.random() * (boardSize - 1) + 1),
		y: Math.floor(Math.random() * (boardSize - 1) + 1)
	};
	var randomFoodId = randomFood.x + '-' + randomFood.y;
	document.getElementById(randomFoodId).classList.add('snake-game__board-cell--food');

	this.location = randomFood;
}

// Init game
document.addEventListener('DOMContentLoaded', () => {
	var newGame = new GameEngine('snake-game', 30, 10, 5);
});
