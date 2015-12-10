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

  describe('collision', function() {
    it('should have a collision range', function() {
      let bullet = new Bullet(this.board);
      let xRange = bullet.collisionRange().xmax - bullet.collisionRange().xmin;
      let yRange = bullet.collisionRange().ymax - bullet.collisionRange().ymin;

      assert.equal(bullet.collisionRange().xmin, bullet.center.x - (bullet.size.width / 2));
      assert.equal(bullet.collisionRange().xmax, bullet.center.x + (bullet.size.width / 2));
      assert.equal(xRange, bullet.size.width);
      assert.equal(bullet.collisionRange().ymin, bullet.center.y - (bullet.size.height / 2));
      assert.equal(bullet.collisionRange().ymax, bullet.center.y + (bullet.size.height / 2));
      assert.equal(yRange, bullet.size.height);
    });

    it('should have a collision range that changes as the bullet moves', function() {
      let bullet = new Bullet(this.board);
      let velocity = bullet.velocity.y;
      let beforeMoveXMin = bullet.collisionRange().xmin;
      let beforeMoveXMax = bullet.collisionRange().xmax;
      let beforeMoveYMin = bullet.collisionRange().ymin;
      let beforeMoveYMax = bullet.collisionRange().ymax;
      let beforeMoveXRange = bullet.collisionRange().xmax - bullet.collisionRange().xmin;
      let beforeMoveYRange = bullet.collisionRange().ymax - bullet.collisionRange().ymin;

      bullet.moveUp();

      let afterMoveXMin = bullet.collisionRange().xmin;
      let afterMoveXMax = bullet.collisionRange().xmax;
      let afterMoveYMin = bullet.collisionRange().ymin;
      let afterMoveYMax = bullet.collisionRange().ymax;
      let afterMoveXRange = bullet.collisionRange().xmax - bullet.collisionRange().xmin;
      let afterMoveYRange = bullet.collisionRange().ymax - bullet.collisionRange().ymin;

      assert.equal(beforeMoveXMin, afterMoveXMin);
      assert.equal(beforeMoveXMax, afterMoveXMax);
      assert.equal(beforeMoveYMin + velocity, afterMoveYMin);
      assert.equal(beforeMoveYMax + velocity, afterMoveYMax);
      assert.equal(beforeMoveXRange, afterMoveXRange);
      assert.equal(beforeMoveYRange, afterMoveYRange);
    });

    xit('should return true if it has had a collision with a meteor', function() {
      let bullet = new Bullet(this.board);

    });
  });
});
