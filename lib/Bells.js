let GamePiece = require('./GamePiece.js');

class Bells extends GamePiece {
  constructor (x, y, width, height) {
    super (x, y, width, height);
    this.collision = false;
  }


  drawBell(context){
      context.fillStyle = '#3B2D1D';
      // let boulder = new Image();
      // boulder.src = require('Users/michaelduke/turing/mod2/game-time/WinterBells-0318/lib/images/rock-576685-640.png'); 
      // context.drawImage(boulder, this.x, this.y, this.width, this.height);
      context.fillRect(this.x, this.y, this.width, this.height)
      return this;  
  }
  
  moveBell() {
    this.y++;
    return this;
  }

  eraseBell(context) {
    context.clearRect(this.x, this.y, this.width, this.height);
    return this;
  }
}

module.exports = Bells;