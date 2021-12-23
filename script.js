let canvas = document.querySelector('canvas')
let ctx= canvas.getContext('2d');

const goRight = document.getElementById('right');
const jump = document.getElementById('space')

// intro to the game - will add a font that looks like cookies and an affect that makes the cookies crumble when scrolled over (stretch goal?)
// instructions to read before the game and a start game button (html?)
function drawBackGround(){
ctx.fillStyle = 'tan';
ctx.fillRect (0,500,1100,500);
ctx.fillStyle = 'silver';
ctx.fillRect (0,0,1100,500)
}

// setting up the area/shape for the child (main character block)

let childX = 400
let childY = 450

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    drawBackGround()
    drawChild()
    window.requestAnimationFrame(draw)
}

const drawChild = () => {
    ctx.fillStyle = 'yellow' 
    ctx.fillRect (childX,childY,50,50); 
    ctx.stroke();
    }
let number = 300
draw() 
function moveChild (e) {
    childY += -10
    number++;
    console.log(e)

    //e.key
}
window.requestAnimationFrame(moveChild)
addEventListener('keyup' , moveChild)

