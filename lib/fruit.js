function Fruit (game) {
  this.game = game;
  this.x = Math.floor(Math.random() * 45) * 10;
  this.y = Math.floor(Math.random() * 45) * 10;
  this.size = 10;
}

Fruit.prototype.reposition = function () {
  this.x = Math.floor(Math.random() * 45) * 10;
  this.y = Math.floor(Math.random() * 45) * 10;
};

module.exports = Fruit;
