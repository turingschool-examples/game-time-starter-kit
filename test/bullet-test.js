const chai = require('chai');
const assert = chai.assert;

const Board = require('../lib/board');
const Bullet = require('../lib/bullet');

describe('Bullet', function() {
  beforeEach(function() {
    this.board = new Board();
    this.player = this.board.addPlayer();
  });

  it('should instantiate a new bullet object', function() {
    let bullet = new Bullet(this.board);
    assert.isObject(bullet);
  });

  it('should reference board object passed as the first parameter', function() {
    let bullet = new Bullet(this.board);
    assert.equal(bullet.board, this.board);
  });

  it('should initialize at x coordinate of player object x coordinate', function() {
    let bullet = new Bullet(this.board);
    assert.equal(this.player.x, bullet.x);
  });

  it('should initialize at y coordinate of player object y coordinate', function() {
    let bullet = new Bullet(this.board);
    assert.equal(this.player.y, bullet.y);
  });
});
