// Snake class
export default class Snake {
	constructor(boardSize, snakeSize) {
		this.boardSize = boardSize;
		this.snakeSize = snakeSize;
		this.snakeBodyArr = [];
		this.snakeTail = null;
		this.direction = 'up';
		this.initSnake();
	}

	initSnake() {
		const midPosition = Math.floor(this.boardSize / 2);
		const snakeSize = this.snakeSize;

		for (let i = 0; i < snakeSize; i++) {
			this.snakeBodyArr.push({ x: midPosition, y: midPosition + i });
		}

		this.render(true);
	}

	addNewHead() {
		const snakeBody = this.snakeBodyArr;
		const snakeHead = snakeBody[0];
		const direction = this.direction;
		let newHead;

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
	}

	removeTail() {
		this.snakeTail = this.snakeBodyArr.pop();
	}

	update () {
		this.addNewHead();
		this.removeTail();
	}

	render (isInit) {
		const snakeBody = this.snakeBodyArr;

		for (let i = 0; i < snakeBody.length; i++) {
			let snakeCellId = snakeBody[i].x + '-' + snakeBody[i].y;
			document.getElementById(snakeCellId).classList.add('snake-game__board-cell--snake');
		}

		if (isInit) return;

		const snakeTailId = this.snakeTail.x + '-' + this.snakeTail.y;
		document.getElementById(snakeTailId).classList.remove('snake-game__board-cell--snake');
	}

	gainWeight() {
		this.addNewHead();
	}
}