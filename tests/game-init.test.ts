import { timer } from "../src/game-controll";
import { gameState, idBtnDrawTable } from "../src/constants";
import { createTable } from "./utils";

describe("game-init", () => {
  it("default", async () => {
    import("../src/index");
    await timer(0);

    const rows = 5;
    const cols = 6;

    gameState.started = true;
    createTable(rows, cols);
    await timer(0);

    expect(gameState.arrayCells.length).toEqual(0);

    gameState.started = false;
    document.getElementById(idBtnDrawTable)?.click();

    expect(gameState.arrayCells.length).toEqual(rows);
    expect(gameState.arrayCells[0].length).toEqual(cols);
  });
});
