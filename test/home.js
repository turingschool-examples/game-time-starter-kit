const chai = require('chai');
const assert = chai.assert;
const render = require("../lib/render");
const $ = require('jquery');

describe('home', function () {
  var $board = $("#board");
  var game = {
    width: 450,
    height: 450,
    board: $board[0].getContext("2d"),
    score: 0,
    cellSize: 10
  };

  it('has a board', function{
    assert_equal(450, game.height);
    assert_equal(450, game.width);
  });
});
