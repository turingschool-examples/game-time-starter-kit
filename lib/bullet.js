const Board = require('./board');

function Bullet(board) {
  this.board = board;
  this.center = {
                  x: this.board.players[0].center.x,
                  y: this.board.players[0].center.y - (this.board.players[0].size.height / 2) - 1
                };
  this.size = { width: 5, height: 5 };
  this.velocity = { y: -6 };
  this.impactCoordinates = {
                             xmin: this.center.x - (this.size.width / 2),
                             xmax: this.center.x + (this.size.width / 2),
                             y: this.center.y - (this.size.height / 2)
                           };

  this.board.bullets.push(this);
}

Bullet.prototype.moveUp = function() {
  this.center.y += this.velocity.y;
  this.board.checkCollision();
}

Bullet.prototype.range = function() {
  return {
    xmin: this.center.x - (this.size.width / 2),
    xmax: this.center.x + (this.size.width / 2),
    ymin: this.center.y - (this.size.height / 2),
    ymax: this.center.y + (this.size.height / 2)
 }
};

// Bullet.prototype.collisionWith = function(object) {
//   var withinXRange = (
//     object.xmin >= this.range().xmin &&
//     object.xmin <= this.range().xmax ||
//     object.xmax <= this.range().xmax &&
//     object.xmax >= this.range().xmin
//   );
//   var withinYRange = (
//     object.ymin >= this.range().ymin &&
//     object.ymin <= this.range().ymax ||
//     object.ymax <= this.range().ymax &&
//     object.ymax >= this.range().ymin
//   );
//   return withinXRange && withinYRange
// };
module.exports = Bullet;
