const assert = require("chai").assert;
const Game = require("../lib/game");

describe("Game", function(){
  context('when created', function(){
    var game = new Game(100, 100);
    it("has a KeyPressed", function(){
      assert(game.KeyPressed.setState);
    });

    it("has an empty occupiedPositions", function(){
      assert.equal(game.occupiedPositions.length, 0);
    });

    it("is not over", function(){
      assert.isNotTrue(game.over);
    });
    // Probably extract grid size to game property and pass it to the players
    // Extract and test grid/player creator
    xit("creates player 1", function(){
      var playerOneX = Math.floor(game.width / 8);
      var playerOneY = Math.floor(game.height / 2);

      assert.equal(game.players[0].controls, 'wasd');
      assert.equal(game.players[0].x, playerOneX);
      assert.equal(game.players[0].y, playerOneY);
      assert.equal(game.players[0].speedX, game.players[0].speed);
      assert.equal(game.players[0].speedY, 0);
    });

    xit("creates player 2", function(){
      var playerTwoX = Math.floor(game.width / 8) * 7;
      var playerTwoY = Math.floor(game.height / 2);

      assert.equal(game.players[1].controls, 'arrows');
      assert.equal(game.players[1].x, playerTwoX);
      assert.equal(game.players[1].y, playerTwoY);
      assert.equal(game.players[1].speedX, -game.players[0].speed);
      assert.equal(game.players[1].speedY, 0);
    });
  });

  context('when running', function(){
    it("orients players", function(){
      var game = new Game(100,100);
      var playerOneSpeedX = game.players[0].speedX;
      var playerOneSpeedY = game.players[0].speedY;
      var playerTwoSpeedX = game.players[1].speedX;
      var playerTwoSpeedY = game.players[1].speedY;

      game.KeyPressed.up = true;
      game.KeyPressed.w = true;
      game.update();
      game.KeyPressed.up = false;
      game.KeyPressed.w = false;

      assert.notEqual(game.players[0].speedX, playerOneSpeedX);
      assert.notEqual(game.players[0].speedY, playerOneSpeedY);
      assert.notEqual(game.players[1].speedX, playerTwoSpeedX);
      assert.notEqual(game.players[1].speedY, playerTwoSpeedY);
    });

    it("moves players", function(){
      var game = new Game(100,100);
      var playerOnePosition = game.players[0].position();
      var playerTwoPosition = game.players[1].position();

      game.update();

      assert.notEqual(game.players[0].position(), playerOnePosition);
      assert.notEqual(game.players[1].position(), playerTwoPosition);
    });

    it("logs positions", function(){
      var game = new Game();

      game.update();

      assert(game.occupiedPositions[game.players[0].x][game.players[0].y]);
      assert(game.occupiedPositions[game.players[1].x][game.players[1].y]);
    });

    it("is over if a player dies", function(){
      var game = new Game();
      game.players[0].x = -100;

      game.update();

      assert(game.over);
    });
  });
});
