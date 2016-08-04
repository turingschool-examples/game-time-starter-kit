const Rock = require('./rocks');
const World = require('./world');
const Surfer = require('./surfer');
const Collision = require('./collision');
const FONTS = require('./constants/fonts');
const canvas = document.getElementById('surfer-game');


function Game() {
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
  this.floor = this.canvas.height - 10;
  this.surfer = new Surfer({});
  this.rocks = this.createRocks();
  this.world = new World(this.canvas.width, this.canvas.height, this.floor, this.surfer, this.rocks);
  this.collision = new Collision(this.surfer);
  this.tick = 0;
  this.score = 0;
  this.active = true;
}

Game.prototype.cycle = function () {
  this.renderWorld(this.context, this.world);
  this.animateSurfer();
  if (this.collision.checkForCollision(this.rocks)) {
    this.gameOver();
  }
  this.rocks.forEach(function(rock) {
    rock.moveLeft();
  });
  this.world.surfer.jump();
  this.tick++;
  if (this.tick % 5 === 0) {
    this.score++;
  }
  this.speedUpRock();
};

Game.prototype.renderWorld = function () {
  this.context.clearRect(0, 0, this.world.width, this.world.height);
  this.rocks.forEach(function(rock) {
    if (rock.size === 'small') {
      this.context.drawImage(rock.image, 0, 0, 25, 25, rock.x, rock.y, 25, 25);
    }
    if (rock.size === 'medium') {
      this.context.drawImage(rock.image, 0, 0, 35, 35, rock.x, rock.y, 35, 35);
    }
    if (rock.size === 'large') {
      this.context.drawImage(rock.image, 0, 0, 40, 40, rock.x, rock.y, 40, 40);
    }
  }.bind(this));
  this.context.font= FONTS.main;
  this.context.fillText('Score: ' + this.score, 425, 40);
};

Game.prototype.createRocks = function () {
  return [
    new Rock({ game: this }).small(),
    new Rock({ game: this }).medium(),
    new Rock({ game: this }).large()
  ];
};

Game.prototype.speedUpRock = function () {
  if (this.score % 101 === 0) {
    return this.rocks.forEach(function(rock) {
      return rock.speed += 0.05;
    });
  }
};

Game.prototype.gameOver = function () {
  this.context.font = FONTS.main;
  this.context.fillText('Game Over', 230, 85);
  this.active = false;
};

// ANIMATING THE SURFER

Game.prototype.animateSurfer = function () {
  if (this.firstThird()) {
    this.context.drawImage(this.world.surfer.image, 0, 0, 50, 60, this.world.surfer.x, this.world.surfer.y, 50, 60);
  } else if (this.secondThird()) {
    this.context.drawImage(this.world.surfer.image, 50, 0, 50, 60, this.world.surfer.x, this.world.surfer.y, 50, 60);
  } else {
    this.context.drawImage(this.world.surfer.image, 100, 0, 50, 60, this.world.surfer.x, this.world.surfer.y, 50, 60);
  }
  this.resetTick();
};

Game.prototype.resetTick = function() {
  if (this.tick >= 60) {this.tick = 0;}
};

Game.prototype.firstThird = function () {
  return this.tick > 0 && this.tick < 20;
};

Game.prototype.secondThird = function () {
  return this.tick > 20 && this.tick < 40;
};

module.exports = Game;
