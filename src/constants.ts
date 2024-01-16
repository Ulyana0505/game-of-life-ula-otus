export const gameState = {
  arrayCells: [] as number[][],
  started: false,
  canceled: false,
  generation: 0,
  timer: 300,
};
export const deadCell = 1;
export const aliveCell = 2;
export const willBeDeadCell = 3;
export const willBeAlive = 4;
export const deadCSSClass = "dead";
export const aliveCSSClass = "alive";
export const willBeAliveCSSClass = "will-be-alive";
export const willBeDeadCSSClass = "will-be-dead";

export const idBtnDrawTable = "draw-table";
export const idInputRows = "inputRows";
export const idInputCols = "inputCols";
export const idBtnGameStart = "game-start";
export const idBtnGameStop = "game-stop";

export const elemGeneration = document.createElement("div");
