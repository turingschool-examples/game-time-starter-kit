const assert = require('chai').assert;
const Rock = require('../lib/rocks');
const Surfer = require('../lib/surfer');
const Collision = require('../lib/collision');
const World = require('../lib/world');
const Game = require('../lib/game');


describe('The Game', function() {
  context('Functions', function() {
    it.skip('should have a method called "createRocks()" that makes an array of rocks', function() {
      // var rock = new Rock({});

      game.createRocks();

      assert.isFunction(game.createRocks);
      assert.equal([{rock}, {rock}, {rock}], game.createRocks );
    });

    it.skip('"speedUpRock()" should speed up the rock when the score is divisible by 101', function() {
      var rock = new Rock({});
      var game = new Game({});

      rock.x = 100;
      rock.speed = 1;

      game.speedUpRock();

      assert.equal(1.05, rock.speed);
    });

    it.skip('"gameOver()" should end the game when a surfer hits a rock', function() {
      var surfer = new Surfer({});
      var rock = new Rock({});
      var collision = new Collision(surfer);

      surfer.right = 25;
      rock.x = 24;

      assert.equal(true, game.gameOver);
    });

    it.skip('"cycle()" controls the game', function() {

    });

    it.skip('"renderWorld()" ', function() {

    });
  });
});
