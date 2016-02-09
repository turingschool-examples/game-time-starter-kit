var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

function Gate(options){
  this.y = options.y || (canvas.height-5);
  this.gateStart = options.gateStart || 0;
  this.gateEnd = options.gateEnd || 10;
}

// Gate.prototype.draw = function() {
//  ctx.fillRect(0,this.y,this.gateStart,10,10);
//  ctx.fillRect(this.gateEnd,this.y,400 - this.gateEnd,10,10);
// };

module.exports = Gate;
