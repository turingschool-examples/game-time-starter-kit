const chai = require('chai');
const assert = chai.assert;

const Board = require('../lib/board');
const Meteor = require('../lib/meteor');

describe('Meteor', function() {
  beforeEach(function() {
    this.board = new Board();
  });

  describe('instantiation', function() {
    it('should instantiate a new meteor', function() {
      let meteor = new Meteor(this.board);
      assert.isObject(meteor);
    });

    it('should reference the board object passed as the first parameter', function() {
      let meteor = new Meteor(this.board);
      assert.equal(meteor.board, this.board);
    });

    it('should initialize center x coordinate within range of board width', function() {
      let meteor = new Meteor(this.board);
      assert.isAbove(meteor.center.x, 0);
      assert.isBelow(meteor.center.x, this.board.width);
    });

    it('should initialize center y coordinate at top of the board', function() {
      let meteor = new Meteor(this.board);
      assert.equal(meteor.center.y, 0 - (meteor.size.height / 2));
    });

    it('should have a height and width between 16 and 41 pixels', function() {
      let meteor = new Meteor(this.board);
      assert.isAbove(meteor.size.width, 15);
      assert.isBelow(meteor.size.width, 42);
      assert.isAbove(meteor.size.height, 15);
      assert.isBelow(meteor.size.height, 42);
    });

    it('should be included in the board\'s array of meteor objects', function() {
      let meteor = new Meteor(this.board);
      assert.include(this.board.meteors, meteor);
    });
  });

  describe('movement', function() {
    it('should have a random Y velocity between 1 and 4', function() {
      let meteor = new Meteor(this.board);
      assert.isAbove(meteor.velocity.y, 0);
      assert.isBelow(meteor.velocity.y, 5);
    });

    it('should move straight down from its starting position', function() {
      let meteor = new Meteor(this.board);
      let originalCenterX = meteor.center.x;
      let originalCenterY = meteor.center.y;

      meteor.moveDown();

      assert.equal(meteor.center.x, originalCenterX);
      assert.isAbove(meteor.center.y, originalCenterY);
    });
  });

  describe('collision', function() {
    it('should have a collision range', function() {
      let meteor = new Meteor(this.board);
      let xRange = meteor.range().xmax - meteor.range().xmin;
      let yRange = meteor.range().ymax - meteor.range().ymin;

      assert.equal(meteor.range().xmin, meteor.center.x - (meteor.size.width / 2));
      assert.equal(meteor.range().xmax, meteor.center.x + (meteor.size.width / 2));
      assert.equal(xRange, meteor.size.width);
      assert.equal(meteor.range().ymin, meteor.center.y - (meteor.size.height / 2));
      assert.equal(meteor.range().ymax, meteor.center.y + (meteor.size.height / 2));
      assert.equal(yRange, meteor.size.height);
    });

    it('should have a collision range that changes as the meteor moves', function() {
      let meteor = new Meteor(this.board);
      let velocity = meteor.velocity.y;
      let beforeMoveXMin = meteor.range().xmin;
      let beforeMoveXMax = meteor.range().xmax;
      let beforeMoveYMin = meteor.range().ymin;
      let beforeMoveYMax = meteor.range().ymax;
      let beforeMoveXRange = meteor.range().xmax - meteor.range().xmin;
      let beforeMoveYRange = meteor.range().ymax - meteor.range().ymin;

      meteor.moveDown();

      let afterMoveXMin = meteor.range().xmin;
      let afterMoveXMax = meteor.range().xmax;
      let afterMoveYMin = meteor.range().ymin;
      let afterMoveYMax = meteor.range().ymax;
      let afterMoveXRange = meteor.range().xmax - meteor.range().xmin;
      let afterMoveYRange = meteor.range().ymax - meteor.range().ymin;

      assert.equal(beforeMoveXMin, afterMoveXMin);
      assert.equal(beforeMoveXMax, afterMoveXMax);
      assert.equal(beforeMoveYMin + velocity, afterMoveYMin);
      assert.equal(beforeMoveYMax + velocity, afterMoveYMax);
      assert.equal(beforeMoveXRange, afterMoveXRange);
      assert.equal(beforeMoveYRange, afterMoveYRange);
    });

    it('should return true if it has had a collision with an object where part of the X and part of the Y range is within the meteor\'s X and Y range', function() {
      let meteor = new Meteor(this.board);
      let objectRange = {
        xmin: meteor.range().xmin + meteor.size.width / 5,
        xmax: meteor.range().xmax + 2 * meteor.size.width,
        ymin: meteor.range().ymin + meteor.size.height / 5,
        ymax: meteor.range().ymax + 2 * meteor.size.height
      };

      assert.isTrue(meteor.collisionWith(objectRange), 'the meteor and object haven\'t collided');
    });

    it('should return false if the object\'s Y range is not within the meteor\'s Y range, but the X range is', function() {
      let meteor = new Meteor(this.board);
      let objectRange = {
        xmin: meteor.range().xmin + meteor.size.width / 5,
        xmax: meteor.range().xmax - meteor.size.width / 5,
        ymin: meteor.range().ymin + 2 * meteor.size.height,
        ymax: meteor.range().ymax + 5 * meteor.size.height
      };

      assert.isFalse(meteor.collisionWith(objectRange), 'the meteor and object have collided');
    });

    it('should return false if the object\'s X range is not within the meteor\'s X range, but the Y range is', function() {
      let meteor = new Meteor(this.board);
      let objectRange = {
        xmin: meteor.range().xmin + 2 * meteor.size.width,
        xmax: meteor.range().xmax + 5 * meteor.size.width,
        ymin: meteor.range().ymin + meteor.size.height / 5,
        ymax: meteor.range().ymax - meteor.size.height / 5
      };

      assert.isFalse(meteor.collisionWith(objectRange), 'the meteor and object have collided');
    });
  });
});
