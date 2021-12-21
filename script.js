let canvas = document.querySelector('canvas')
let ctx= canvas.getContext('2d');

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
ctx.fillRect(400,450,50,50);    // first two numbers represent where on the canvas the item will be when set to 10,10 they were in the upper left hand corner I had to move the to 400/450 pixles away from the 0 index (top left corner)
ctx.stroke();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(10,400,80,100);
ctx.stroke();

function Start (){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    cookieCount = 0
}

function makeMove(){
ctx.clearRect(0,0, canvas.width, canvas.height);
ctx.clearRect(0,0, canvas.width, canvas.height);

}