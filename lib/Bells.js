let GamePiece = require('./GamePiece.js')

class Bells extends GamePiece {
  constructor (x, y, width, height) {
    super (x, y, width, height);
  }

  drawBell(context){
    // console.log(context)
      // context.fillStyle = '#33B426';
      context.fillRect(this.x, this.y, this.width, this.height)
      return this;  
  }
  
  moveBell() {
    this.y++;
    return this;
  }
}

module.exports = Bells;