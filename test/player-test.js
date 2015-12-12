const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Board = require('../lib/board');

describe('Player', function() {
  beforeEach(function() {
    this.board = new Board();
  });

  it('should instantiate a new player', function() {
    let player = new Player(this.board);
    assert.isObject(player);
  });

  it('should reference the board object passed as the first parameter', function() {
    let player = new Player(this.board);
    assert.equal(player.board, this.board);
  });

  it('should have an x coordinate passed as the second argument', function() {
    let player = new Player(this.board, 10);
    assert.equal(player.x, 10);
  });

  it('should have a default x coordinate of half the board width', function() {
    let player = new Player(this.board);
    assert.equal(player.x, this.board.width / 2);
  });

  it('should have a constant y coordinate ten less than board height', function() {
    let player = new Player(this.board, 0);
    assert.equal(player.y, this.board.height-10);
  });

  it('should be included in the board\'s array of players', function() {
    let player = new Player(this.board, 0);
    assert.include(this.board.players, player);
  });
});
