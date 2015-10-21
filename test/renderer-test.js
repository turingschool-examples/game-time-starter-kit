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

    //beforeEach(function () {
    //  sinon.spy(Renderer.prototype, 'drawGrid')
    //});

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

    it('has a canvas element with a size of 500 X 500', function () {
      let board = new Board();
      let renderer = new Renderer(board);
      let renderedBoard = renderer.renderBoard();

      assert.equal(renderedBoard.find('#grid').length, 1);
      assert.equal(renderedBoard.find('#grid')[0].width, 500);
      assert.equal(renderedBoard.find('#grid')[0].height, 500);
    });

    //afterEach(function () {
    //  Renderer.prototype.drawGrid.restore();
    //});

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
