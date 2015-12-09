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

  it('should initialize center x coordinate within range of board width', function() {
    let meteor = new Meteor(this.board);
    assert.isAbove(meteor.center.x, 0);
    assert.isBelow(meteor.center.x, this.board.width);
  });

  it('should initialize center y coordinate at top of the board', function() {
    let meteor = new Meteor(this.board);
    assert.equal(meteor.center.y, 0 - (meteor.size.height / 2));
  });

  it('should have a height and width between 16 and 41 pixels', function() {
    let meteor = new Meteor(this.board);
    assert.isAbove(meteor.size.width, 15);
    assert.isBelow(meteor.size.width, 42);
    assert.isAbove(meteor.size.height, 15);
    assert.isBelow(meteor.size.height, 42);
  });

  it('should be included in the board\'s array of meteor objects', function() {
    let meteor = new Meteor(this.board);
    assert.include(this.board.meteors, meteor);
  });
});
