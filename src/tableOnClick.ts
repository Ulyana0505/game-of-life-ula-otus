import { arrayOfCell, deadCell, aliveCell, willBeDeadCell, deadCSSClass, aliveCSSClass } from "./constants";

export function handlerClick(e: MouseEvent){
    // console.log(e.target);
    const target = e.target as HTMLElement;
    if(target.hasAttribute("data-x") && target.hasAttribute("data-y")){
        const x = Number(target.getAttribute("data-x"));
        const y = Number(target.getAttribute("data-y"));
        if(arrayOfCell.current[y][x] === deadCell){
            arrayOfCell.current[y][x] = aliveCell;
        } else if(arrayOfCell.current[y][x] === aliveCell) {
            arrayOfCell.current[y][x] = deadCell;
        }
        // 0 = dead; 1 = alive; 2 = willBeDead;
        target.className = arrayOfCell.current[y][x]?aliveCSSClass:deadCSSClass;
    }
    console.dir(arrayOfCell);
  }


