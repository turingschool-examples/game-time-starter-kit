function World(width, height){
  this.width = width;
  this.height = height;
  this.ball = new Ball();

}
// when world passes start location to ball:
// paddle.y - this.height;
// (paddle.x + (paddle.width / 2)) - (this.width/2);

module.exports = World;
