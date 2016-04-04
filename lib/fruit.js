function Fruit (game) {
  this.game = game;
  this.size = game.grid.size;
  this.reposition();
}

Fruit.prototype.reposition = function () {
  this.x = this.game.grid.randomX();
  this.y = this.game.grid.randomY();
};

module.exports = Fruit;
