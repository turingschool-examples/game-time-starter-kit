const assert = require('assert');
const Game = require('../lib/game');

describe('Game', function () {
  it('should have a score property', function () {
    let game = new Game(); 

    assert.equal(game.score, 0);
  });
});
