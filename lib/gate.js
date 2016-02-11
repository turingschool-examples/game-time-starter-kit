const GateHelper = require('./helpers/gate-helpers')

function Gate(options, canvas){
  this.y = options.y || (canvas.height-10);
  this.gateStart = options.gateStart || GateHelper.gateStartAttrs(canvas);
  this.gateEnd = options.gateEnd || GateHelper.gateEndAttrs(this.gateStart);
  debugger;
}

Gate.prototype.update = function(gameSpeed, canvas) {
  this.y -= gameSpeed;
  if (this.y < -10){
    this.y = canvas.height;
    this.gateStart = GateHelper.gateStartAttrs(canvas);
    this.gateEnd = GateHelper.gateEndAttrs(this.gateStart);
  }
}

Gate.prototype.draw = function(ctx) {
  ctx.fillRect(0,this.y,this.gateStart,10);
  ctx.fillRect(this.gateEnd,this.y,1000 - this.gateEnd,10);
};


module.exports = Gate;
