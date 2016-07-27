class Ball {
  constructor (properties) {
    if (typeof properties !== 'object') properties = {}
    this.height = properties.height || 5;
    this.width = properties.width || 5;
    this.x = properties.x || 50;
    this.y = properties.y || 30;
  };


};

module.exports = Ball;
