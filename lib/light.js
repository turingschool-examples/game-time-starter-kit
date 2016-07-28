
function Light(state) {
  this.state = state;
};

Light.prototype.flip = function() {
  this.state = this.state ? false : true
  return this
};

module.exports = Light;
