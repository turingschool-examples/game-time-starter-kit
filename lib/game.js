var Game = function(canvas, ctx, options={}) {
  this.backgroundColor = options.backgroundColor || "cyan"
  this.width = canvas.width
  this.height = canvas.height
  this.largeFontSize = options.largeFontSize || "70px"
  this.smallFontSize = options.smallFontSize || "30px"
  this.fontFamily = options.fontFamily || "Open Sans"
  this.textColor = options.textColor || "black"
  this.gameTitle = options.gameTitle || "Fall Down"
  this.instructions = options.instructions || "Click to Play"
  this.speed = options.speed || 0
  this.score = options.score || 0
}

Game.prototype.default = function(ctx) {
  ctx.fillStyle = this.backgroundColor;
  ctx.fillRect(0, 0, this.width, this.height);
  ctx.fillStyle = this.textColor;
  ctx.font = this.largeFontSize + " " + this.fontFamily
  ctx.textAlign = "center";
  ctx.fillText(this.gameTitle, this.width/2, this.height/2 - 20);
  ctx.font = this.smallFontSize + " " + this.fontFamily;
  ctx.fillText(this.instructions, this.width/2, this.height/2 + 35);
}

Game.prototype.paused = function(ctx) {
  ctx.fillStyle = this.backgroundColor;
  ctx.fillRect(0, 0, this.width, this.height);
  ctx.fillStyle = this.textColor;
  ctx.font = this.largeFontSize + " " + this.fontFamily
  ctx.textAlign = "center";
  ctx.fillText("Paused", this.width/2, this.height/2 - 20);
  ctx.font = this.smallFontSize + " " + this.fontFamily;
  ctx.fillText(this.instructions, this.width/2, this.height/2 + 35);
}

Game.prototype.lost = function(ctx) {
  ctx.fillStyle = this.backgroundColor;
  ctx.fillRect(0, 0, this.width, this.height);
  ctx.fillStyle = this.textColor;
  ctx.font = this.largeFontSize + " " + this.fontFamily
  ctx.textAlign = "center";
  ctx.fillText("You lost", this.width/2, this.height/2 - 20);
  ctx.font = this.smallFontSize + " " + this.fontFamily;
  ctx.fillText(this.instructions, this.width/2, this.height/2 + 35);
  ctx.fillText("Score: " + this.score, this.width/2, this.height/2 + 70);
  console.log(this.score)
}

Game.prototype.newHighScore = function(ctx) {
  ctx.fillStyle = this.backgroundColor;
  ctx.fillRect(0, 0, this.width, this.height);
  ctx.fillStyle = this.textColor;
  ctx.font = this.largeFontSize + " " + this.fontFamily
  ctx.textAlign = "center";
  ctx.fillText("New High Score!", this.width/2, this.height/2 - 20);
  ctx.font = this.smallFontSize + " " + this.fontFamily;
  ctx.fillText(this.instructions, this.width/2, this.height/2 + 35);
  ctx.fillText("Score: " + this.score, this.width/2, this.height/2 + 70);
}

Game.prototype.update = function(score, ball) {
  if (score < 2 ){
    this.speed = 0
  }
  else if (score > 2 && score < 5) {
    this.speed = 1
  }
  else if (score > 5 &&  score < 10) {
    this.speed = 1.5
  }
  else if (score > 10 &&  score < 20) {
    this.speed = 2
  }
  else if (score > 20 && score < 30){
    this.speed = 2.5
    ball.speed = 5.5
      }
  else if (score > 30 && score < 40){
    this.speed = 3
    ball.speed = 6
      }
  else if (score > 40 && score < 50){
    this.speed = 3.5
    ball.speed = 6.5
      }
  else if (score > 50){
      this.speed = 4
      ball.speed = 7
      }
}

module.exports = Game;
