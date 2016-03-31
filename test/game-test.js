const assert = require("chai").assert;
const Game = require("../lib/game");

describe("Game", function(){
  context('when created', function(){
    var game = new Game();
    it("has a KeyPressed", function(){
      assert(game.KeyPressed.setState);
    });

    it("has an empty occupiedPositions", function(){
      assert.equal(game.occupiedPositions.length, 0);
    });

    it("has a first Player", function(){
      assert(game.firstPlayer.move);
    });
  });

  context('when running', function(){
    it("logs positions", function(){
      var game = new Game();
      game.logPosition([12,7]);
      assert(game.occupiedPositions[12][7]);
    });

    xit("updates the game", function(){});
  });
});
