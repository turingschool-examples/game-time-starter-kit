const Rock = require('./rocks');
const World = require('./world');
const Surfer = require('./surfer');
const Collision = require('./collision');


function Game(canvas) {
  this.canvas = canvas;
  this.context = this.canvas.getContext('2d');
  this.surfer = new Surfer({canvas: this.canvas});
  this.rocks = this.createRocks();
  this.world = new World(this.canvas.width, this.canvas.height, this.surfer, this.rocks);

  this.collision = new Collision(this.rocks, this.surfer);
}


Game.prototype.renderWorld = function () { //this.context and this.world??
  this.context.clearRect(0, 0, this.world.width, this.world.height);
  this.context.fillRect(this.world.surfer.x, this.world.surfer.y, this.world.surfer.width, this.world.surfer.height);
  this.rocks.forEach(function(rock) {
    this.context.fillRect(rock.x, rock.y, rock.width, rock.height);
  }.bind(this));
};

Game.prototype.createRocks = function () {
  return [
    new Rock({x: this.newRockLocation()}).small(),
    new Rock({x: this.newRockLocation()}).medium(),
    new Rock({x: this.newRockLocation()}).large()
  ];
};

Game.prototype.newRockLocation = function () {
  return Math.floor(Math.random() * (this.canvas.width * 2 - this.canvas.width)) + this.canvas.width;
};


module.exports = Game;
