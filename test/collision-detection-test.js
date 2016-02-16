const assert = require('chai').assert;

const Gate = require('../lib/gate');
const GateHelper = require('../lib/helpers/gate-helpers')
const GateBuilder = require('../lib/gate-builder')
const GatePainter = require('../lib/gate-painter')
const CollisionDetect = require('../lib/collision-detect')
const Ball = require('../lib/ball')
const ViewPort = require('../lib/viewport');


describe('Collisions', function() {

  context('detection', function() {

    it('a ball that has an x position less than a gateStart position and a y position equal to the top of a gate, it will move up with the gate', function() {

      var canvas = new ViewPort(300, 200)
      var gates = [new Gate({}, canvas)]
      var ball = new Ball({r: 10}, canvas)
      var score = []
      GateBuilder(gates, canvas)

      var gate = gates[0]
      gate.y = 75
      gate.gateHeight = 15
      gate.gateStart = 150
      var centerOfGate = gate.y
      var topOfGate = centerOfGate + gate.gateHeight

      ball.y = 80
      ball.x = 50
      var centerOfBall = ball.y
      var bottomOfBall = centerOfBall + ball.r

      assert.equal(topOfGate, bottomOfBall);
      assert(ball.x < gate.gateStart);

      CollisionDetect(ball, gates, score)

      gate.update(10, canvas)

      assert.equal(gate.y, 65)
      assert.equal(bottomOfBall, 65)
      // how do we test this?

    });
  });

});
