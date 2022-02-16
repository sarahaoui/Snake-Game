import{update as updateSnake, draw as drawSnake, SNAKE_SPEED, snakeIntersection, getSnakeHead} from './snake.js'
import{update as updateFood, draw as drawFood} from './food.js'
import{outsideGrid} from './grid.js'


let lastRenderTime=0;
let gameOver=false
const gameBoard=document.getElementById('game-board')


 // loop function
function main(currentTime){  
    if (gameOver) {
    if (confirm('You lost. Press ok to restart.')) {
      window.location = '/'
    }
    return
  }
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