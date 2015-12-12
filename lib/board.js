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

Board.prototype.checkForCollision = function(object, meteor) {
  var xDifferential = Math.abs(object.center.x - meteor.center.x);
  var yDifferential = Math.abs(object.center.y - meteor.center.y);
  var sumWidths     = object.size.width + meteor.size.width;
  var sumHeights    = object.size.width + meteor.size.width;

  return xDifferential <= sumWidths && yDifferential <= sumHeights;
}

Board.prototype.checkMeteorCollisions = function() {
  var bullets = this.bullets;
  var players = this.players;
  var meteors = this.meteors;
  var check   = this.checkForCollision;
  this.meteors.forEach(function(meteor, index) {
    for(var i = 0; i < bullets.length; i++){
      if( check(bullets[i], meteor) ){
        bullets.splice(i, 1);
        meteors.splice(index, 1);
      };
    }
    if ( check(players[0], meteor) ) {
      meteors.splice(index, 1);
      players.splice(0, 1);
    }
  });
};

module.exports = Board;
