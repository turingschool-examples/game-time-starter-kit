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

  it('should initialize at center x coordinate of player object center x coordinate', function() {
    let bullet = new Bullet(this.board);
    assert.equal(this.player.x, bullet.x);
  });

  it('should initialize at center y coordinate of player object center y coordinate', function() {
    let bullet = new Bullet(this.board);
    assert.equal(this.player.y, bullet.y);
  });

  it('should have a default size of 5 by 5 pixels', function() {
    let bullet = new Bullet(this.board);
    assert.equal(bullet.size.x, 5);
    assert.equal(bullet.size.y, 5);
  });
});
