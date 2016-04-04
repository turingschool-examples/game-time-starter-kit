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

    it("has a fruit", function(){
      assert(game.fruit);
    });

    it("creates player 1", function(){
      assert.equal(game.players[0].controls, 'wasd');
      assert(game.players[0].x < game.grid.realWidth / 2);
      assert.equal(game.players[0].y, game.grid.realHeight / 2);
      assert.equal(game.players[0].speedX, game.players[0].speed);
      assert.equal(game.players[0].speedY, 0);
    });

    it("creates player 2", function(){
      assert.equal(game.players[1].controls, 'arrows');
      assert(game.players[1].x > game.grid.realWidth / 2);
      assert.equal(game.players[1].y, game.grid.realHeight / 2);
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
      var game = new Game(100,100);

      game.update();

      assert(game.occupiedPositions[game.players[0].x][game.players[0].y]);
      assert(game.occupiedPositions[game.players[1].x][game.players[1].y]);
    });

    it("is over if a player dies", function(){
      var game = new Game(100,100);
      game.players[0].x = -100;

      game.update();

      assert(game.over);
    });

    it("spawns fruits when eaten", function(){
      var game = new Game(100,100);
      var fruitX = game.fruit.x;
      game.players[0].x = game.fruit.x - game.players[0].speedX;
      game.players[0].y = game.fruit.y;

      game.update();

      assert.notEqual(fruitX, game.fruit.x);
    });
  });
});
