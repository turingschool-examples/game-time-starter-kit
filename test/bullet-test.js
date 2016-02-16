const Bullet = require('../lib/bullet.js');
const assert = require('chai').assert;

describe('Bullet', function() {
   it('has a default x position', function () {
       const bullet = new Bullet( { x: 1, y:0 }, 1 );
       assert.equal( bullet.position.x, 1 );
   });

    it('has a default y position', function () {
        const bullet = new Bullet( { x: 1, y:0 }, 1 );
        assert.equal( bullet.position.y, 0 );
    });

    it('has a velocity', function () {
        const bullet = new Bullet( { x: 1, y: 0 }, 1 );
        assert.equal( bullet.velocity, 1 );
    });
});