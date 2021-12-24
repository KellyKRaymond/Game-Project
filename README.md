# Game-Project

First I started out by picking a specific theme for my project (based on my real life). This is the inspiration behind the game (show picture of Chase eatting cookies.)

I created my folder and files inside my folder linking them so they could all work together, and then I got to researching - on top of what we learned in class I watched countless YouTube video's on what would be the most efficent way to create a game. 

explain side scroller vs platformer view of the screen 



drum roll please ~~~ CANVAS ~~~~

What is HTML Canvas? (definition from W3Schools)
The HTML <canvas> element is used to draw graphics, on the fly, via JavaScript.
The <canvas> element is only a container for graphics. You must use JavaScript to actually draw the graphics.
Canvas has several methods for drawing paths, boxes, circles, text, and adding images.


ctx.beginPath();
ctx.fillStyle = 'yellow'
ctx.fillRect(400,450,50,50);  // first two numbers represent where on the canvas the item will be when set to 10,10 they were in the upper left hand corner
I had to move the to 400/450 pixles away from the 0 index (top left corner)
ctx.stroke();


Resources utilized: Class notes, classmates, office hours, Eric and Chelsea - as well as YouTube I really enjoyed the 'code train' and ' & 'chris course' 

Biggest challenge for me was every time I added something and didn't have it complete or wasn't 100% correct - EVERYTHING would disappear off my canvas and I would be left with the 
blue frame around my box - I couldn't even visualize or pint point what I was messing with. ~~~ i had an extra } at the end of my code which was why it was doing this.
easiest part for me was coming up with (too many) ideas and getting ahead of myself with graphics and planning - not realizing how many functions go into each detail. 

//variables that I will need throughout the game 
// let intro;
// //let child;
// let gravity;
// let obstacles;
// //let enemy;
// let gameSpeed;
// let keys = [];
// let score;
// let highScore;
// let endGame; 
// let resetGame // start over from 0 

// setting up the area/shape for the floor ( will be the same the entire game)


// setting up the area/shape for the enemy block
const enemy = () => {
ctx.fillStyle = 'blue';
ctx.fillRect (10,400,80,100);
ctx.stroke();
}
// setting up one obstacle to appear right - left on screen 
const obstacle = () => {
ctx.fillStyle = 'black';
ctx.fillRect (1000, 400, 50, 100);
ctx.stroke();
}
// setting up the cookie jar to collect the cookies for power ups - top/right corner
const cookieJar = () => {
ctx.fillStyle = 'grey';
ctx.fillRect(1010, 10, 60, 60);
ctx.stroke();
}
// setting up the mom's anger level - top/left corner
const angerLevel = () => {
ctx.fillStyle = 'orange'
ctx.fillRect(10,10,200,40);
ctx.stroke();
}
