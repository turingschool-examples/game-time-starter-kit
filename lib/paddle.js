function Paddle(options){
  this.x = options.x || 350;
  this.y = options.y || 460;
  this.height = options.height || 20;
  this.width = options.width || 100;
}

Paddle.prototype.moveLeft = function(){
  this.x -= 4;
};

Paddle.prototype.moveRight = function(){
  this.x += 4;
};

module.exports = Paddle;
