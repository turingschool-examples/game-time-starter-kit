function Brick(options){
  this.x = options.x;
  this.y = options.y;
  this.height = options.height || 30;
  this.width = options.width || 60;
}

module.exports = Brick;
