function Gate(options, canvas){
  this.y = options.y || (canvas.height-10);
  this.gateStart = options.gateStart || Math.abs(Math.floor((Math.random() * canvas.width-200) + 0))
  this.gateEnd = options.gateEnd || Math.abs((this.gateStart + Math.floor((Math.random() * 200) + 10) + 10));
}

Gate.prototype.update = function(gameSpeed, canvas) {
  this.y -= gameSpeed;
  if (this.y < -10){
    this.y = canvas.height;
    this.gateStart = Math.abs(Math.floor((Math.random() * canvas.width-200) + 0));
    this.gateEnd = Math.abs(this.gateStart + Math.floor((Math.random() * 200) + 50));
  }
}

Gate.prototype.draw = function(ctx) {
  ctx.fillRect(0,this.y,this.gateStart,10);
  ctx.fillRect(this.gateEnd,this.y,1000 - this.gateEnd,10);
};



module.exports = Gate;
