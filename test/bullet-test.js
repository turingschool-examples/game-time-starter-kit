const chai = require('chai');
const assert = chai.assert;

const Board = require('../lib/board');
const Bullet = require('../lib/bullet');

describe('Bullet', function() {
  beforeEach(function() {
    this.board = new Board();
    this.player = this.board.addPlayer();
  });

  describe('instantiation', function() {
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
      assert.equal(bullet.size.width, 5);
      assert.equal(bullet.size.height, 5);
    });

    it('should have knowledge of its impact coordinates based on its position and size', function() {
      let bullet = new Bullet(this.board);
      assert.equal(bullet.impactCoordinates.xmin, bullet.center.x - (bullet.size.width / 2));
      assert.equal(bullet.impactCoordinates.xmax, bullet.center.x + (bullet.size.width / 2));
      assert.equal(bullet.impactCoordinates.y, bullet.center.y - (bullet.size.height / 2));
    });
  });

  describe('movement', function() {
    it('should have a constant Y velocity of -6', function() {
      let bullet = new Bullet(this.board);

      assert.equal(bullet.velocity.y, -6);
    });

    it('should move straight down from its starting position', function() {
      let bullet = new Bullet(this.board);
      let originalCenterX = bullet.center.x;
      let originalCenterY = bullet.center.y;

      bullet.moveUp();

      assert.equal(bullet.center.x, originalCenterX);
      assert.equal(bullet.center.y, originalCenterY - 6);
    });
  });
});
