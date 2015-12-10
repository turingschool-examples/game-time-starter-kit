function Meteor(board) {
  var randomWidth = Math.floor(Math.random() * 25) + 16;
  var randomHeight = Math.floor(Math.random() * 25) + 16;

  this.board = board;
  var randomXPosition = Math.floor(Math.random() * this.board.width);
  var randomVelocity = Math.floor(Math.random() * 3) + 1;

  this.size = { width: randomWidth, height: randomHeight};
  this.center = {
                  x: randomXPosition,
                  y: 0 - (this.size.height / 2)
                };

  this.impactCoordinates = {
                             xmin: this.center.x - (this.size.width / 2),
                             xmax: this.center.x + (this.size.width / 2),
                             y: this.center.y + (this.size.height / 2)
                           };

  this.velocity = {
                    x: 0,
                    y: randomVelocity
                  };

  this.board.meteors.push(this);
}

Meteor.prototype.moveDown = function() {
  this.center.y += this.velocity.y;
}

module.exports = Meteor;
