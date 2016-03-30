var isColliding = function(player, positions){
  // console.log(occupiedPositions);
  // console.log(occupiedPositions.indexOf(player.position()));

  // return (occupiedPositions.indexOf(player.position()) !== -1);
  // return (occupiedPositions.indexOf(player.position()) !== -1);
  // debugger
  if (positions[player.x] ) {
    var si =  positions[player.x][player.y];
    debugger
    return si;
  }
  // var genius =  positions[player.x] && positions[player.x][player.y];
  // return genius;
};

module.exports = isColliding;
