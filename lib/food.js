function Food(options, context){
  this.x = options.x || 0;
  this.y = options.y || 0;
  this.height = options.height || 10;
  this.width = options.width || 10;
  this.context = context;
  this.cw = 10;
}

Food.prototype.draw = function () {
  this.context.fillRect(this.x, this.y, this.width, this.height);
}

// refactor to get rid of hard coded number
Food.prototype.move_food = function() {
  this.x = getRandomInt(0, 489)
  this.y = getRandomInt(0, 489)
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


module.exports = Food;
