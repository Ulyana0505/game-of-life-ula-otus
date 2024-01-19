import './game-board.module.css'
import { handlerClick } from './cell-click'
import {
    gameState,
    deadCell,
    aliveCell,
    willBeAlive,
    willBeDeadCell,
} from './constants'
import styles from './game-board.module.css'

export function updateBoard() {
    const board = [] as number[][]
    for (let y = 0; y < gameState.rows; y++) {
        const row = [] as number[]
        for (let x = 0; x < gameState.cols; x++) {
            if (gameState.arrayCells[y] && gameState.arrayCells[y][x]) {
                row.push(gameState.arrayCells[y][x])
            } else {
                row.push(deadCell)
            }
        }
        board.push(row)
    }
    gameState.arrayCells = board
}

export function redrawBoard() {
    const table = document.createElement('table')
    table.classList.add(styles.table)
    table.id = 'table'

    const maxX = gameState.cols
    const maxY = gameState.rows

    for (let y = 0; y < maxY; y++) {
        const tr = document.createElement('tr')
        for (let x = 0; x < maxX; x++) {
            const td = document.createElement('td')
            td.classList.add(styles.cell)
            switch (gameState.arrayCells[y][x]) {
                case deadCell:
                    td.classList.add(styles.dead)
                    break
                case aliveCell:
                    td.classList.add(styles.alive)
                    break
                case willBeDeadCell:
                    td.classList.add(styles.will_be_dead)
                    break
                case willBeAlive:
                    td.classList.add(styles.will_be_alive)
                    break
            }
            td.setAttribute('data-x', `${x}`)
            td.setAttribute('data-y', `${y}`)
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
    table.addEventListener('click', handlerClick)
    const prevTable = document.getElementById('table')
    if (prevTable) {
        prevTable.replaceWith(table)
    } else {
        document.body.appendChild(table)
    }
}
