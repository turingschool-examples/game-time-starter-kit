let GamePiece = require('./GamePiece.js')

class Bells extends GamePiece {
  constructor (x, y, width, height) {
    super (x, y, width, height);
    this.collision = false;
  }

  drawBell(context){
    // console.log(context)
      context.fillStyle = '#33B426';
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

  // findBell() {
  //   return bells.collision = true;
  // }

  // bellDisappear(bells) {
  //   let deadBell = bells.findIndex(findBell);
  //   return deadBell;
  //    console.log(deadBell)  
  // }
}

module.exports = Bells;