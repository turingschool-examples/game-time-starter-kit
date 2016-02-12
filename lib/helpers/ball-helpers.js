module.exports = {
  radius: function(options) {
    return options.r > 0 && options.r < 20 && options.r || 8;
  },
  xPosition: function(options, canvas) {
    var center = canvas.width / 2
    return options.x > 0 && options.x < canvas.width && options.x || center;
  },
  yPosition: function(options, canvas) {
    return options.y > 0 && options.y < canvas.height && options.y;
  },
  drawBallOnCanvas: function(ctx, that) {
    ctx.beginPath();
    ctx.arc(that.x, that.y, that.r, that.sAngle, that.eAngle);
    ctx.stroke();
    ctx.fillStyle = "blue";
    ctx.fill();
  }
}
