const $ = require('jquery');

function startGame(){
  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');

  $('#start-game').on('click', function(){
    context.fillRect(100, 100, 100, 100);
  })
};

startGame();
