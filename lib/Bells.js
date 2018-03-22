let GamePiece = require('./GamePiece.js');

class Bells extends GamePiece {
  constructor (x, y, width, height) {
    super (x, y, width, height);
    this.collision = false;
  }

  drawBell(context) {
    let boulder = new Image();

    boulder.src = '/lib/images/rock-576685-640.png'; 
    context.drawImage(boulder, this.x, this.y, this.width, this.height);
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