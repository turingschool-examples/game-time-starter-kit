// const $ = require('jquery');

 let canvas = document.getElementById("canvas");
 let context = canvas.getContext('2d');

 var x = 50;
 var y = 50;
 var width = 10;
 var height = 10;

 requestAnimationFrame(function gameLoop() {
   context.clearRect(0, 0, canvas.width, canvas.height);
   context.fillRect(x++, y, width, height);
   requestAnimationFrame(gameLoop);
 });
