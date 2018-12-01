(function() {
  function GameEngine() {
    this.scoreMe = 0;
    this.scoreAI = 0;
    this.scoreTie = 0;
    this.gameStatus = '';
    this.game = new Game();
  }

  function Game() {
    this.init();
  }

  GameEngine.prototype.checkGameStatus = function(board, player) {
      this.checkWins(board, player);
      this.checkTies();
      this.updateGameStatus();
  }

  GameEngine.prototype.checkWins = function(board, player) {
    if (this.game.isWinning(board, player)) {
      if (player === this.game.me) {
        this.scoreMe++;
        this.gameStatus = 'Won';
      } else {
        this.scoreAI++;
        this.gameStatus = 'Lost';
      }
      this.game.gameContinue = false;
      return true;
    }
    return false;
  }

  GameEngine.prototype.checkTies = function(moves) {
    if (this.game.gameContinue && this.game.getAvailableMoves(this.game.board).length === 0) {
      this.scoreTie++;
      this.gameStatus = 'Tie';
      this.game.gameContinue = false;
      return true;
    }
    return false;
  }

  GameEngine.prototype.updateGameStatus = function() {
    document.getElementById('scoreRed').innerHTML = this.scoreMe;
    document.getElementById('scoreBlack').innerHTML = this.scoreAI;
    document.getElementById('scoreTie').innerHTML = this.scoreTie;
    document.getElementById('ticTacToeStatus').innerHTML = this.gameStatus;

    if (!this.game.gameContinue) {
      this.showGameActions();
    }
  }

  GameEngine.prototype.showGameActions = function() {
    document.getElementById('ticTacToeActions').classList.add('tic-tac-toe__actions--visible');
  }

  Game.prototype.init = function() {
    this.board = [];
    this.me = 'x';
    this.ai = 'o';
    this.score = 0;
    this.gameContinue = true;
    this.initBoard();
  }

  Game.prototype.initBoard = function() {
    var boardArea = document.getElementsByClassName('tic-tac-toe__board')[0];
    for (var i = 1; i <= 3; i++) {
      for (var j = 1; j <= 3; j++) {
        var cell = document.createElement('div');
        var cellId = i + '-' + j;
        this.board.push(cellId);
        cell.id = cellId;
        cell.classList.add('tic-tac-toe__board-cell');
        boardArea.appendChild(cell);
      }
    }
    this.setupGameEvents();
  }

  Game.prototype.setupBoard = function() {
    for (var i = 1; i <= 3; i++) {
      for (var j = 1; j <= 3; j++) {
        var cellId = i + '-' + j;
        this.board.push(cellId);
      }
    }
  }

  Game.prototype.resetGame = function() {
    this.board = [];
    this.score = 0;
    this.gameContinue = true;
    this.setupBoard();

    Array.prototype.slice.call(document.getElementsByClassName('tic-tac-toe__board-cell')).forEach(function(cell) {
      cell.classList.remove('tic-tac-toe__board-cell--red');
      cell.classList.remove('tic-tac-toe__board-cell--black');
    });

    this.hideGameActions();
  }

  Game.prototype.moveCallback = function(event) {
    var eventTarget = event.target;
    if (eventTarget.classList.contains('tic-tac-toe__board-cell')) {
      this.move(eventTarget);
    }
  }

  Game.prototype.setupGameEvents = function() {
    document.getElementById('ticTacToeBoard').addEventListener('click', (this.moveCallback).bind(this));
    document.getElementById('ticTacToePlayAgain').addEventListener('click', (this.resetGame).bind(this));
    document.getElementById('ticTacToePlayCancel').addEventListener('click', (this.hideGameActions).bind(this));
  }

  Game.prototype.hideGameActions = function() {
    document.getElementById('ticTacToeActions').classList.remove('tic-tac-toe__actions--visible');
  }

  Game.prototype.move = function(el) {
    if (this.gameContinue && !el.classList.contains('tic-tac-toe__board-cell--red')) {
      el.classList.add('tic-tac-toe__board-cell--red');
      var index = this.board.indexOf(el.id);
      this.board[index] = this.me;
      ticTacToeGame.checkGameStatus(this.board, this.me);

      if (this.getAvailableMoves(this.board).length > 0) {
        this.rivalMove();
      }
    }
  }

  Game.prototype.rivalMove = function() {
    var bestMove = this.minMaxAlgo(this.board.slice(), this.ai).index;
    this.board[this.board.indexOf(bestMove)] = this.ai;
    document.getElementById(bestMove).classList.add('tic-tac-toe__board-cell--black');
    ticTacToeGame.checkGameStatus(this.board, this.ai);
  }

  Game.prototype.minMaxAlgo = function(board, player) {
    var minVal = -100000;
    var maxVal = 100000;
    var bestMove;
    var availableMoves = this.getAvailableMoves(board);

    // base case
    if (this.isWinning(board, player) && player === this.ai) {
      return { score: 10 };
    } else if (this.isWinning(board, player) && player === this.me) {
      return { score: -10 };
    } else if (availableMoves.length === 0) {
      return { score: 0 };
    }

    var moves = [];

    for (var i = 0; i < availableMoves.length; i++) {
      var availableMove = availableMoves[i];
      var move = { index: availableMove };
      var boardIndex = board.indexOf(availableMove);
      var newBoard = board.slice();
      newBoard[boardIndex] = player;

      if (player === this.ai) {
        var m = this.minMaxAlgo(newBoard, this.me);
        move.score = m.score;
      } else {
        var m = this.minMaxAlgo(newBoard, this.ai);
        move.score = m.score;
      }

      moves.push(move);
      newBoard[boardIndex] = availableMove;
    }

    if (player === this.ai) {
      var bestScore = minVal;
      for (var i = 0; i < moves.length; i++) {
        if (moves[i].score >= bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    } else {
      var bestScore = maxVal;
      for (var i = 0; i < moves.length; i++) {
        if (moves[i].score <= bestScore) {
          bestScore = moves[i].score;
          bestMove = moves[i];
        }
      }
    }

    return bestMove;
  }

  Game.prototype.getAvailableMoves = function(board) {
    var that = this;
    var avaialbeMoves = board.reduce(function(acc, el) {
      if (el !== that.me && el !== that.ai) {
        acc.push(el);
      };
      return acc;
    }, []);

    return avaialbeMoves;
  }

  Game.prototype.isWinning = function(board, player) {
    return (board[0] === player && board[0] === board[1] && board[1] === board[2] ||
      board[3] === player && board[3] === board[4] && board[4] === board[5] ||
      board[6] === player && board[6] === board[7] && board[7] === board[8] ||
      board[0] === player && board[0] === board[3] && board[3] === board[6] ||
      board[1] === player && board[1] === board[4] && board[4] === board[7] ||
      board[2] === player && board[2] === board[5] && board[5] === board[8] ||
      board[0] === player && board[0] === board[4] && board[4] === board[8] ||
      board[2] === player && board[2] === board[4] && board[4] === board[6]);
  }

  var ticTacToeGame = new GameEngine();
})();
