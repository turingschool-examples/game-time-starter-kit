function Snake(x,y,width,height,world){
  this.x = 250;
  this.y = 250;
  this.height = 10;
  this.width = 10;
  this.moveUp = function(){
    this.y = this.y - 10;
  };
  this.moveDown = function(){
    this.y = this.y + 10;
  };
  this.moveRight = function(){
    this.x = this.x + 10;
  };
  this.moveLeft = function(){
    this.x = this.x - 10;
  };
  this.world = world;
}

module.exports = Snake;
