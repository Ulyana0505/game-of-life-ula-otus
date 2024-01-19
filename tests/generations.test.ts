import { timer } from "../src/game-controll";
import { generationStepOne, generationStepTwo, scan } from "../src/generations";
import { aliveCell, deadCell, gameState } from "../src/constants";
import { updateBoard } from "../src/game-board";

describe("generation", () => {
  it("scan", async () => {
    import("../src/index");
    await timer(0);

    expect(scan(1, 1)).toEqual(0);
    gameState.arrayCells[0][0] = aliveCell;
    expect(scan(1, 1)).toEqual(1);
  });
  it("generationStep", async () => {
    import("../src/index");
    await timer(0);

    gameState.rows = 3;
    gameState.cols = 3;
    updateBoard();
    gameState.arrayCells[0][0] = deadCell;
    gameState.arrayCells[1][1] = aliveCell;
    gameState.arrayCells[1][0] = aliveCell;
    gameState.arrayCells[0][1] = aliveCell;

    expect(gameState.arrayCells).toEqual([
      [1, 2, 1],
      [2, 2, 1],
      [1, 1, 1],
    ]);
    generationStepOne();
    expect(gameState.arrayCells).toEqual([
      [4, 2, 1],
      [2, 2, 1],
      [1, 1, 1],
    ]);
    generationStepTwo();
    expect(gameState.arrayCells).toEqual([
      [2, 2, 1],
      [2, 2, 1],
      [1, 1, 1],
    ]);
  });
});
