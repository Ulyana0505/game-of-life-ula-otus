import { gameState, aliveCell, deadCell, willBeDeadCell, willBeAlive } from "./constants";

export function generationStepOne() {
    const maxX = gameState.arrayCells[0].length;
    const maxY = gameState.arrayCells.length;

    console.log("generations: ", {maxX, maxY});

    for(let y = 0; y < maxY; y++){
        for(let x = 0; x < maxX; x++){
            const counter = scan(x, y);
            if(gameState.arrayCells[y][x] === aliveCell) {
                if(counter === 2 || counter === 3) {
                    continue;
                } else {
                    gameState.arrayCells[y][x] = willBeDeadCell;
                }
            } else {
                if(counter === 3){
                    gameState.arrayCells[y][x] = willBeAlive;
                }
            }
        }
    }
}

export function generationStepTwo() {
    const maxX = gameState.arrayCells[0].length;
    const maxY = gameState.arrayCells.length;

    console.log("generations: ", {maxX, maxY});

    for(let y = 0; y < maxY; y++){
        for(let x = 0; x < maxX; x++){
            switch(gameState.arrayCells[y][x]) {
                case willBeDeadCell: {
                    gameState.arrayCells[y][x] = deadCell;
                    break;
                }
                case willBeAlive: {
                    gameState.arrayCells[y][x] = aliveCell;
                    break;
                }
            }
        }
    }
}

export function scan(x0: number, y0: number) {
    let counter = 0;
    for(let y = -1; y < 2; y++){
        for(let x = -1; x < 2; x++){
            if(y === 0 && x === 0 || !gameState.arrayCells[y0+y] || !gameState.arrayCells[y0+y][x0+x]){
                continue;
            }
            if(gameState.arrayCells[y0+y][x0+x] === aliveCell) {
                counter++;
            }
        }
    }
    return counter;
}