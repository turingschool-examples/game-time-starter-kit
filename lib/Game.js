const GamePiece = require('./GamePiece.js');
const Rabbit = require('./Rabbit.js');
const Bells = require('./Bells.js');

class Game {
    constructor(context){
        this.score = 0;
        this.rabbit = new Rabbit(250, 400, 30, 30);
        this.context = context;
        this.gameLoop = this.gameLoop.bind(this);
        this.bells = [];
        this.bell = new Bells (0, 0, 0, 0);
    }

    drawRabbit(context) {
      this.rabbit.draw(context);
    }
    
    gameLoop() {
      this.context.clearRect(0, 0, 500, 500);
      this.drawRabbit(this.context);
      this.drawRandomBells(this.context);
      requestAnimationFrame(this.gameLoop);
    }
    
    drawRandomBells(context) {
      this.bell.drawBell(context);
      for (let fallingBell = 0; fallingBell < 20; fallingBell++) {
      let columns = [5, 40, 75, 110, 145, 180, 215, 250, 285, 320, 355, 390, 425, 460, 495];
      let bellXPosition = columns[Math.floor(Math.random) * columns.length];
      let bell = new Bells(bellXPosition, 0, 30, 30);
      this.bell.moveBell();

      this.bells.push(bell);
    }
  }
}


module.exports = Game;
