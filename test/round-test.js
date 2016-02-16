const chai = require('chai');
const assert = chai.assert;
const Round = require('../lib/round');


describe('Round', function() {
  context('start with default attributes', function() {
    it('should assign a snake instance', function() {
      var round = new Round({});
      assert(round.snake);
    });
    it('should assign a unique snake instance', function() {
      var round_one = new Round({});
      var round_two = new Round({});

      assert(round_one.snake !== round_two.snake);
    });

    it('should assign a pellet instance', function() {
      var round = new Round({});
      assert(round.pellet);
    });

    it('should assign a score of 0', function() {
      var round = new Round({});
      assert.equal(round.score, 0);
    });
  });
});
