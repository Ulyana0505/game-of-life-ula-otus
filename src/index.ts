import { tools } from './tools'
import { updateBoard, redrawBoard } from './game-board'

function draw() {
    tools()
    updateBoard()
    redrawBoard()
}

draw()
