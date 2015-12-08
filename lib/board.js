function Board(width, height) {
  this.width = width || 1250;
  this.height = height || 600;
  this.meteors = [];
  this.player = [];
}

module.exports = Board;
