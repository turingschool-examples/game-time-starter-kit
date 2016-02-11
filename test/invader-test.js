const Invader = require('../lib/invader');
const Game = require('../lib/game');
const assert = require('chai').assert;

describe('Invader', function() {
  var context = document.createElement('canvas').getContext('2d');
  const game = new Game(context)

  it('has a default size', function () {
    const invader = new Invader(game, { x: 1, y: 1})
    assert.equal(invader.size.x, 15)
    assert.equal(invader.size.y, 15)
  })

  it('has a default y position', function () {
    const invader = new Invader(game, { x: 10, y: 5})
    assert.equal(invader.position.y, 5)
  })

  it('has default x position', function () {
    const invader = new Invader(game, { x: 10, y: 5})
    assert.equal(invader.position.x, 10)
  })

})
