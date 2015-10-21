const assert = require('assert');
const Renderer = require('../lib/renderer');
const Board = require('../lib/board');
const $ = require('jquery');
//const sinon = require('sinon');

describe('Renderer', function () {
  it('should exist', function () {
    let renderer = new Renderer();

    assert(renderer);
  });

  it('has a board object', function () {
    let board = new Board();
    let renderer = new Renderer(board);
    
    assert(Board.prototype.isPrototypeOf(renderer.board));
  });

  describe('renderTiles', function () {

    it('should have a renderTiles method', function () {
      let board = new Board();
      let renderer = new Renderer(board);      

      assert(renderer.renderTiles);
    });

    it('should render with a class of tile', function () {
      let board = new Board();
      let renderer = new Renderer(board);      
      let renderedBoard = renderer.renderTiles();

      assert.equal(renderedBoard.length, 1);
      assert.equal(renderedBoard[0].className, 'tile');
    });

  });

  describe.skip('renderTile', function () {
    // code goes here
  });

  describe('renderBoardAndAppendTo', function () {

    beforeEach(function () {
      this.container = $('<div></div>').addClass('container');
    });

    it('should have a renderBoardAndAppendTo', function () {
      let board = new Board();
      let renderer = new Renderer(board);      
      
      assert(renderer.renderBoardAndAppendTo);
    });

    it('should renderBoardAndAppendTo a target', function () {
      let board = new Board();
      let renderer = new Renderer(board);      
      let container = this.container;
      renderer.renderBoardAndAppendTo(container);

      assert.equal(container.find('.tile').length, 1);
    });

  });

});
