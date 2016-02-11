module.exports = {
  gateStartAttrs: function(canvas) {
    return Math.abs(Math.floor((Math.random() * canvas.width-200) + 0));
  },

  gateEndAttrs: function(gateStart) {
    return Math.abs(gateStart + Math.floor((Math.random() * 100) + 15));
  }
}
