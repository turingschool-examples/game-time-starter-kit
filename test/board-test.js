const assert = require('assert');
const Board = require('../lib/board');
const Game = require('../lib/game');
const Tile = require('../lib/tile');

describe('the board', function () {
  it('should instantiate', function () {
    let board = new Board();

    assert(board);
  });

  it('should have a spaces property', function () {
    let board = new Board();

    assert(board.spaces)
  });

  it('spaces should be a four by four matrix', function () {
    let board = new Board();
    let spaces = board.spaces;
    let expected = [[null, null, null, null],
    [null, null, null, null],
    [null, null, null, null],
    [null, null, null, null]];

    assert.deepEqual(spaces, expected)
  });

  it('should accept a game as an argument', function () {
    let game = new Game();
    let board = new Board(game);

    assert.equal(board.game, game);
  });

  describe('freeSpaces', function () {

    it('should return an array of positions of available spaces', function () {
      let board = new Board('game');
      let freeSpaces = board.freeSpaces();

      // [ columnIndex, rowIndex ]
      let expected = [ [0, 0], [0, 1], [0, 2], [0, 3],
      [1, 0], [1, 1], [1, 2], [1, 3],
      [2, 0], [2, 1], [2, 2], [2, 3],
      [3, 0], [3, 1], [3, 2], [3, 3] ];

      assert.deepEqual(freeSpaces, expected);

    });

  });

  describe('addTile', function () {

    it('should add a tile to the board spaces collection', function () {
      let board = new Board('game');
      board.addTile();

      assert.equal(board.freeSpaces().length, 15);
    });
  });

  describe('addTwoTiles', function () {
    it('should add two tiles to the board', function () {
      let board = new Board('game');
      board.addTwoTiles();

      assert.equal(board.freeSpaces().length, 14);
    });

  });

  describe('insertTileAt', function () {
    it('should insert a tile at a given position on board', function () {
      let board = new Board('game');
      let tile = new Tile('position', board);
      board.insertTileAt([1, 1], tile);

      assert.deepEqual(tile.position, [1, 1]);
      assert.equal(board.spaces[1][1], tile);
    });
  });

  describe('shiftLeft', function () {
    it('should shift one tile to the left edge', function () {
      let board = new Board('game');
      let tile = new Tile('position', board);
      board.insertTileAt([0, 1], tile);


      board.shiftLeft();

      assert.deepEqual(tile.position, [0, 0]);
      assert.equal(board.spaces[0][0], tile);
    });

    it('should shift two tiles in the same row to the left', function () {
      let board = new Board('game');
      let tile1 = new Tile('position', board, 2);
      let tile2 = new Tile('position', board, 4);

      board.insertTileAt([1, 1], tile1);
      board.insertTileAt([1, 2], tile2);

      board.shiftLeft();

      assert.deepEqual(tile1.position, [1, 0]);
      assert.deepEqual(tile2.position, [1, 1]);
      assert.deepEqual(tile1.value, 2);
      assert.deepEqual(tile2.value, 4);
      assert.equal(board.spaces[1][0], tile1);
      assert.equal(board.spaces[1][1], tile2);
    });

    it('should shift two tiles in different rows to the left', function () {
      let board = new Board('game');
      let tile1 = new Tile('position', board, 2);
      let tile2 = new Tile('position', board, 2);

      board.insertTileAt([1, 1], tile1);
      board.insertTileAt([2, 1], tile2);

      board.shiftLeft();

      assert.deepEqual(tile1.position, [1, 0]);
      assert.deepEqual(tile2.position, [2, 0]);
      assert.deepEqual(tile1.value, 2);
      assert.deepEqual(tile2.value, 2);
      assert.equal(board.spaces[1][0], tile1);
      assert.equal(board.spaces[2][0], tile2);
    });

    it('should shift many tiles in different rows and columns to the left,', function () {
      let board = new Board('game');
      let tile1 = new Tile('position', board, 1);
      let tile2 = new Tile('position', board, 2);
      let tile3 = new Tile('position', board, 3);
      let tile4 = new Tile('position', board, 4);
      let tile5 = new Tile('position', board, 5);

      board.insertTileAt([1, 1], tile1);
      board.insertTileAt([2, 1], tile2);
      board.insertTileAt([0, 3], tile3);
      board.insertTileAt([3, 2], tile4);
      board.insertTileAt([3, 3], tile5);

      board.shiftLeft();

      assert.deepEqual(tile1.position, [1, 0]);
      assert.deepEqual(tile2.position, [2, 0]);
      assert.deepEqual(tile3.position, [0, 0]);
      assert.deepEqual(tile4.position, [3, 0]);
      assert.deepEqual(tile5.position, [3, 1]);
      assert.equal(tile1.value, 1);
      assert.equal(tile2.value, 2);
      assert.equal(tile3.value, 3);
      assert.equal(tile4.value, 4);
      assert.equal(tile5.value, 5);
      assert.equal(board.spaces[1][0], tile1);
      assert.equal(board.spaces[2][0], tile2);
      assert.equal(board.spaces[0][0], tile3);
      assert.equal(board.spaces[3][0], tile4);
      assert.equal(board.spaces[3][1], tile5);
    });
  });

  describe('collapse', function () {
    it('should collapse two tiles of equal value in the same row', function () {
      let board = new Board('game');
      let tile1 = new Tile('position', board, 2);
      let tile2 = new Tile('position', board, 2);

      board.insertTileAt([0, 2], tile1);
      board.insertTileAt([0, 3], tile2);
      board.shiftLeft();
      board.collapse();

      assert.deepEqual(tile1.position, [0, 0]);
      assert.equal(tile1.value, 4);
      assert.equal(board.freeSpaces().length, 15);
      assert.equal(board.spaces[0][0], tile1);
    });

    it('should collapse four tiles of equal value in the same row', function () {
      let board = new Board('game');
      let tile1 = new Tile('position', board, 2);
      let tile2 = new Tile('position', board, 2);
      let tile3 = new Tile('position', board, 2);
      let tile4 = new Tile('position', board, 2);

      board.insertTileAt([0, 0], tile1);
      board.insertTileAt([0, 1], tile2);
      board.insertTileAt([0, 2], tile3);
      board.insertTileAt([0, 3], tile4);
      board.shiftLeft();
      board.collapse();
      board.shiftLeft();

      assert.deepEqual(tile1.position, [0, 0]);
      assert.equal(tile1.value, 4);
      assert.deepEqual(tile3.position, [0, 1]);
      assert.equal(tile3.value, 4);
      assert.equal(board.freeSpaces().length, 14);
      assert.equal(board.spaces[0][0], tile1);
      assert.equal(board.spaces[0][1], tile3);
    });

    it('should collapse multiple tiles in different rows', function () {
      let board = new Board('game');
      let tile1 = new Tile('position', board, 2);
      let tile2 = new Tile('position', board, 2);
      let tile3 = new Tile('position', board, 4);
      let tile4 = new Tile('position', board, 4);

      board.insertTileAt([0, 1], tile1);
      board.insertTileAt([0, 2], tile2);
      board.insertTileAt([1, 1], tile3);
      board.insertTileAt([1, 3], tile4);
      board.shiftLeft();
      board.collapse();
      board.shiftLeft();

      assert.deepEqual(tile1.position, [0, 0]);
      assert.equal(tile1.value, 4);
      assert.deepEqual(tile3.position, [1, 0]);
      assert.equal(tile3.value, 8);
      assert.equal(board.freeSpaces().length, 14);
      assert.equal(board.spaces[0][0], tile1);
      assert.equal(board.spaces[1][0], tile3);
    });

    it('should collapse multiple tiles in different rows', function () {
      let board = new Board('game');
      let tile1 = new Tile('position', board, 2);
      let tile2 = new Tile('position', board, 3);
      let tile3 = new Tile('position', board, 4);
      let tile4 = new Tile('position', board, 2);
      let tile5 = new Tile('position', board, 4);

      board.insertTileAt([0, 1], tile1);
      board.insertTileAt([0, 2], tile2);
      board.insertTileAt([1, 1], tile3);
      board.insertTileAt([1, 2], tile4);
      board.insertTileAt([1, 3], tile5);
      board.shiftLeft();
      board.collapse();
      board.shiftLeft();

      assert.deepEqual(tile1.position, [0, 0]);
      assert.deepEqual(tile2.position, [0, 1]);
      assert.deepEqual(tile3.position, [1, 0]);
      assert.deepEqual(tile4.position, [1, 1]);
      assert.deepEqual(tile5.position, [1, 2]);
      assert.equal(tile1.value, 2);
      assert.equal(tile2.value, 3);
      assert.equal(tile3.value, 4);
      assert.equal(tile4.value, 2);
      assert.equal(tile5.value, 4);
      assert.equal(board.freeSpaces().length, 11);
      assert.equal(board.spaces[0][0], tile1);
      assert.equal(board.spaces[0][1], tile2);
      assert.equal(board.spaces[1][0], tile3);
      assert.equal(board.spaces[1][1], tile4);
      assert.equal(board.spaces[1][2], tile5);
    });

  });

  describe('moveLeft', function () {
    it('should collapse two tiles of equal value in row with four tiles', function () {
      let board = new Board('game');
      let tile1 = new Tile('position', board, 2);
      let tile2 = new Tile('position', board, 4);
      let tile3 = new Tile('position', board, 4);
      let tile4 = new Tile('position', board, 2);

      board.insertTileAt([0, 0], tile1);
      board.insertTileAt([0, 1], tile2);
      board.insertTileAt([0, 2], tile3);
      board.insertTileAt([0, 3], tile4);
      board.moveLeft();

      assert.deepEqual(tile1.position, [0, 0]);
      assert.deepEqual(tile2.position, [0, 1]);
      assert.deepEqual(tile4.position, [0, 2]);
      assert.equal(tile1.value, 2);
      assert.equal(tile2.value, 8);
      assert.equal(tile4.value, 2);
      assert.equal(board.freeSpaces().length, 13);
      assert.equal(board.spaces[0][0], tile1);
      assert.equal(board.spaces[0][1], tile2);
      assert.equal(board.spaces[0][2], tile4);
    });

  });

});
