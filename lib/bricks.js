function Brick(options){
  this.x = options.x || 0;
  this.y = options.y || 100;
  this.height = options.height || 25;
  this.width = options.width || 60;
  this.status = options.status;
}

module.exports = Brick;
