const assert = require("chai").assert;

const Game = require("../lib/game");

describe("Game", function(){
  var game = new Game();

  it("is an object", function() {
    assert.typeOf(game, "Object");
  });

  it("has a first Player", function(){
    assert(game.firstPlayer.move);
  });

  it("has player attributes", function() {
    assert.equal(game.firstPlayer.x, 50);
    assert.equal(game.firstPlayer.y, 50);
    assert.equal(game.firstPlayer.width, 10);
    assert.equal(game.firstPlayer.height, 10);
  });

});
// const assert = require("chai").assert;
//
// const Game = require("../lib/game");
//
// describe("Game", function(){
//   var game = new Game();
//
//   it("instantiates new player", function() {
//     assert.equal(game.firstPlayer.x, 50);
//     assert.equal(game.firstPlayer.y, 50);
//     assert.equal(game.firstPlayer.width, 10);
//     assert.equal(game.firstPlayer.height, 10);
//   });
// });
