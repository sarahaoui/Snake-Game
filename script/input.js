import { moveSound } from "./main.js"

let inputDirection={x:0,y:0}
let lastInputDirection={x:0,y:0}

window.addEventListener('keydown',e =>{
    switch(e.key){
        case 'ArrowUp':
            moveSound.play()
            if(lastInputDirection.y !==0) break
            inputDirection={x: 0,y: -1}
            break
        case 'ArrowDown':
            moveSound.play()
            if(lastInputDirection.y !==0) break
            inputDirection={x: 0,y: 1}
            break
        case 'ArrowLeft':
            moveSound.play()
            if(lastInputDirection.x !==0) break
            inputDirection={x: -1,y: 0}
            break
        case 'ArrowRight':
            moveSound.play()
            if(lastInputDirection.x !==0) break
            inputDirection={x: 1,y: 0}
            break
    }
})

export function getInputDirection(){
    lastInputDirection=inputDirection
    return inputDirection
}