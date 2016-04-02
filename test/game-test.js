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
    it("creates player 1", function(){
      var playerOneX = Math.floor(game.width / 8);
      var playerOneY = Math.floor(game.height / 2);

      assert.equal(game.players[0].controls, 'wasd');
      assert.equal(game.players[0].x, playerOneX);
      assert.equal(game.players[0].y, playerOneY);
    });

    it("creates player 2", function(){
      var playerTwoX = Math.floor(game.width / 8) * 7;
      var playerTwoY = Math.floor(game.height / 2);

      assert.equal(game.players[1].controls, 'arrows');
      assert.equal(game.players[1].x, playerTwoX);
      assert.equal(game.players[1].y, playerTwoY);
    });
  });

  context('when running', function(){
    it("logs positions", function(){
      var game = new Game();
      game.logPosition([12,7]);
      assert(game.occupiedPositions[12][7]);
    });

    it("movePlayers", function(){
      var game = new Game(100,100);
      var playerOneX = game.players[0].x;

      game.update();

      assert.notEqual(game.players[0].x, playerOneX);
    });

    xit("updates the game", function(){});
  });
});
