let canvas = document.querySelector('canvas')
let ctx= canvas.getContext('2d');
ctx.font = '45px Times New Roman';
ctx.fillText("Cookie Crumble", 415,200);

//variables that I will need throughout the game 
let score;
let highscore;
let player;
let obstacles;
let enemy;
let gameSpeed;
let keys = [];

ctx.beginPath();
ctx.fillStyle = 'yellow'
ctx.fillRect(400,450,50,50); 
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(10,400,80,100);
ctx.stroke();

let dx = 2 
let dy = -2
let x = 25
let y = 25

ctx.fillStyle = 'yellow';

function draw(); {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.fillRect(x,y,50,50)

    if( x + dx > canvas.width-1 || x + dx < 0){
        dx = -dx;
    } 
    if(y + dy > canvas.height -1 || y + dy < 0){
        dy = -dy;
    }
    x += dx;
    y += dy;
}
setInterval(draw, 30);

   // cookieCount = 0
//canvas.addEventListener('keypress' ,function(){





