import { timer } from '../src/game-controll'
import { updateBoard } from '../src/game-board'
import { gameState } from '../src/constants'

describe('game-board', () => {
    it('updateBoard', async () => {
        import('../src/index')
        await timer(0)

        expect(gameState.arrayCells.length).toEqual(5)
        gameState.rows = 7
        updateBoard()
        expect(gameState.arrayCells.length).toEqual(7)
    })
})
