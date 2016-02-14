var Game = function(canvas, ctx, options={}) {
  this.backgroundColor = options.backgroundColor || "cyan"
  this.width = canvas.width
  this.height = canvas.height
  this.largeFontSize = options.largeFontSize || "80px"
  this.smallFontSize = options.smallFontSize || "30px"
  this.fontFamily = options.fontFamily || "Open Sans"
  this.textColor = options.textColor || "black"
  this.gameTitle = options.gameTitle || "Fall Down"
  this.instructions = options.instructions || "Click to Play"
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

module.exports = Game;
