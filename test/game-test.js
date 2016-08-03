const assert = require('chai').assert;
const Rock = require('../lib/rocks');
const Surfer = require('../lib/surfer');
const Collision = require('../lib/collision');
const World = require('../lib/world');
const Game = require('../lib/game');


describe('Game', function() {
  context('renderWorld', function() {
    var canvaz = {height: 200, width: 600};
    var game = new Game(canvaz);
    it('should have a method called createRocks() that makes an array of rocks', function() {
      debugger;
      // var rock = new Rock({});

      // game.createRocks();

      // assert.isFunction(game.createRocks);
      assert.equal([{rock}, {rock}, {rock}], game.createRocks );
    });
  });
});
