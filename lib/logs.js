function Log(options){
  this.x = options.x || 250;
  this.y = options.y || 300;
  this.width = options.width || 250;
  this.height = 40;
}

Log.prototype.logDraw = function(context,logImg) {
  context.fillStyle = 'transparent';
  context.drawImage(logImg, this.x, this.y, this.width, this.height);
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
