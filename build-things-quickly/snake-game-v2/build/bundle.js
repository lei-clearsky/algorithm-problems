/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _gameEngine = __webpack_require__(1);

var _gameEngine2 = _interopRequireDefault(_gameEngine);

__webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
	// container, boardSize, fps, snakeSize
	(0, _gameEngine2.default)('snake-game', 30, 10, 5);
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = gameEngine;

var _game = __webpack_require__(2);

var _game2 = _interopRequireDefault(_game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function gameEngine(container, boardSize, fps, snakeSize) {
	var interval = 1000 / fps;
	var game = new _game2.default(container, boardSize, snakeSize);
	var start = null;

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

		var elapsed = timestamp - start;

		if (elapsed > interval) {
			start = timestamp - elapsed % interval;
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
		document.getElementById('snake-game__restart-button').addEventListener('click', function (e) {
			game = new _game2.default(container, boardSize, snakeSize);
			runGameEngine();
		});
	}

	function init() {
		document.addEventListener('keydown', function (key) {
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
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _snake = __webpack_require__(3);

var _snake2 = _interopRequireDefault(_snake);

var _food = __webpack_require__(4);

var _food2 = _interopRequireDefault(_food);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Game class
var Game = function () {
	function Game(container, boardSize, snakeSize) {
		_classCallCheck(this, Game);

		// Game properties
		this.container = container;
		this.size = boardSize;
		this.snakeSize = snakeSize;
		this.score = 0;
		this.stop = false;
		this.collisionStatus = null;
		// Init entities
		this.initializeBoard();
		this.snake = new _snake2.default(boardSize, snakeSize);
		this.food = new _food2.default(boardSize, this.snake);
	}

	_createClass(Game, [{
		key: 'initializeBoard',
		value: function initializeBoard() {
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
	}, {
		key: 'checkCollision',
		value: function checkCollision() {
			var boardSize = this.size;
			var snakeBody = this.snake.snakeBodyArr;
			var snakeHead = snakeBody[0];
			var foodLocation = this.food.location;

			if (snakeHead.x === 0 || snakeHead.y === 0 || snakeHead.x === boardSize || snakeHead.y === boardSize) {
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
	}, {
		key: 'update',
		value: function update() {
			var collisionStatus = this.collisionStatus;

			switch (collisionStatus) {
				case 'wall':
					this.stop = true;
					break;
				case 'snake':
					this.stop = true;
					break;
				case 'food':
					this.score++;
					this.collisionStatus = null;
					this.handleGameStatus();
					this.snake.gainWeight();
					this.food.removeFood();
					this.food.generateFood();
				default:
					return;
			}
		}
	}, {
		key: 'handleGameStatus',
		value: function handleGameStatus() {
			document.getElementById('snake-game__score').innerHTML = this.score;
		}
	}]);

	return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Snake class
var Snake = function () {
	function Snake(boardSize, snakeSize) {
		_classCallCheck(this, Snake);

		this.boardSize = boardSize;
		this.snakeSize = snakeSize;
		this.snakeBodyArr = [];
		this.snakeTail = null;
		this.direction = 'up';
		this.initSnake();
	}

	_createClass(Snake, [{
		key: 'initSnake',
		value: function initSnake() {
			var midPosition = Math.floor(this.boardSize / 2);
			var snakeSize = this.snakeSize;

			for (var i = 0; i < snakeSize; i++) {
				this.snakeBodyArr.push({ x: midPosition, y: midPosition + i });
			}

			this.render(true);
		}
	}, {
		key: 'addNewHead',
		value: function addNewHead() {
			var snakeBody = this.snakeBodyArr;
			var snakeHead = snakeBody[0];
			var direction = this.direction;
			var newHead = void 0;

			switch (direction) {
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
	}, {
		key: 'removeTail',
		value: function removeTail() {
			this.snakeTail = this.snakeBodyArr.pop();
		}
	}, {
		key: 'update',
		value: function update() {
			this.addNewHead();
			this.removeTail();
		}
	}, {
		key: 'render',
		value: function render(isInit) {
			var snakeBody = this.snakeBodyArr;

			for (var i = 0; i < snakeBody.length; i++) {
				var snakeCellId = snakeBody[i].x + '-' + snakeBody[i].y;
				document.getElementById(snakeCellId).classList.add('snake-game__board-cell--snake');
			}

			if (isInit) return;

			var snakeTailId = this.snakeTail.x + '-' + this.snakeTail.y;
			document.getElementById(snakeTailId).classList.remove('snake-game__board-cell--snake');
		}
	}, {
		key: 'gainWeight',
		value: function gainWeight() {
			this.addNewHead();
		}
	}]);

	return Snake;
}();

exports.default = Snake;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Food Class
var Food = function () {
	function Food(boardSize, snake) {
		_classCallCheck(this, Food);

		this.boardSize = boardSize;
		this.snake = snake;
		this.location = null;
		this.generateFood();
	}

	_createClass(Food, [{
		key: 'removeFood',
		value: function removeFood() {
			var foodToBeEaten = this.location;
			var foodId = foodToBeEaten.x + '-' + foodToBeEaten.y;

			document.getElementById(foodId).classList.remove('snake-game__board-cell--food');
		}
	}, {
		key: 'generateFood',
		value: function generateFood() {
			this.generateNewFood();
			var randomFood = this.location;
			var randomFoodId = randomFood.x + '-' + randomFood.y;

			document.getElementById(randomFoodId).classList.add('snake-game__board-cell--food');
		}
	}, {
		key: 'generateNewFood',
		value: function generateNewFood() {
			var snakeBody = this.snake.snakeBodyArr;
			var boardSize = this.boardSize;
			var randomFood = {
				x: Math.floor(Math.random() * (boardSize - 1) + 1),
				y: Math.floor(Math.random() * (boardSize - 1) + 1)
			};

			for (var i = 0; i < snakeBody.length; i++) {
				if (randomFood.x === snakeBody[i].x && randomFood.y === snakeBody[i].y) {
					return this.generateNewFood();
				}
			}

			this.location = randomFood;

			return;
		}
	}]);

	return Food;
}();

exports.default = Food;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(8)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(7)(undefined);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Lato:300,400,700);", ""]);

// module
exports.push([module.i, "/* Generic Styles */\n* {\n  padding: 0;\n  margin: 0;\n  font-family: 'Lato', Calibri, Arial, sans-serif;\n  color: #333; }\n\n.snake-game {\n  display: table-row-group;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%); }\n  .snake-game h1 {\n    text-align: center;\n    font-weight: 300;\n    padding-bottom: 10px; }\n  .snake-game h2 {\n    text-align: center;\n    font-weight: 300;\n    padding-bottom: 10px; }\n  .snake-game .snake-game__intro {\n    text-align: center;\n    font-weight: 700;\n    padding-bottom: 10px; }\n  .snake-game .snake-game__board-row {\n    display: table-row;\n    background: #f5f5f5; }\n  .snake-game .snake-game__board-cell {\n    display: table-cell;\n    width: 20px;\n    height: 20px; }\n  .snake-game .snake-game__board-cell--snake {\n    background: #333; }\n  .snake-game .snake-game__board-cell--food {\n    background: #e40c20; }\n  .snake-game .snake-game__intro-container {\n    text-align: center;\n    margin-bottom: 10px;\n    min-height: 90px; }\n  .snake-game .snake-game__restart-button {\n    display: inline-block;\n    font-size: 20px;\n    font-weight: 300;\n    color: #fff;\n    background-color: #09c;\n    padding: 10px 20px;\n    border: 0;\n    cursor: pointer; }\n", ""]);

// exports


/***/ }),
/* 7 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);