var randomWidth = Math.floor(Math.random() * 25) + 16;
var randomHeight = Math.floor(Math.random() * 25) + 16;
var randomVelocity = Math.floor(Math.random() * 3) + 1;

function Meteor(board) {
  this.board = board;

  var randomXPosition = Math.floor(Math.random() * this.board.width);
  var randomVelocity = Math.floor(Math.random() * 3) + 1;

  this.size = { width: randomWidth, height: randomHeight};
  this.center = { x: randomXPosition, y: 0 - (this.size.height / 2) };
  this.velocity = { x: 0, y: randomVelocity };
  this.active = true;
  this.board.meteors.push(this);
}

Meteor.prototype.moveDown = function() {
  this.center.y += this.velocity.y;
}

module.exports = Meteor;
