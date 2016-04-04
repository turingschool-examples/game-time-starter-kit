function Fruit (game, grid) {
  this.game = game;
  this.size = grid;
  this.reposition();
}

Fruit.prototype.reposition = function () {
  this.x = Math.floor(Math.random() * 45) * 10;
  this.y = Math.floor(Math.random() * 45) * 10;
};

module.exports = Fruit;
