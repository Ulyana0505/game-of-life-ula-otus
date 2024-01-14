import { arrayOfCell } from "./constants";

export function handlerClick(e: MouseEvent){
    // console.log(e.target);
    const target = e.target as HTMLElement;
    if(target.hasAttribute("data-x") && target.hasAttribute("data-y")){
        const x = Number(target.getAttribute("data-x"));
        const y = Number(target.getAttribute("data-y"));
        if(arrayOfCell.current[y][x] === 0){
            arrayOfCell.current[y][x] = 1;
        } else if(arrayOfCell.current[y][x] === 1) {
            arrayOfCell.current[y][x] = 0;
        }
        // 0 = dead; 1 = alive; 2 = willBeDead;
        target.className = arrayOfCell.current[y][x]?"alive":"dead";
    }
    console.dir(arrayOfCell);
  }


