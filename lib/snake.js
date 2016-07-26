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
}

module.exports = Snake;
