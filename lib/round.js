const $ = require('jquery');
const Snake = require('./snake');
const Pellet = require('./pellet')

function Round(options){
  this.snake = new Snake({});
  this.pellet = new Pellet({});
  this.score = 0
}

Round.prototype.increaseScore = function(){
  this.score ++;
  $('#score').html(this.score);
}

module.exports = Round;
