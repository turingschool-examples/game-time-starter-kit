function Paddle(options, ctx, canvas) {
  this.x = options.x || 20;
  this.y = options.y || 200;
  this.width = options.width || 10;
  this.height = options.height || 100;
  this.speed = options.speed || 8;
  this.moveUp = false;
  this.moveDown = false;
  this.ctx = ctx;
  this.canvas = canvas;
}

Paddle.prototype.draw = function(color) {
  this.ctx.fillStyle = color || 'red';
  this.ctx.fillRect(this.x, this.y, this.width, this.height);
}

module.exports = Paddle;
