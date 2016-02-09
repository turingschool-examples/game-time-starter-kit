const $ = require('jquery');

function startGame(){
  var canvas = document.getElementById('game');
  var context = canvas.getContext('2d');

  $('#start-game').on('click', function(){
    context.fillRect(300, 150, 10, 10);
  })
};

startGame();
