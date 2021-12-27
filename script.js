let canvas = document.querySelector('canvas')
let ctx= canvas.getContext('2d');
const goRight = document.getElementById('right');

// intro to the game - will add a font that looks like cookies and an affect that makes the cookies crumble when scrolled over (stretch goal?)

function drawBackGround(){
ctx.fillStyle = 'tan';
ctx.fillRect (0,500,1100,500);
ctx.fillStyle = 'silver';
ctx.fillRect (0,0,1100,500)
}

// setting up the area/shape for the child (main character block)
let childX = 400
let childY = 450
let childJump = false

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    drawBackGround()
    drawEnemy()
    drawChild()
    drawObstacles()
    jumpUp()
    window.requestAnimationFrame(draw)
}
const drawChild = () => {
    ctx.fillStyle = 'yellow'
    ctx.fillRect (childX,childY,50,50); 
    ctx.stroke();
}

const drawEnemy = () => {
    ctx.fillStyle = 'purple'
    ctx.fillRect (100, 370, 60, 130);
    ctx.stroke();
}
const drawObstacles = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect (1000,450,50,50)
    ctx.stroke();
}
draw() // this tells the code when a spacebar (key 32) is pressed to move up that many pixles
function moveChild (e) {
    if(e.keyCode === 32){
        childJump = true
    }
}
function jumpUp(){
    if(childJump && childY >= 250){
        childY -= 5
    }if (childY === 250){
         childY = 450
         childJump = false
}
}
// let enemyX = 400
// let enemyY = 100


window.requestAnimationFrame(draw)
addEventListener('keyup' , moveChild)