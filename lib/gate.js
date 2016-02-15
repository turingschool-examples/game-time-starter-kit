const GateHelper = require('./helpers/gate-helpers')
const ViewportHelper = require('./helpers/viewport-helper')

function Gate(options, canvas){
  this.gateHeight = options.gateHeight || 10
  this.y = options.y || (ViewportHelper.bottomEdge(canvas) - this.gateHeight);
  this.gateStart = options.gateStart || GateHelper.randGateStartAttrs(canvas);
  this.gateEnd = options.gateEnd || GateHelper.randGateEndAttrs(this.gateStart);
  this.canvasWidth = canvas.width
}

Gate.prototype.update = function(gameSpeed, canvas) {
  var gateOffTopofScreen = (-this.gateHeight)
  this.y -= gameSpeed;
  if (this.y < gateOffTopofScreen){
    this.y = ViewportHelper.bottomEdge(canvas);
    this.gateStart = GateHelper.randGateStartAttrs(canvas);
    this.gateEnd = GateHelper.randGateEndAttrs(this.gateStart);
  }
}

Gate.prototype.draw = function(ctx) {
  ctx.fillRect(0, this.y, this.gateStart, this.gateHeight);
  ctx.fillRect(this.gateEnd, this.y, this.canvasWidth - this.gateEnd, this.gateHeight);
};

module.exports = Gate;
