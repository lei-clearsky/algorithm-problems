// Food Class
export default class Food {
	constructor(boardSize, snake) {
		this.boardSize = boardSize;
		this.snake = snake;
		this.location = null;
		this.generateFood();
	}

	removeFood() {
		const foodToBeEaten = this.location;
		const foodId = foodToBeEaten.x + '-' + foodToBeEaten.y;

		document.getElementById(foodId).classList.remove('snake-game__board-cell--food');
	}

	generateFood() {
		this.generateNewFood();
		const randomFood = this.location;
		const randomFoodId = randomFood.x + '-' + randomFood.y;

		document.getElementById(randomFoodId).classList.add('snake-game__board-cell--food');
	}

	generateNewFood() {
		const snakeBody = this.snake.snakeBodyArr;
		const boardSize = this.boardSize;
		const randomFood = {
			x: Math.floor(Math.random() * (boardSize - 1) + 1),
			y: Math.floor(Math.random() * (boardSize - 1) + 1)
		};

		for (let i = 0; i < snakeBody.length; i++) {
			if (randomFood.x === snakeBody[i].x && randomFood.y === snakeBody[i].y) {
				return this.generateNewFood();
			}
		}

		this.location = randomFood;

		return;
	}
}