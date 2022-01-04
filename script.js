// this links all my images that are saved to my game project (cookie, cookie jar, tonka truck)

let cookieImage = new Image();
cookieImage.src = 'Usethiscookie.png' // Image from http://clipart-library.com/free/cartoon-cookie-png.html
let obstacleImage = new Image();
obstacleImage.src ='Usethistonka.png' // Image from https://www.pngkey.com/maxpic/u2w7o0u2r5e6o0e6/ 
let cookieJarImage = new Image();
cookieJarImage.src = 'Usethisjar.png'// Image from https://clipart.world/jar-clipart/cookies-jar-clipart-transparent/
let childSpriteImage = new Image ();
childSpriteImage.src = 'boyjump-0.png' // Image from https://www.gameart2d.com/the-boy---free-sprites.html (abe helpe with formatting)
let enemySpriteImage = new Image();
enemySpriteImage.src = 'WomanWalking.png' // Image from https://www.vector4free.com/free-vectors/walk (edited in paint)
                            // to get the background of the image to be transparent I used ~ https://www6.lunapic.com
                                    
let canvas = document.querySelector('canvas');
let ctx= canvas.getContext('2d');

// My game is set up as a platformer game, similar to Super Mario or Flappy birds type of challenges. 
// A platform game (often simplified as platformer or jump 'n' run games) ~ Wikipedia

// starting the game when the button is clicked - starts making the objects move & it's moving the menu off of the screen
let isGamePaused = true;
let hiddenMenu = false;
const startGameButton = document.querySelector('.start-game');
const menu = document.querySelector('.menu');
startGameButton.addEventListener('click', () => {
    isGamePaused = false;
    hiddenMenu = true;
    menu.classList.add('hidden')
})
const restartGameButton = document.querySelector('.restart-game');
restartGameButton.addEventListener('click', () => {
    location.reload()    // The reload() method does the same as the reload button in your browser. ~ W3Schools.com
    })
// intro to the game - will add a font that looks like cookies and an affect that makes the cookies crumble when scrolled over (stretch goal?)
function drawBackGround(){
ctx.fillStyle = 'tan';
ctx.fillRect (0,500,1100,500);
ctx.fillStyle = 'silver';
ctx.fillRect (0,0,1100,500)
}
// setting up initial location for my child figure 0,0 is the top left corner entire canvas is 600 x 1100
let childX = 400
let childY = 450
//this line tells my code that the child is NOT jumping when his coordinates are set to 400x/450y 
let childJump = false

// setting up initial location for my enemy figure 
let enemyX = 10
let enemyY = 370

//same for enemy child. width/height,etc
let cookieCount = 0
let endGame = document.querySelector('.endGame')

// this function is redrawing the entire canvas and redraws to appear like characters and obstacles are moving 
// seemlessly accross the canvas. 
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
    drawCookieCount()
    drawCookieJar()
    
    if(isCollidingObject({x:childX,y:childY,height:50,width:50},{x:enemyX, y:enemyY, height:130, width:60})){
        isGamePaused = true
        endGame.classList.remove('hidden')
    }
    obstacleArray.forEach(ob => {
        ob.draw()
        if(isCollidingObject({x:childX,y:childY,height:50,width:50},ob)){
           // isGamePaused = true
           // endGame.classList.remove('hiddden') // more challenging objective to add later to the game
        }
    })
    // when the cookies collid with the child += 1 to the 'cookie count' 
    cookieArray.forEach((object, i) => {
        object.draw()
        if(isCollidingObject({x:childX,y:childY,height:50,width:50},object)){
        cookieCount ++ 
        cookieArray.splice(i,1)
        console.log(cookieCount)
    } 
})
    window.requestAnimationFrame(draw)
}
let childCurrentFrame = 0
const drawChild = () => {
    childCurrentFrame += .1 // show how this speed impacts the childs movement - show sprite where we got the math
    if(childCurrentFrame >= 15){
        childCurrentFrame = 0 
    }
    let frameX = Math.floor(childCurrentFrame % 5) * 154
    let frameY = Math.floor(childCurrentFrame / 5) * 141
    ctx.drawImage(childSpriteImage,frameX,frameY,154,141,childX,childY,154,141)
}
let enemyCurrentFrame = 0
const drawEnemy = () => {
    enemyCurrentFrame += .05
    enemyX += .1
    if(enemyCurrentFrame >= 6){
        enemyCurrentFrame = 0 
    }
    let frameX = Math.floor(enemyCurrentFrame % 6) * 96
    console.log(frameX)
    let frameY = Math.floor(enemyCurrentFrame / 6) 
    
    ctx.drawImage(enemySpriteImage,frameX,0,100,199,enemyX,enemyY,100,200)
}

//the coordinates for the cookie jar in the top right corner - since it isn't moving I could just put the exact location in
const drawCookieJar = () => {
    let jarX = 1000
    let jarY = 10
    ctx.drawImage(cookieJarImage, jarX, jarY, 80, 100);
}
// the text for the cookie count 
const drawCookieCount = () => {
    ctx.fillStyle = 'red';
    ctx.font = "20px times new roman"
    ctx.fillText(`cookie count: ${cookieCount}`, 850, 50)
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
        this.x -= 3 // speed of how fast they come on the screen
        ctx.drawImage(obstacleImage, this.x, this.y, this.width, this.height)
    }
}
for(let i = 0; i < 35; i++){  // how many obstacles there are 
    const randomNum = Math.floor(Math.random() * 5000)
    const obstacle1 = new Obstacle(1000 + randomNum,450,70,55)
    obstacleArray.push(obstacle1)
    }

const cookieArray = [] // when the project is finished, I will go back and add classes as follows to my 
// other characters so they are easier to access throughout the entire project and to get additional practice with
// creating classes. 
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
draw() // this tells the code when a spacebar (key 32) is pressed to move up that many pixles
function moveChild (e) {
    if(e.keyCode === 32){
        childJump = true 
    }
}
function jumpUp(){ // this function is bringing the character up to 200 pixles and then back down when he reaches 200
    if(childJump && childY > 200){
        childY -= 5
    }else if (childJump && childY === 200){
         childJump = false
    }else if(!childJump && childY >= 200 && childY !== 450 ){
        childY += 5
    }
}
// this function is refering back to the collision dection that was in the begining of the script. 
function isCollidingObject(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.height + obj1.y > obj2.y;
}
// The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and
// requests that the browser calls a specified function to update an animation before the next repaint. 
// https://developer.mozilla.org

window.requestAnimationFrame(draw)
addEventListener('keyup' , moveChild)
