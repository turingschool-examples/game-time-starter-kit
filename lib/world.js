function World(width, height, surfer, rocks) {
 // this === the world I'm making right now
 this.width = width || 600;
 this.height = height || 150;
 this.surfer = surfer;
 this.rocks = rocks;
};

World.prototype.isCollision = function() {
  // surfer have a true width and height to add to the x and y
};
//

//  for (var i = 0; i < 4; i++) {
//    this.rocks.push(new Rock(width + 50, 10, 10, this));
//  }
// }
// World.prototype.tick = function () {
//  this.surfer.tick();
//  for (var rock of this.rocks) {
//    rock.tick();
//  }
// }

module.exports = World;
