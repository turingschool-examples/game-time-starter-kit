function Log(options){
  this.x = options.x;
  this.y = options.y;
  this.width = options.width ||  300;
  this.height = options.height || 40;
  this.color = options.color || 'saddleBrown';
};

Log.prototype.logDraw = function(context) {
  context.fillStyle = this.color;
  context.fillRect(this.x, this.y, this.width, this.height);
  return this;
};

Log.prototype.logMove = function() {
  this.x++;
  if (this.x > canvas.width){
    this.x = -20;
  }
  return this;
};

module.exports = Log;
