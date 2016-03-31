var isColliding = function(player, positions){
  return (occupiedPositions.indexOf(player.position()) == -1);
};

module.exports = isColliding;
