function Paddle(options){
  this.width = options.width || 100;
  this.height = options.height || 15;
  this.x = options.x || 350;
  this.y = options.y || 470;
  this.world = options.world;
}

Paddle.prototype.moveLeft = function(){
  this.x -= 4;
};

Paddle.prototype.moveRight = function(){
  this.x += 4;
};

module.exports = Paddle;
