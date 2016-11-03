var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

function Log(options){
  this.x = options.x;
  this.y = options.y;
  this.width = options.width;
  this.height = options.height;
};

Log.prototype.logMove = function() {
  this.x++;
  if (this.x > canvas.width){
    this.x = -20;
  }
  return this;
};

module.exports = Log;
