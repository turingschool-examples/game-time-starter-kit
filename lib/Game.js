const Rabbit = require('./Rabbit.js');
const Bells = require('./Bells.js');

class Game {
  constructor() {
    this.rabbit = new Rabbit(250, 500, 30, 30);
    this.score = 0;
    this.bells = [];
    this.runGameLoop = false;
  }

  scoring() {
    this.score += 10;
    $('.score_amount').text(this.score);
  }

  scrolling(rabbit, bells) {
    bells.forEach(bell => bell.y += 50);
  }

  collisionDetection(rabbit, bells) {
    bells.forEach(function (bell) {
      if (rabbit.x + rabbit.width >= bell.x &&
          rabbit.x <= bell.x + bell.width &&
          rabbit.y + rabbit.height >= bell.y &&
          rabbit.y + rabbit.height < bell.y + bell.height) {
        rabbit.collision = true;
        bell.collision = true;
        rabbit.bounceUp();
        this.scoring();
        this.scrolling(rabbit, bells);
      }
    }.bind(this));
  }

  loseScreen() {
    if (this.score > 0) {
      $('#game').remove();
      $('.end-game_section').show();
      $('score_counter').hide();
      this.toggleGameLoop();
    }
  }

  hitBottom(rabbit) {
    if (rabbit.y >= 500) {
      rabbit.y = 500;
      rabbit.velocityReset();
      this.loseScreen();
    }
    return this;
  }

  endLevel(rabbit) {
    if (rabbit.y <= -10) {
      this.nextLevelScreen();
      $('.score_counter').hide ();
    }
  }

  nextLevelScreen() {
    $('.next-level_screen').show();
    $('#game').hide();
    this.toggleGameLoop();
  }

  startNextLevel() {
    this.rabbit.y = 300;         
    this.frequency += 50;
    $('.next-level_screen').hide();
    $('#game').show();
    $('.score_counter').show();
    this.runGameLoop = true;
  }

  toggleGameLoop() {
    this.runGameLoop = !this.runGameLoop;
  }

  bellFrequency(context) {
    let frequency = 26;

    if (Math.floor(frequency * Math.random()) === 25) {
      this.generateRandomBells(context);
    }
  }
       
  drawRabbit(context) {
    this.rabbit.draw(context);
    this.rabbit.jump();
    this.rabbit.boundries();
  }
    
  drawBells(context) {
    this.bells.forEach(bell => {
      bell.eraseBell(context).moveBell().drawBell(context);
    });
  }
   
  generateRandomBells() {
    if (this.bells.length <= 101) {
      let columns = [5, 40, 75, 110, 145, 180, 215, 250, 285, 320, 355, 390, 425, 460];
      let bellXPosition = columns[Math.floor(columns.length * Math.random())];
      let bell = new Bells (bellXPosition, -30, 30, 30);
      
      this.bells.push(bell);
    }
  }
}


module.exports = Game;
