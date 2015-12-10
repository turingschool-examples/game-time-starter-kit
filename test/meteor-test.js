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
      let xRange = meteor.collisionRange().xmax - meteor.collisionRange().xmin;
      let yRange = meteor.collisionRange().ymax - meteor.collisionRange().ymin;

      assert.equal(meteor.collisionRange().xmin, meteor.center.x - (meteor.size.width / 2));
      assert.equal(meteor.collisionRange().xmax, meteor.center.x + (meteor.size.width / 2));
      assert.equal(xRange, meteor.size.width);
      assert.equal(meteor.collisionRange().ymin, meteor.center.y - (meteor.size.height / 2));
      assert.equal(meteor.collisionRange().ymax, meteor.center.y + (meteor.size.height / 2));
      assert.equal(yRange, meteor.size.height);
    });

    it('should have a collision range that changes as the meteor moves', function() {
      let meteor = new Meteor(this.board);
      let velocity = meteor.velocity.y;
      let beforeMoveXMin = meteor.collisionRange().xmin;
      let beforeMoveXMax = meteor.collisionRange().xmax;
      let beforeMoveYMin = meteor.collisionRange().ymin;
      let beforeMoveYMax = meteor.collisionRange().ymax;
      let beforeMoveXRange = meteor.collisionRange().xmax - meteor.collisionRange().xmin;
      let beforeMoveYRange = meteor.collisionRange().ymax - meteor.collisionRange().ymin;

      meteor.moveDown();

      let afterMoveXMin = meteor.collisionRange().xmin;
      let afterMoveXMax = meteor.collisionRange().xmax;
      let afterMoveYMin = meteor.collisionRange().ymin;
      let afterMoveYMax = meteor.collisionRange().ymax;
      let afterMoveXRange = meteor.collisionRange().xmax - meteor.collisionRange().xmin;
      let afterMoveYRange = meteor.collisionRange().ymax - meteor.collisionRange().ymin;

      assert.equal(beforeMoveXMin, afterMoveXMin);
      assert.equal(beforeMoveXMax, afterMoveXMax);
      assert.equal(beforeMoveYMin + velocity, afterMoveYMin);
      assert.equal(beforeMoveYMax + velocity, afterMoveYMax);
      assert.equal(beforeMoveXRange, afterMoveXRange);
      assert.equal(beforeMoveYRange, afterMoveYRange);
    });
  });
});
