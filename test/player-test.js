const chai = require('chai');
const assert = chai.assert;

const Player = require('../lib/player');
const Board = require('../lib/board');

describe('Player', function() {
  beforeEach(function() {
    this.board = new Board();
  });

  describe('instantiation', function() {
    it('should instantiate a new player', function() {
      let player = new Player(this.board);
      assert.isObject(player);
    });

    it('should reference the board object passed as the first parameter', function() {
      let player = new Player(this.board);
      assert.equal(player.board, this.board);
    });

    it('should have a default center x coordinate of half the board width', function() {
      let player = new Player(this.board);
      assert.equal(player.center.x, this.board.width / 2);
    });

    it('should have a constant center y coordinate ten less than board height', function() {
      let player = new Player(this.board);
      assert.equal(player.center.y, this.board.height-10);
    });

    it('should have a default size of 16 by 16 pixels', function() {
      let player = new Player(this.board);
      assert.equal(player.size.width, 16);
      assert.equal(player.size.height, 16);
    });

    it('should be included in the board\'s array of players', function() {
      let player = new Player(this.board);
      assert.include(this.board.players, player);
    });
  });

  describe('movement', function() {
    it('should move left when left arrow is pressed', function() {
      let player = new Player(this.board);
      let originalCenterX = player.center.x;

      player.moveLeft();

      assert.equal(player.center.x, originalCenterX - 7);
    });

    it('should move right when right arrow is pressed', function() {
      let player = new Player(this.board);
      let originalCenterX = player.center.x;

      player.moveRight();

      assert.equal(player.center.x, originalCenterX + 7);
    });
  });

  xdescribe('collision', function() {
    it('should have a collision range', function() {
      let player = new Player(this.board);
      let xRange = player.range().xmax - player.range().xmin;
      let yRange = player.range().ymax - player.range().ymin;

      assert.equal(player.range().xmin, player.center.x - (player.size.width / 2));
      assert.equal(player.range().xmax, player.center.x + (player.size.width / 2));
      assert.equal(xRange, player.size.width);
      assert.equal(player.range().ymin, player.center.y - (player.size.height / 2));
      assert.equal(player.range().ymax, player.center.y + (player.size.height / 2));
      assert.equal(yRange, player.size.height);
    });

    it('should have a collision range that changes as the player moves left', function() {
      let player = new Player(this.board);
      let beforeMoveXMin = player.range().xmin;
      let beforeMoveXMax = player.range().xmax;
      let beforeMoveYMin = player.range().ymin;
      let beforeMoveYMax = player.range().ymax;
      let beforeMoveXRange = player.range().xmax - player.range().xmin;
      let beforeMoveYRange = player.range().ymax - player.range().ymin;

      let velocity = player.velocity.left;

      player.moveLeft();

      let afterMoveXMin = player.range().xmin;
      let afterMoveXMax = player.range().xmax;
      let afterMoveYMin = player.range().ymin;
      let afterMoveYMax = player.range().ymax;
      let afterMoveXRange = player.range().xmax - player.range().xmin;
      let afterMoveYRange = player.range().ymax - player.range().ymin;

      assert.equal(beforeMoveYMin, afterMoveYMin);
      assert.equal(beforeMoveYMax, afterMoveYMax);
      assert.equal(beforeMoveXMin + velocity, afterMoveXMin);
      assert.equal(beforeMoveXMax + velocity, afterMoveXMax);
      assert.equal(beforeMoveXRange, afterMoveXRange);
      assert.equal(beforeMoveYRange, afterMoveYRange);
    });

    it('should have a collision range that changes as the player moves right', function() {
      let player = new Player(this.board);
      let beforeMoveXMin = player.range().xmin;
      let beforeMoveXMax = player.range().xmax;
      let beforeMoveYMin = player.range().ymin;
      let beforeMoveYMax = player.range().ymax;
      let beforeMoveXRange = player.range().xmax - player.range().xmin;
      let beforeMoveYRange = player.range().ymax - player.range().ymin;

      let velocity = player.velocity.right;

      player.moveRight();

      let afterMoveXMin = player.range().xmin;
      let afterMoveXMax = player.range().xmax;
      let afterMoveYMin = player.range().ymin;
      let afterMoveYMax = player.range().ymax;
      let afterMoveXRange = player.range().xmax - player.range().xmin;
      let afterMoveYRange = player.range().ymax - player.range().ymin;

      assert.equal(beforeMoveYMin, afterMoveYMin);
      assert.equal(beforeMoveYMax, afterMoveYMax);
      assert.equal(beforeMoveXMin + velocity, afterMoveXMin);
      assert.equal(beforeMoveXMax + velocity, afterMoveXMax);
      assert.equal(beforeMoveXRange, afterMoveXRange);
      assert.equal(beforeMoveYRange, afterMoveYRange);
    });
  });
});
