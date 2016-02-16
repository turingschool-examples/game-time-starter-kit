function Food(options, context){
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.context = context;
  this.cw = 10;
}

Food.prototype.draw = function () {
  this.context.fillStyle="#0088CE";
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

module.exports = Food;
