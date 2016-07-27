
// ;(function() {
//   var Game = function(canvasId) {
//     var canvas = document.getElementById(canvasId);
//     var screen = canvas.getContext('2d');
//     var gameSize = {x: canvas.width, y: canvas.height};
//     console.log('hi');
//   };
//
//   Game.prototype = {
//
//   };
//
// })();

function Snake(){
  this.x = 250;
  this.y = 250;
  this.height = 10;
  this.width = 10;
  this.moveUp = function(){
    this.y = this.y - 10;
  };
  this.moveDown = function(){
    this.y = this.y + 10;
  };
  this.moveRight = function(){
    this.x = this.x + 10;
  };
  this.moveLeft = function(){
    this.x = this.x - 10;
  };
}


module.exports = Snake;
