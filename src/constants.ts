export const gameState = {
    arrayCells: [] as number[][],
    started: false,
    canceled: false,
    generation: 0,
    timer: 300,
    cols: 5,
    rows: 5,
}
export const deadCell = 1
export const aliveCell = 2
export const willBeDeadCell = 3
export const willBeAlive = 4

export const idBtnDrawTable = 'draw-table'
export const idInputRows = 'inputRows'
export const idInputCols = 'inputCols'
export const idInputTime = 'inputTime'
export const idBtnGameStart = 'game-start'
export const idBtnGameStop = 'game-stop'
export const idLabelSpeed = 'speed'

export const elemGeneration = document.createElement('div')

export const buttonStart = document.createElement('button') as HTMLButtonElement
