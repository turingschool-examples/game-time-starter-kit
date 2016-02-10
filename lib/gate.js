function Gate(options, canvas){
  this.y = options.y || (canvas.height-10);
  this.gateStart = options.gateStart || (canvas.width / 2);
  this.gateEnd = options.gateEnd || ((canvas.width / 2) + Math.floor((Math.random() * 15) + 200)) ;
}

Gate.prototype.update = function(gameSpeed, canvas) {
  this.y -= gameSpeed;
  if (this.y < -10){
    this.y = canvas.height;
    this.gateStart = Math.floor((Math.random() * canvas.width-200) + 0);
    this.gateEnd = this.gateStart + Math.floor((Math.random() * 200) + 50);
  }
}

Gate.prototype.draw = function(ctx) {
  ctx.fillRect(0,this.y,this.gateStart,10,10);
  ctx.fillRect(this.gateEnd,this.y,1000 - this.gateEnd,10,10);
};

module.exports = Gate;
