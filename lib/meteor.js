function Meteor(board) {
  var randomWidth = Math.floor(Math.random() * 25) + 16;
  var randomHeight = Math.floor(Math.random() * 25) + 16;

  this.board = board;
  var randomXPosition = Math.floor(Math.random() * this.board.width);
  this.size = { width: randomWidth, height: randomHeight};
  this.center = {
                  x: randomXPosition,
                  y: 0 - (this.size.height / 2)
                };
  this.board.meteors.push(this);
}

module.exports = Meteor;
