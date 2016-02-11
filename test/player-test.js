const Player = require('../lib/player');
const Game = require('../lib/game');
const assert = require('chai').assert;

describe('Player', function() {
  var context = document.createElement('canvas').getContext('2d');
  const game = new Game(context);

  it('has a default size', function () {
    const player = new Player(game);

    assert.equal(player.size.x, 15);
    assert.equal(player.size.y, 15);
  });

  it('has default x position', function () {
    const player = new Player(game);

    assert.equal(player.position.x, 150);
  });

  it('has a default y position', function () {
    const player = new Player(game);

    assert.equal(player.position.y, 115);
  });
  
});
