function Gate(options, viewPort){
  this.y = options.y || (viewPort.height-10);
  this.gateStart = options.gateStart || 0;
  this.gateEnd = options.gateEnd || 10;
}

// Gate.prototype.update = function() {
//     this.y -= gameSpeed;
//     if (this.y < -10){
//         this.y = 440;
//         this.holeStart = random(0,300);
//         this.holeEnd = this.holeStart + random(15,100);
//     }


module.exports = Gate;
