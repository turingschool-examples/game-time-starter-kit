const Player = require('./player');
const Meteor = require('./meteor');
const Bullet = require('./bullet');

function Board(width, height) {
  this.width = width || 1250;
  this.height = height || 600;
  this.meteors = [];
  this.players = [];
  this.bullets = [];
}

Board.prototype.addPlayer = function() {
  return new Player(this);
}

Board.prototype.addMeteor = function() {
  return new Meteor(this);
}

Board.prototype.addBullet = function() {
  return new Bullet(this);
}

Board.prototype.checkBulletMeteorCollisions = function() {
  // var meteors = this.meteors
  // this.bullets.forEach(function(bullet, index) {
  //   for(var i = 0; i < meteors.length; i++)
  //     if(bullet.collisionWith(meteors[i].range())){
  //       meteors.splice(i, 1);
  //       bullets.splice(index, 1);
  //     };
  // });
  // console.log(this.meteors[0].range());
  console.log(this.bullets[0].collisionWith(this.meteors[0].range()))
};

Board.prototype.checkMeteorCollisions = function() {

}

module.exports = Board;
