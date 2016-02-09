function Pellet(options){
  this.x = options.x || 150;
  this.y = options.y || 150;
  this.height = options.height || 10;
  this.width = options.width || 10;
}

Pellet.prototype.draw = function(context){
  context.fillStyle="#7FFF00";
  context.fillRect(this.x, this.y, this.height, this.width);
  return this
}

module.exports = Pellet;
