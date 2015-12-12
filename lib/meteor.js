function Meteor(board, x, y) {
  this.board = board;
  this.x = x || Math.floor(Math.random() * this.board.width);
  this.y = y || 0;
  this.board.meteors.push(this);
}

module.exports = Meteor;
