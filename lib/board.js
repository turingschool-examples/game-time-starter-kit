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
  var sumHeights    = (object.size.width + meteor.size.width) / 2;

  return xDifferential <= sumWidths && yDifferential <= sumHeights;
}

Board.prototype.checkMeteorCollisions = function() {
  var bullets  = this.bullets;
  var players  = this.players;
  var meteors  = this.meteors;
  var fnCheck  = this.checkForCollision;
  var fnRemove = this.removeObject;
  meteors.forEach(function(meteor) {
    if(meteor.active){
      bullets.forEach(function(bullet){
        if(bullet.active){
          if( fnCheck(bullet, meteor) ){
            // debugger;
              fnRemove(bullet);
              fnRemove(meteor);
            }
        }
      });
    }
  });
this.meteors = _.filter(this.meteors, function(meteor) {
  return meteor.active === true;
});

this.bullets = _.filter(this.bullets, function(bullet) {
  return bullet.active === true;
});
  // for(var meteorIndex = 0; meteorIndex < meteors.length; meteorIndex++) {
  //   for(var bulletIndex = 0; bulletIndex < bullets.length; bulletIndex++){
  //     debugger;
  //     if( fnCheck(bullets[bulletIndex], meteors[meteorIndex]) ){
  //       fnRemove(bullets, bulletIndex);
  //       fnRemove(meteors, meteorIndex);
  //       bulletIndex = bullets.length;
  //       if(meteorIndex !== 0) {
  //         meteorIndex--;
  //       }
  //     };
  //   }
  //   if ( fnCheck(players[0], meteors[meteorIndex]) ) {
  //     fnRemove(meteors, meteorIndex);
  //     fnRemove(players, 0);
  //   }
  // };
};

Board.prototype.removeObject = function(object) {
  object.active = false;
}

module.exports = Board;
