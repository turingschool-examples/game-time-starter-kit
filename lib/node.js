function Node(positionX, positionY, nextNode){
  let context = canvas.getContext('2d');

  this.nextNode = nextNode
  this.x = positionX
  this.y = positionY
}

module.exports = Node;
