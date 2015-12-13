const chai = require('chai');
const assert = chai.assert;

const Board = require('../lib/board');
const Player = require('../lib/player');

describe('Board', function() {
  describe('when board is instantiated', function() {
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
      assert.equal(player.center.x, board.width / 2)
      assert.equal(player.center.y, board.height - 10)
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
      assert.isAbove(meteor.center.x, 0);
      assert.isBelow(meteor.center.x, board.width);
      assert.equal(meteor.center.y, 0 - (meteor.size.height / 2));
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
      assert.equal(bullet.center.x, player.center.x);
      assert.equal(bullet.center.y, player.center.y - (player.size.height / 2) - 1);
    });
  });

  describe('when bullets collide with meteors', function() {
    it('the board removes a single bullet and single meteor from the meteors and bullets collection, but leaves player', function(){
      let board  = new Board();
      let player = board.addPlayer();
      let bullet = board.addBullet();
      let meteor = board.addMeteor();

      assert.equal(board.bullets.length, 1)
      assert.equal(board.meteors.length, 1)

      meteor.center.x = 70;
      meteor.center.y = 70;
      bullet.center.x = 70;
      bullet.center.y = 70;

      board.removeInActiveObjects();

      assert.equal(board.bullets.length, 0)
      assert.equal(board.meteors.length, 0)
      assert.equal(board.players.length, 1)
    });

    it('removes only bullet and meteor, when meteor is in the same location as player', function(){
      let board  = new Board();
      let player = board.addPlayer();
      let bullet = board.addBullet();
      let meteor = board.addMeteor();

      assert.equal(board.bullets.length, 1)
      assert.equal(board.meteors.length, 1)

      meteor.center.x = 70;
      meteor.center.y = 70;
      bullet.center.x = 70;
      bullet.center.y = 70;
      player.center.x = 70;
      player.center.y = 70;

      board.removeInActiveObjects();

      assert.equal(board.bullets.length, 0)
      assert.equal(board.meteors.length, 0)
      assert.equal(board.players.length, 1)
    });

    it('removes correct bullet and meteor', function(){
      let board  = new Board();
      let player = board.addPlayer();
      let bullet1 = board.addBullet();
      let meteor1 = board.addMeteor();
      let bullet2 = board.addBullet();
      let meteor2 = board.addMeteor();
      let bullet3 = board.addBullet();
      let meteor3 = board.addMeteor();

      assert.equal(board.bullets.length, 3)
      assert.equal(board.meteors.length, 3)
      assert.equal(board.players.length, 1)

      meteor1.center.x = 70;
      meteor1.center.y = 70;
      bullet1.center.x = 10;
      bullet1.center.y = 10;

      meteor2.center.x = 300;
      meteor2.center.y = 300;
      bullet2.center.x = 310;
      bullet2.center.y = 310;

      meteor3.center.x = 150;
      meteor3.center.y = 150;
      bullet3.center.x = 100;
      bullet3.center.y = 100;

      board.removeInActiveObjects();

      assert.equal(board.bullets.length, 2)
      assert.equal(board.meteors.length, 2)
      assert.equal(board.players.length, 1)
      assert.equal(board.bullets[0], bullet1)
      assert.equal(board.meteors[0], meteor1)
      assert.equal(board.bullets[1], bullet3)
      assert.equal(board.meteors[1], meteor3)
      assert.equal(board.players[0], player)
    });
  });

  describe('when player collides with meteor', function() {
    it('the board removes the player and meteor from the player and meteor collections, with no bullet objects', function(){
      let board = new Board();
      let player = board.addPlayer();
      let meteor = board.addMeteor();

      assert.equal(board.players.length, 1)
      assert.equal(board.meteors.length, 1)

      meteor.center.x = 70;
      meteor.center.y = 70;
      player.center.x = 70;
      player.center.y = 70;

      board.removeInActiveObjects();

      assert.equal(board.players.length, 0)
      assert.equal(board.meteors.length, 0)
    });
    it('the board removes the first player and meteor from the player and meteor collections', function(){
      let board = new Board();
      let player1 = board.addPlayer();
      let player2 = board.addPlayer();
      let meteor = board.addMeteor();

      assert.equal(board.players.length, 2)
      assert.equal(board.meteors.length, 1)

      meteor.center.x = 70;
      meteor.center.y = 70;
      player1.center.x = 70;
      player1.center.y = 70;

      board.removeInActiveObjects();

      assert.equal(board.players.length, 1)
      assert.equal(board.players[0], player2)
      assert.equal(board.meteors.length, 0)
    });

    it('should not return an exception when no players are left', function(){
      let board = new Board();
      let player1 = board.addPlayer();
      let meteor1 = board.addMeteor();
      let meteor2 = board.addMeteor();

      assert.equal(board.players.length, 1)
      assert.isTrue(meteor1.active)
      assert.isTrue(meteor2.active)

      meteor1.center.x = 70;
      meteor1.center.y = 70;
      player1.center.x = 70;
      player1.center.y = 70;

      board.removeInActiveObjects();

      assert.equal(board.players.length, 0)
      assert.equal(board.meteors.length, 1)
      assert.isFalse(meteor1.active)
      assert.isTrue(meteor2.active)
    });
  });
});
