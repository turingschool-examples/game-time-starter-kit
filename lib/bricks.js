function Brick(options){
  this.x = options.x || 0;
  this.y = options.y || 100;
  this.height = options.height || 60;
  this.width = options.width || 60;
  this.status = 1;
}

// Brick.prototype.draw = function(){
//   context.fillStyle = 'blue';
//   con
// }

module.exports = Brick;
