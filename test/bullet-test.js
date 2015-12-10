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

    it('should be included in the board\'s array of bullets', function() {
      let bullet = new Bullet(this.board);
      assert.include(this.board.bullets, bullet);
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
      let xRange = bullet.range().xmax - bullet.range().xmin;
      let yRange = bullet.range().ymax - bullet.range().ymin;

      assert.equal(bullet.range().xmin, bullet.center.x - (bullet.size.width / 2));
      assert.equal(bullet.range().xmax, bullet.center.x + (bullet.size.width / 2));
      assert.equal(xRange, bullet.size.width);
      assert.equal(bullet.range().ymin, bullet.center.y - (bullet.size.height / 2));
      assert.equal(bullet.range().ymax, bullet.center.y + (bullet.size.height / 2));
      assert.equal(yRange, bullet.size.height);
    });

    it('should have a collision range that changes as the bullet moves', function() {
      let bullet = new Bullet(this.board);
      let velocity = bullet.velocity.y;
      let beforeMoveXMin = bullet.range().xmin;
      let beforeMoveXMax = bullet.range().xmax;
      let beforeMoveYMin = bullet.range().ymin;
      let beforeMoveYMax = bullet.range().ymax;
      let beforeMoveXRange = bullet.range().xmax - bullet.range().xmin;
      let beforeMoveYRange = bullet.range().ymax - bullet.range().ymin;

      bullet.moveUp();

      let afterMoveXMin = bullet.range().xmin;
      let afterMoveXMax = bullet.range().xmax;
      let afterMoveYMin = bullet.range().ymin;
      let afterMoveYMax = bullet.range().ymax;
      let afterMoveXRange = bullet.range().xmax - bullet.range().xmin;
      let afterMoveYRange = bullet.range().ymax - bullet.range().ymin;

      assert.equal(beforeMoveXMin, afterMoveXMin);
      assert.equal(beforeMoveXMax, afterMoveXMax);
      assert.equal(beforeMoveYMin + velocity, afterMoveYMin);
      assert.equal(beforeMoveYMax + velocity, afterMoveYMax);
      assert.equal(beforeMoveXRange, afterMoveXRange);
      assert.equal(beforeMoveYRange, afterMoveYRange);
    });

    // it('should return true if it has had a collision with an object where part of the X and part of the Y range is within the bullets X and Y range', function() {
    //   let bullet = new Bullet(this.board);
    //   let objectRange = {
    //     xmin: bullet.range().xmin + bullet.size.width / 5,
    //     xmax: bullet.range().xmax + 2 * bullet.size.width,
    //     ymin: bullet.range().ymin + bullet.size.height / 5,
    //     ymax: bullet.range().ymax + 2 * bullet.size.height
    //   };
    //
    //   assert.isTrue(bullet.collisionWith(objectRange), 'the bullet and object haven\'t collided');
    // });
    //
    // it('should return false if the object\'s Y range is not within the bullet\'s Y range, but the X range is', function() {
    //   let bullet = new Bullet(this.board);
    //   let objectRange = {
    //     xmin: bullet.range().xmin + bullet.size.width / 5,
    //     xmax: bullet.range().xmax - bullet.size.width / 5,
    //     ymin: bullet.range().ymin + 2 * bullet.size.height,
    //     ymax: bullet.range().ymax + 5 * bullet.size.height
    //   };
    //
    //   assert.isFalse(bullet.collisionWith(objectRange), 'the bullet and object have collided');
    // });
    //
    // it('should return false if the object\'s X range is not within the bullet\'s X range, but the Y range is', function() {
    //   let bullet = new Bullet(this.board);
    //   let objectRange = {
    //     xmin: bullet.range().xmin + 2 * bullet.size.width,
    //     xmax: bullet.range().xmax + 5 * bullet.size.width,
    //     ymin: bullet.range().ymin + bullet.size.height / 5,
    //     ymax: bullet.range().ymax - bullet.size.height / 5
    //   };
    //
    //   assert.isFalse(bullet.collisionWith(objectRange), 'the bullet and object have collided');
    // });
  });
});
