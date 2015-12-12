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

Board.prototype.checkMeteorBulletCollisions = function() {
  var bullets          = this.bullets;
  var fnCollsionCheck  = this.checkForCollision;
  var fnChangeStatus   = this.changeActiveStatus;
  this.meteors.forEach(function(meteor) {
    bullets.forEach(function(bullet){
      if(bullet.active){
        if( fnCollsionCheck(bullet, meteor) ){
            fnChangeStatus(bullet);
            fnChangeStatus(meteor);
        }
      }
    });
  });
};

Board.prototype.checkMeteorPlayerCollisions = function() {
  var player           = this.players[0];
  var fnCollsionCheck  = this.checkForCollision;
  var collisionMeteor = _.find(this.meteors, function(meteor){
    return fnCollsionCheck(player, meteor);
  });
  if(collisionMeteor !== undefined){
    this.changeActiveStatus(collisionMeteor);
    this.changeActiveStatus(player);
  }
  return collisionMeteor !== undefined;
}

Board.prototype.removeAnyMeteorPlayerCollision = function() {
  var collisionDetected = this.checkMeteorPlayerCollisions();
  if(collisionDetected) {
    this.meteors = this.getActiveObjects(this.meteors);
    this.players.shift();
  }
};

Board.prototype.changeActiveStatus = function(object) {
  object.active = false;
}

Board.prototype.getActiveObjects = function(objects) {
  return _.filter(objects, function(object) {
    return object.active === true;
  });
}

Board.prototype.removeInActiveObjects = function() {
  this.checkMeteorBulletCollisions();
  this.meteors = this.getActiveObjects(this.meteors);
  this.bullets = this.getActiveObjects(this.bullets);
  this.removeAnyMeteorPlayerCollision();
}

module.exports = Board;
