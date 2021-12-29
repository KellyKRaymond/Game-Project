let canvas = document.querySelector('canvas')
let ctx= canvas.getContext('2d');

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
    jumpUp()
    obstacleArray.forEach(ob => {
        ob.draw()
        if(isColliding({x:childX,y:childY,height:50,width:50},ob)){
            console.log("Collided")
        }
    })
    cookieArray.forEach(object => {
        object.draw()
        if(isColliding({x:childX,y:childY,height:50,width:50},object)){
        } console.log("eatthecookie")
    })
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
const obstacleArray = []
class Obstacle {
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    draw(){
        this.x -= 3
        ctx.fillStyle = 'black';
        ctx.fillRect (this.x,this.y,this.width,this.height)
    }
}
for(let i = 0; i < 35; i++){
    const randomNum = Math.floor(Math.random() * 17000)
    const obstacle1 = new Obstacle(1000 + randomNum,450,50,50)
    obstacleArray.push(obstacle1)
}
const cookieArray = []
class PowerUp {
    constructor(cookieX,cookieY,width,height){
        this.cookieX = cookieX
        this.cookieY = cookieY
        this.width = width
        this.height = height
    }

    draw(){
        this.cookiex -= 14
        ctx.beginPath();
        ctx.arc(1000, 275, 15, 0, 2 * Math.PI);
        ctx.fillStyle = 'brown'
        ctx.fillStyle = (this.cookieX,this.cookieY,this.width,this.height);
        ctx.closePath();
    }
}
for(let i = 0; i < 10; i++){
    const randomNum1 = Math.floor(Math.random() * 200)
    const randomNum2 = Math.floor(Math.random() * 400)
    const cookie1 = new PowerUp(randomNum1 + randomNum2, Math.random() * 1000 + 100, 150,150) 
    cookieArray.push(cookie1)
}

draw() // this tells the code when a spacebar (key 32) is pressed to move up that many pixles
function moveChild (e) {
    if(e.keyCode === 32){
        childJump = true // && childY === 450
    }
}
function jumpUp(){
    if(childJump && childY > 250){
        childY -= 5
    }else if (childJump && childY === 250){
         childJump = false
    }else if(!childJump && childY >= 250 && childY !== 450 ){
        childY += 5
    }
}
function isColliding(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.height + obj1.y > obj2.y;
}

window.requestAnimationFrame(draw)
addEventListener('keyup' , moveChild)