const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Board = require('../lib/board');

describe('Player', function() {
  beforeEach(function() {
    this.board = new Board();
  });

  it('should instantiate a new player', function() {
    let player = new Player();
    assert.isObject(player);
  });

  it('should reference the board object passed as the first parameter', function() {
    let player = new Player(this.board);
    assert.equal(player.board, this.board);
  });

  it('should have an x coordinate', function() {
    let player = new Player(this.board, 10);
    assert.equal(player.x, 10);
  });

  it('should have a constant default y coordinate of zero', function() {
    let player = new Player(this.board, 0);
    assert.equal(player.y, 0);
  });
});
