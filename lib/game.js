const Rock = require('./rocks');
const World = require('./world');
const Surfer = require('./surfer');
const Collision = require('./collision');

function Game(canvas) {
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
  this.floor = this.canvas.height - 10;
  this.surfer = new Surfer({canvas: this.canvas});
  this.rocks = this.createRocks();
  this.world = new World(this.canvas.width, this.canvas.height, this.floor, this.surfer, this.rocks);
  this.collision = new Collision(this.surfer);
  this.tick = 0;
  this.time = 0;
  this.startGame = true;
}

Game.prototype.restart = function () {
  console.log('wowowo');
  this.tick = 1;
  this.time = 1;
  this.startGame = true;
  this.renderWorld();
};

Game.prototype.renderWorld = function () {
  this.context.clearRect(0, 0, this.world.width, this.world.height);
  this.rocks.forEach(function(rock) {
    // this.context.fillRect(rock.x, rock.y, rock.width, rock.height);
    if (rock.size === 'small') {
    this.context.drawImage(rock.image, 0, 0, 25, 25, rock.x, rock.y, 25, 25);
    }
    if (rock.size === 'medium') {
      this.context.drawImage(rock.image, 0, 0, 35, 35, rock.x, rock.y, 35, 35);
    }
    if (rock.size === 'large') {
      this.context.drawImage(rock.image, 0, 0, 40, 40, rock.x, rock.y, 40, 40);
    }
    // this.context.drawImage(this.world.surfer.image, 0, 0, 50, 60, this.world.surfer.x, this.world.surfer.y, 50, 60);

  }.bind(this));
  this.context.font='40px Covered By Your Grace';
  this.context.fillText('Score: ' + this.time,425,40);
};

Game.prototype.createRocks = function () {
  return [
    new Rock({world: this.world }).small(),
    new Rock({world: this.world }).medium(),
    new Rock({world: this.world }).large()
  ];
};

Game.prototype.speedUpRock = function () {
  if (this.time % 101 === 0) {
    return this.rocks.forEach(function(rock) {
      return rock.speed += 0.1;
    });
  }
};

Game.prototype.gameOver = function () {
  this.context.font='40px Covered By Your Grace';
  this.context.fillText('Game Over',230,85);
  this.startGame = false;
};

Game.prototype.animateSurfer = function () {
  // context.drawImage(img,sx,sy,swidth,sheight,x,y,width,height);
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
