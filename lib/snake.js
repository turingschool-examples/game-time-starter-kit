function Snake(options){
  this.x = options.x || 300;
  this.y = options.y || 150;
  this.height = options.height || 10;
  this.width = options.width || 10;
}

Snake.prototype.moveUp = function(){
  this.y ++;
};

Snake.prototype.moveDown = function(){
  this.y --;
}

Snake.prototype.moveRight = function(){
  this.x ++;
}

Snake.prototype.moveLeft = function(){
  this.x --;
}

Snake.prototype.coordinates = function(){
  var snakeCoordinates = []
  for (var i = 0; i < this.height; i++){
    var widthPosition = this.width;
    var heightPosition = this.height;

    snakeCoordinates.push([widthPosition, heightPosition])

    heightPosition += 1
  }
}

Snake.prototype.draw = function(context){
  context.fillStyle="#000000";
  context.fillRect(this.x, this.y, this.height, this.width);
  return this
}

module.exports = Snake;
