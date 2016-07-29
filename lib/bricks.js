function Brick(options){
  this.x = options.x;
  this.y = options.y;
  this.height = options.height || 30;
  this.width = options.width || 60;
  this.status = 1;
}

// Brick.prototype.draw = function(){
//   context.fillStyle = 'blue';
//   con
// }

module.exports = Brick;
