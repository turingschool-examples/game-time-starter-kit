const canvas = $('#game')[0];
const ctx = canvas.getContext('2d');
const Game = require('./game');

var game = new Game ({}, ctx, canvas)

$('#game').on('click', function() {
    $('html, body').animate({scrollTop: $(document).height()}, 3000);
})


requestAnimationFrame(function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  game.run();
  requestAnimationFrame(gameLoop);
});
