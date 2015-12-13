const assert = require('assert');
const Renderer = require('../lib/renderer');
const Game = require('../lib/game');
const Tile = require('../lib/tile');
const $ = require('jquery');

describe('Renderer', function () {
  it('should exist', function () {
    let renderer = new Renderer();

    assert(renderer);
  });

  it('has a game object', function () {
    let game = new Game();
    let renderer = new Renderer(game);
    
    assert(Game.prototype.isPrototypeOf(renderer.game));
  });

  describe('addTilesTo', function () {
    it('adds class and appends value to correct cell-container', function () {
      let game = new Game();
      let renderer = new Renderer(game);
      let board = game.board;
      let tile = new Tile([0, 0], board, 2);
      let container = $('<div></div>').addClass('container');
      let cellContainer = $('<div></div>').attr('id', '0-0');

      board.insertTileAt([0, 0], tile);
      container.append(cellContainer);

      renderer.addTilesTo(container);
      
      assert.equal(cellContainer.text(), "2");
      assert.equal(container.find('#0-0').attr('class'), 'tile-2');
    });

    it('adds class and appends value for multiple tiles', function () {
      let game = new Game();
      let renderer = new Renderer(game);
      let board = game.board;

      let tile1 = new Tile([0, 0], board, 2);
      let tile2 = new Tile([1, 1], board, 4);
      let tile3 = new Tile([2, 2], board, 8);

      let container = $('<div></div>').addClass('container');
      let cellContainer1 = $('<div></div>').attr('id', '0-0');
      let cellContainer2 = $('<div></div>').attr('id', '1-1');
      let cellContainer3 = $('<div></div>').attr('id', '2-2');     

      board.insertTileAt([0, 0], tile1);
      board.insertTileAt([1, 1], tile2);
      board.insertTileAt([2, 2], tile3);

      container.append(cellContainer1)
        .append(cellContainer2)
        .append(cellContainer3);

      renderer.addTilesTo(container);
      
      assert.equal(cellContainer1.text(), "2");
      assert.equal(container.find('#0-0').attr('class'), 'tile-2');
      assert.equal(cellContainer2.text(), "4");
      assert.equal(container.find('#1-1').attr('class'), 'tile-4');
      assert.equal(cellContainer3.text(), "8");
      assert.equal(container.find('#2-2').attr('class'), 'tile-8');
    });
  });
});
