const Board = require('./board');
const Renderer = require('./renderer');
require('jquery');

var game = function () {
  var board = new Board();
  var renderer = new Renderer(board);

  renderer.renderBoardAndAppendTo(".container");
};

module.exports = game;