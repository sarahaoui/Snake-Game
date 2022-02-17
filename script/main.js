import{update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeIntersection, getSnakeHead} from './snake.js'
import{update as updateFood, draw as drawFood, score} from './food.js'
import{outsideGrid} from './grid.js'



let lastRenderTime=0;
let gameOver=false
const gameBoard=document.getElementById('game-board')
const Score =document.querySelector('.Score')
export const foodSound = new Audio('audio/food.mp3');
export const gamevverSound = new Audio('audio/gameover.mp3');
export const moveSound = new Audio('audio/move.mp3');
export const musicSound = new Audio('audio/music.mp3');

 // loop function
function main(currentTime){  
    if (gameOver) {
      gamevverSound.play()
      musicSound.pause()
    if (confirm('You lost. Press ok to play again.')) {
     location.reload()
    }
    return
  }
    musicSound.play()
    window.requestAnimationFrame(main);     
    const secondsSinceLastRender=(currentTime-lastRenderTime)/1000;
    if(secondsSinceLastRender <1/SNAKE_SPEED) return
    console.log("Runder")
    lastRenderTime=currentTime;
    update()
    draw()
}

window.requestAnimationFrame(main);  // to start our loop function

function update(){
  Score.innerHTML= score
   updateSnake()
   updateFood()
   checkDeath()
}
function draw(){
    gameBoard.innerHTML=''  //to delete the rest of  circles
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

