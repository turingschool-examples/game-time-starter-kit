const chai = require('chai');
const assert = chai.assert;

const Board = require('../lib/board');

describe('Board', function() {
  it('should instantiate a new board', function() {
    let board = new Board();
    assert.isObject(board);
  });

  it('should have a width dimension as first parameter', function() {
    let board = new Board(350);
    assert.equal(board.width, 350);
  });

  it('should have a height dimension as second parameter', function() {
    let board = new Board(1250, 500);
    assert.equal(board.height, 500);
  });

  it('should default to 1250 pixels wide', function() {
    let board = new Board();
    assert.equal(board.width, 1250);
  });

  it('should default to 600 pixels tall', function() {
    let board = new Board();
    assert.equal(board.height, 600);
  });

  it('should start with an empty array of meteor objects', function() {
    let board = new Board();
    assert.isArray(board.meteors);
  });

  it('should start with an empty player object array', function() {
    let board = new Board();
    assert.isArray(board.players);
  });

  describe('when player is instantiated', function() {
    it('the board should add the player to its player array', function() {
      let board = new Board();
      let player = board.addPlayer();
      assert.include(board.players, player);
    });

    it('the board should add the player to the bottom middle', function() {
      let board = new Board();
      let player = board.addPlayer();
      assert.equal(player.x, board.width / 2)
      assert.equal(player.y, board.height - 10)
    });
  });

  describe('when meteor is instantiated', function() {
    it('the board should add the meteor to its meteors array', function() {
      let board = new Board();
      let meteor = board.addMeteor();
      assert.include(board.meteors, meteor);
    });

    it('the board should add the meteor to the top of the board within board\'s width', function() {
      let board = new Board();
      let meteor = board.addMeteor();
      assert.isAbove(meteor.x, 0);
      assert.isBelow(meteor.x, board.width);
      assert.equal(meteor.y, 0)
    });
  });

  describe('when bullet is instantiated', function() {
    it('the board should add the bullet to its bullets array', function() {
      let board = new Board();
      board.addPlayer();
      let bullet = board.addBullet();
      assert.include(board.bullets, bullet);
    });

    it('the board should add the bullet to the same location as the player', function() {
      let board = new Board();
      let player = board.addPlayer();
      let bullet = board.addBullet();
      assert.equal(bullet.x, player.x);
      assert.equal(bullet.y, player.y);
    });
  });
});
