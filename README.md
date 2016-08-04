# Game Time!

Module 1 Final Project - Created by Casey Metz & Jeff Duke



##Intro
For our Game-Time project we chose to make our own version of a classic Breakout style game.  It is built purely in javascript.  Styled after a 50's cookbook theme.  The game allows the player to choose any of 10 different levels to play.  Clicking the 'Start Blanchin!' button gives the player a countdown timer before the almond is launched.  Gameplay continues until the player clears all the bricks or loses the almond 3 times.  At any time a player is able to change the level using the buttons in the lower left corner of the screen.  

##How the Game Works
Breakout is somewhat of a physics based game.  It involves a ball, in this case an almond, bouncing around the screen, off walls, off a paddle at the bottom of the screen and off the bricks in the playfield.  Each brick is spawned with a status of 1 or 3.  When the ball hits the brick it decrements its status, once a brick reaches a status of 0 it is removed from play.  If the almond is allowed to pass the bottom of the screen it is lost and the player gets another chance.  Players start with 3 lives total, these are replenished at each level.  If a player loses all 3 lives during a level the game is over and they can click the "Reset Game" button to start over.

The "blanched almond" theme is a tribute to our favorite CSS named color, "blanchedalmond," aka #FFEBCD. Our cohort was tickled to discover such a fancied-up name for what is essentially beige, and it spiraled into an over-cooked inside joke. The color itself is featured prominently in the game's styling. 

#How the Levels are built
Levels have been built in the levels.js file.  They are comprised of arrays of text characters that represent different types of bricks.  # for a normal 1 hit brick, O for a placeholder brick that will show as empty space in the playfield and M for multi-hit bricks.  When a player selects a level, the array is flattened and joined into 1 long text string.  A for loop interprets the text characters and builds new bricks accordingly.  These bricks are placed into another array.  Each brick in the array has the same default X and Y coordinates.  The array is run through a pair of nested for loops to place them in the 12 x 8 grid in the playfield.  The playfield is then rendered on screen.  Another for loop constantly checks the bricks in play and removes them from the array, and the playfield, as soon as their status reaches 0.  Once there are no longer any bricks with a status > 0 in the playfield, the level is complete and the next level is loaded.  

##Collisions and physics
There were some unique challenges to overcome when building this game.  One was to setup collision detection on the walls, the bricks and the paddle.  For the walls and the ceiling, one axis of the balls trajectory is inverted upon impact.  For the paddle, the ball is sent off in a pre-determined direction based on where it strikes the paddle.  If it strikes the outer 20% on either side, it is sent off in a 45deg trajectory from the side it struck.  If it strikes within the 20% - 40% zone on either side it is sent off in a 60 degree trajectory from the paddle.  If the ball strikes the center 20% it continues on the same path it came in on.  

For the bricks, we faced some issues where the ball would tunnel between bricks as it was able to push too far into a brick between frames.  We mitigated this some by "padding" the collision zone so that the collision, and subsequent bounce function, would be triggered earlier.  Unfortunately it seems it is impossible to eliminate this completely without implementing a 3rd party physics engine.  We have the bricks set to detect if a collision occurs and then the ball is responsible for determining where the collision occurred and bouncing accordingly.  

##Summary
This was a really fun project that presented a lot of unique challenges.  We are happy with how it turned out, the playability and our ability to add levels quickly and easily.  This will be a fun project to revisit and improve upon in the future.
