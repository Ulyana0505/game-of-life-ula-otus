import {
  gameState,
  deadCell,
  aliveCell,
  deadCSSClass,
  aliveCSSClass,
} from "./constants";

export function handlerClick(e: MouseEvent) {
  if (gameState.started) return;
  const target = e.target as HTMLElement;
  if (target.hasAttribute("data-x") && target.hasAttribute("data-y")) {
    const x = Number(target.getAttribute("data-x"));
    const y = Number(target.getAttribute("data-y"));
    switch (gameState.arrayCells[y][x]) {
      case deadCell:
        gameState.arrayCells[y][x] = aliveCell;
        break;
      case aliveCell:
        gameState.arrayCells[y][x] = deadCell;
        break;
    }
    target.className =
      gameState.arrayCells[y][x] === aliveCell ? aliveCSSClass : deadCSSClass;
    console.log(gameState.arrayCells[y][x], target.className);
  }
  console.dir(gameState);
}
