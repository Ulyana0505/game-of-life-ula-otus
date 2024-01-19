import { gameState, deadCell, aliveCell } from './constants'
import styles from './game-board.module.css'

export function handlerClick(e: MouseEvent) {
    if (gameState.started) return
    const target = e.target as HTMLElement
    if (target.hasAttribute('data-x') && target.hasAttribute('data-y')) {
        const x = Number(target.getAttribute('data-x'))
        const y = Number(target.getAttribute('data-y'))
        switch (gameState.arrayCells[y][x]) {
            case deadCell:
                gameState.arrayCells[y][x] = aliveCell
                break
            case aliveCell:
                gameState.arrayCells[y][x] = deadCell
                break
        }
        target.classList.remove(styles.alive, styles.dead)
        target.classList.add(
            gameState.arrayCells[y][x] === aliveCell
                ? styles.alive
                : styles.dead
        )
    }
}
