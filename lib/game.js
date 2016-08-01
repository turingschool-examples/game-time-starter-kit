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
  this.tick = 1;
  this.time = 1;
  this.startGame = true;
}

Game.prototype.renderWorld = function () {
  this.context.clearRect(0, 0, this.world.width, this.world.height);
  this.context.fillRect(this.world.surfer.x, this.world.surfer.y, this.world.surfer.width, this.world.surfer.height, this.world.surfer.image);
  this.rocks.forEach(function(rock) {
    this.context.fillRect(rock.x, rock.y, rock.width, rock.height);
  }.bind(this));
  this.context.font='40px Covered By Your Grace';
  this.context.fillText('Score: ' + this.time,425,40);
};

Game.prototype.createRocks = function () {
  return [
    new Rock({world: this.world }).small(),
    new Rock({world: this.world }).medium(),
    new Rock({world: this.world }).medium()
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

module.exports = Game;
