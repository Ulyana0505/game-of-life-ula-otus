import { gameState, deadCell, aliveCell, willBeDeadCell, deadCSSClass, aliveCSSClass } from "./constants";


export function handlerClick(e: MouseEvent){
    // console.log(e.target);
    if(!gameState.started) {
        const target = e.target as HTMLElement;
        if(target.hasAttribute("data-x") && target.hasAttribute("data-y")){
            const x = Number(target.getAttribute("data-x"));
            const y = Number(target.getAttribute("data-y"));
            if(gameState.arrayCells[y][x] === deadCell){
                gameState.arrayCells[y][x] = aliveCell;
            } else if(gameState.arrayCells[y][x] === aliveCell) {
                gameState.arrayCells[y][x] = deadCell;
            }
            target.className = gameState.arrayCells[y][x]===aliveCell?aliveCSSClass:deadCSSClass;
            console.log(gameState.arrayCells[y][x], target.className);
        }
        console.dir(gameState);
    }
  }


