let cookieImage = new Image();
cookieImage.src = 'Usethiscookie.png' // Image from http://clipart-library.com/free/cartoon-cookie-png.html
let obstacleImage = new Image();
obstacleImage.src ='Usethistonka.png' // Image from https://www.pngkey.com/maxpic/u2w7o0u2r5e6o0e6/ 
let cookieJarImage = new Image();
cookieJarImage.src = 'Usethisjar.png'// Image from https://clipart.world/jar-clipart/cookies-jar-clipart-transparent/
let childSpriteImage = new Image ();
childSpriteImage.src ='Boyjump.png' // Image Abe helped edit into a file making it easier to create a sprite

let canvas = document.querySelector('canvas');
let ctx= canvas.getContext('2d');

let spritesheet;
childSpriteImage.addEventListener('load',() => {
   // box.Image = childSpriteImage
} )

// starting the game when the button is clicked - starts making the objects move
let isGamePaused = true;
let hiddenMenu = false;
const startGameButton = document.querySelector('.start-game');
const menu = document.querySelector('.menu');
startGameButton.addEventListener('click', () => {
    isGamePaused = false;
    hiddenMenu = true;
    document.body.removeChild(menu)
   
})
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

let cookieCount = 0

function draw(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    drawBackGround()
    if (isGamePaused){
        window.requestAnimationFrame(draw) 
        return
    }
    drawEnemy()
    drawChild()
    jumpUp()
    drawCookieJar()
    obstacleArray.forEach(ob => {
        ob.draw()
        if(isColliding({x:childX,y:childY,height:50,width:50},ob)){
            console.log("Collided")
        }
    })
    cookieArray.forEach((object, i) => {
        object.draw()
        if(isColliding({x:childX,y:childY,height:50,width:50},object)){
        cookieCount ++ 
        cookieArray.splice(i,1)
        console.log(cookieCount)

    }
})
    window.requestAnimationFrame(draw)
}

function animate (){
    ctx.drawImage (
        spritesheet,
        0,
        0,
        770,
        423,
    )
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
const drawCookieJar = () => {
    let jarX = 1000
    let jarY = 10
    ctx.drawImage(cookieJarImage, jarX, jarY, 80, 100);
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
        ctx.drawImage(obstacleImage, this.x, this.y, this.width, this.height)
    }
}
for(let i = 0; i < 35; i++){
    const randomNum = Math.floor(Math.random() * 7000)
    const obstacle1 = new Obstacle(1000 + randomNum,450,70,55)
    obstacleArray.push(obstacle1)
    }

const cookieArray = []
class PowerUp {
    constructor(x,y,width,height){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    }
    draw(){
        this.x -= 1
        ctx.drawImage(cookieImage, this.x,this.y, this.width, this.height)
    }
}
for(let i = 0; i < 25; i++){
    const maximum = 2750
    const minimum = 250
    let randomnumber = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    const cookie1 = new PowerUp(1000 + randomnumber, Math.random() * 300 + 45 , 30, 30) 
    cookieArray.push(cookie1)
}
//
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