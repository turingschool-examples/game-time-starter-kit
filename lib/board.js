var _ = require('lodash');
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
  var sumWidths     = (object.size.width + meteor.size.width) / 2;
  var sumHeights    = (object.size.height + meteor.size.height) / 2;

  return xDifferential <= sumWidths && yDifferential <= sumHeights;
}

Board.prototype.changeActiveCollisionStatuses = function() {
  this.meteors.forEach(function(meteor) {
    this.changeBulletMeteorCollisionActiveStatuses(meteor);
    this.changePlayerMeteorCollisionActiveStatuses(meteor);
  }.bind(this));
};

Board.prototype.returnBulletCollision = function(meteor) {
  return _.find(this.bullets, function(bullet){
    return this.checkForCollision(bullet, meteor);
  }.bind(this));
}

Board.prototype.changeBulletMeteorCollisionActiveStatuses = function(meteor) {
  var bullet = this.returnBulletCollision(meteor)
  if( bullet !== undefined ) {
    this.changeActiveStatus(bullet);
    this.changeActiveStatus(meteor);
  }
}

Board.prototype.changePlayerMeteorCollisionActiveStatuses = function(meteor) {
  var player = this.players[0];
  if( meteor.active ){
    if(this.checkForCollision(player, meteor)) {
        this.changeActiveStatus(player);
        this.changeActiveStatus(meteor);
    }
  }
}

Board.prototype.changeActiveStatus = function(object) {
  object.active = false;
}

Board.prototype.getActiveObjects = function(objects) {
  return _.filter(objects, function(object) {
    return object.active === true;
  });
}

Board.prototype.removeInActiveObjects = function() {
  this.changeActiveCollisionStatuses();
  this.meteors = this.getActiveObjects(this.meteors);
  this.bullets = this.getActiveObjects(this.bullets);
  this.players = this.getActiveObjects(this.players);
}

module.exports = Board;
