function Ball(options){
  this.r = options.r || 8;
  this.x = options.x || 0 + this.r;
  this.y = options.y || 0 + this.r;
  this.sAngle = options.sAngle || 0
  this.eAngle = options.eAngle || (2 * Math.PI)
}

module.exports = Ball;
