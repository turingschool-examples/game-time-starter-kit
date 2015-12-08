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
  })

  it('should initialize y coordinate at top of the board', function() {
    let meteor = new Meteor(this.board);
    assert.equal(meteor.y, 0);
  })
});
