const GamePiece = require('./GamePiece.js');
const Rabbit = require('./Rabbit.js');
const Bells = require('./Bells.js');

let bells = [];

class Game {
  constructor(context){
    this.score = 0;
    this.rabbit = new Rabbit(250, 400, 30, 30);
    this.context = context;
    this.gameLoop = this.gameLoop.bind(this);
  }
  
  drawRabbit(context) {
    this.rabbit.draw(context);
  }
  
  drawBells(context) {
    this.bell.drawBell(context);
  }
  
  drawRandomBells() {
    for (let fallingBell = 0; fallingBell < 20; fallingBell++) {
      let columns = [5, 40, 75, 110, 145, 180, 215, 250, 285, 320, 355, 390, 425, 460];
      let bellXPosition = columns[Math.floor(columns.length * Math.random())];
      let bell = new Bells (bellXPosition, -30, 30, 30);
      
      bells.push(bell);
      console.log(bells)
      }
    }

    gameLoop() {
      // console.log(this.bell.y)
      this.context.clearRect(0, 0, 500, 500)
        this.drawRabbit(this.context);
        // this.drawRandomBells();
        this.bell.drawBell(this.context).moveBell();
        bells.forEach((eachBell) => {
          // bell.eraseBell(this.context).drawBell(this.context).moveBell();
          // if (eachBell.y >= 550) {
          //   eachBell.y = 0;
          // this.bell.eraseBell(this.context).drawBell(this.context).moveBell();
          // }
        })
 
        requestAnimationFrame(this.gameLoop);
    }
  }

module.exports = Game;
