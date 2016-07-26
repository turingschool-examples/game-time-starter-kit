function Rock(options) {
 this.x = options.x || 625;
 this.y = 10;
 this.width = 25;
 this.height = options.height || 50 ;
}
// Rock.prototype.isOffscreenLeft = function () {
//  return this.x < 0 - this.width;
// }
// Rock.prototype.isOffscreenRight = function () {
//  return this.x > this.world.width;
// }
// Rock.prototype.tick = function () {
//  this.x++;
//  }
module.exports = Rock;
