const Bullet = require('../lib/bullet.js');

const chai = require('chai');
const assert = chai.assert;


describe('Bullet', function() {
   it('has a default x position', function () {
       const bullet = new Bullet({x: 1, y:0}, 1);
       assert.equal(bullet.position.x, 1);
   })

    it('has a default y position', function () {
        const bullet = new Bullet({x: 1, y:0}, 1);
        assert.equal(bullet.position.y, 0);
    })

    it('should have a velocity', function () {
        const bullet = new Bullet({x: 1, y: 0}, 1);
        assert.equal(bullet.velocity, 1);
    })

});