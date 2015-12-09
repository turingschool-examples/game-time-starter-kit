const chai = require('chai');
const assert = chai.assert;

const Board = require('../lib/board');
const Meteor = require('../lib/meteor');

describe('Meteor', function() {
  beforeEach(function() {
    this.board = new Board();
  });

  it('should instantiate a new meteor', function() {
    let meteor = new Meteor(this.board);
    assert.isObject(meteor);
  });

  it('should reference the board object passed as the first parameter', function() {
    let meteor = new Meteor(this.board);
    assert.equal(meteor.board, this.board);
  });

  it('should initialize x coordinate within range of board width', function() {
    let meteor = new Meteor(this.board);
    assert.isAbove(meteor.x, 0);
    assert.isBelow(meteor.x, this.board.width);
  });

  it('should initialize y coordinate at top of the board', function() {
    let meteor = new Meteor(this.board);
    assert.equal(meteor.y, 0);
  });

  it('should have an x coordinate passed as the second arguement', function() {
    let meteor = new Meteor(this.board, 22);
    assert.equal(meteor.x, 22);
  });

  it('should have a Y coordinate passed as the third arguement', function() {
    let meteor = new Meteor(this.board, 22, 40);
    assert.equal(meteor.y, 40);
  });

  it('should be included in the board\'s array of meteor objects', function() {
    let meteor = new Meteor(this.board);
    assert.include(this.board.meteors, meteor);
  });
});
