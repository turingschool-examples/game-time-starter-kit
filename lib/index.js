const canvas = document.getElementById('surfer-game');
const Game = require('./game');
const KEYS = require('./constants/keys');

var game = new Game(canvas);

document.addEventListener('keydown', function (e) {
  if (e.keyCode === KEYS.spacebar) {
    console.log('space');
    if (game.world.surfer.bottom > 189 && game.startGame) {
      game.world.surfer.velocity = -13;
    }
  if (!game.startGame) {
      game = new Game(canvas);
    }
  }
});

requestAnimationFrame(function gameLoop() {
  if (game.startGame) {
    game.cycle();
  }
  requestAnimationFrame(gameLoop);
});


// 
// chargeCustomer(table, waiter, callback) {
//   // we are doing some stuff with the tabel and the waietr
//   // we need some info in here about table and waiter to be able to calc bill
//
//   callback(table, waiter);
// }
//
// calculateBill(table, waiter) {
//   return table.check + (waiter.seniority * 10)
// }
//
// chargeCustomer(2, "MaryJane", caluclateBill);
