const assert = require("chai").assert;
const Fruit = require("../lib/fruit");
const Game = require("../lib/game");

describe("Fruit", function(){
  context('when created', function(){
    var game = new Game(200,200);
    var fruit = new Fruit(game);

    it("has a size", function(){
      assert(fruit.size);
    });

    it("is positioned", function(){
      assert(fruit.x);
      assert(fruit.y);
    });
  });

  context('when repositioned', function(){
    it("its positioned according to the grid", function(){
      var game = new Game(200,200);
      var fruit = new Fruit(game);

      assert.equal(fruit.x % game.grid.size, 0);
      assert.equal(fruit.y % game.grid.size, 0);
    });

    xit("is positioned in a free square", function(){
      // assert.isNotTrue(fruit.over);
    });
  });
});
