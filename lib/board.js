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
  var bullets = this.bullets
  var meteors = this.meteors
  this.meteors.forEach(function(meteor, index) {
    for(var i = 0; i < bullets.length; i++)
      if(meteor.collisionWith(bullets[i].range())){
        bullets.splice(i, 1);
        meteors.splice(index, 1);
      };
  });
};

Board.prototype.checkPlayerMeteorCollisions = function() {
  var players = this.players[0]
  var meteors = this.meteors
  this.meteors.forEach(function(meteor, index) {
    if(meteor.collisionWith(players[0].range())){
      players.splice(0, 1);
      meteors.splice(index, 1);
    };
  });
};

Board.prototype.checkCollision = function() {
  var board = this;
  board.meteors.forEach(function(element, index) {
    if(element.impactCoordinates.y >= board.height - (board.players[0].size.height + 2)
      && element.impactCoordinates.xmin < board.players[0].impactCoordinates.xmin
      && element.impactCoordinates.xmax > board.players[0].impactCoordinates.xmax) {
      board.meteors.splice(index, 1);
    } else if(element.impactCoordinates.y >= board.height - (board.players[0].size.height + 2)
      && element.impactCoordinates.xmin < board.players[0].impactCoordinates.xmax
      && element.impactCoordinates.xmin > board.players[0].impactCoordinates.xmin) {
        board.meteors.splice(index, 1);
    } else if(element.impactCoordinates.y >= board.height - (board.players[0].size.height + 2)
      && element.impactCoordinates.xmax < board.players[0].impactCoordinates.xmax
      && element.impactCoordinates.xmax > board.players[0].impactCoordinates.xmin) {
        board.meteors.splice(index, 1);
    }
  });
}

module.exports = Board;
