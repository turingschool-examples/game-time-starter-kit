const World = require('./world');

function Paddle(options){
  this.width = options.width || 100;
  this.height = options.height || 15;
  this.x = options.x;
  this.y = options.y;
  this.world = options.world;
}

Paddle.prototype.moveLeft = function(){
  this.x -= 4;
};

Paddle.prototype.moveRight = function(){
  this.x += 4;
};

module.exports = Paddle;
