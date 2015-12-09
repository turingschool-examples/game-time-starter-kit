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
      let player = new Player(this.board, 0);
      assert.equal(player.center.y, this.board.height-10);
    });

    it('should have a default size of 16 by 16 pixels', function() {
      let player = new Player(this.board);
      assert.equal(player.size.x, 16);
      assert.equal(player.size.y, 16);
    });

    it('should be included in the board\'s array of players', function() {
      let player = new Player(this.board, 0);
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
});
