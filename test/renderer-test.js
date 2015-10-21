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

  describe('renderBoard', function () {

    it('should have a renderBoard method', function () {
      let board = new Board();
      let renderer = new Renderer(board);      

      assert(renderer.renderBoard);
    });

    it('should render with a class of board', function () {
      let board = new Board();
      let renderer = new Renderer(board);      
      let renderedBoard = renderer.renderBoard();

      assert.equal(renderedBoard.length, 1);
      assert.equal(renderedBoard[0].className, 'board');
    });

    it('should render with a div element with the class of grid-container', function () {
      let board = new Board();
      let renderer = new Renderer(board);
      let renderedBoard = renderer.renderBoard();

      assert.equal(renderedBoard.find('.grid-container').length, 1)
    });

    it('should render with a div element with the class of tile-container', function () {
      let board = new Board();
      let renderer = new Renderer(board);
      let renderedBoard = renderer.renderBoard();

      assert.equal(renderedBoard.find('.tile-container').length, 1)
    });

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

      assert.equal(container.find('.board').length, 1);
    });

  });

});
