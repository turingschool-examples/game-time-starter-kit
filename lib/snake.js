function Snake(options){
  this.x = options.x || 300;
  this.y = options.y || 150;
  this.positions = [[300,150]];
  this.height = options.height || 10;
  this.width = options.width || 10;
}

Snake.prototype.moveUp = function(){
  this.y += 5;
};

Snake.prototype.moveDown = function(){
  this.y -= 5;
}

Snake.prototype.moveRight = function(){
  this.x += 5;
}

Snake.prototype.moveLeft = function(){
  this.x -= 5;
}

Snake.prototype.grow = function(){
  this.positions.push([this.x - 10, this.y - 10])
}

Snake.prototype.draw = function(context){
  context.fillStyle="#000000";
  this.positions.unshift([this.x, this.y])
  this.positions.forEach(function(num){
    context.fillRect(num[0], num[1], 10, 10);
  })
  this.positions.pop()

  return this
}

module.exports = Snake;
