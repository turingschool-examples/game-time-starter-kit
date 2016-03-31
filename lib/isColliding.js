var isColliding = function(player, positions){
  return positions[player.x] && positions[player.x][player.y];
};

module.exports = isColliding;
