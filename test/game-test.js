const assert = require('chai').assert;
const Rock = require('../lib/rocks');
const Surfer = require('../lib/surfer');
const Collision = require('../lib/collision');
const World = require('../lib/world');
const Game = require('../lib/game');


describe('Game', function() {
  context('createRocks()', function() {
    it('should have a method called createRocks() that makes an array of rocks', function() {
      // var rock = new Rock({});

      // game.createRocks();

      // assert.isFunction(game.createRocks);
      assert.equal([{rock}, {rock}, {rock}], game.createRocks );
    });
  });
});
  context('speedUpRock()', function() {
    it('should speed up the rock when the score is divisible by 101', function() {
      var rock = new Rock({});
      var game = new Game({});

      rock.x = 100;
      rock.speed = 1;

      game.speedUpRock();


      // assert.isFunction(game.createRocks);
      assert.equal(1.05, rock.speed);
    });
  });
