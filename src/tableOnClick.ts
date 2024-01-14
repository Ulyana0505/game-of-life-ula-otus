
export function handlerClick(e: MouseEvent){
    console.log(e.target);
    const target = e.target as HTMLElement;
    if("x" in target.dataset && "y" in target.dataset){

    }
    if(target.classList.contains('dead')){
        target.classList.remove('dead');
        target.className = "alive";
    } else if(target.classList.contains('alive')) {
        target.classList.remove('alive');
        target.className = "dead";
    }
  }


