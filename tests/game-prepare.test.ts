import { timer } from "../src/game-controll";
import { createTable } from "./utils";
import {
  aliveCell,
  deadCell,
  gameState,
  idBtnGameStart,
  idBtnGameStop,
} from "../src/constants";

describe("game-prepare", () => {
  it("default", async () => {
    import("../src/index");
    await timer(0);

    createTable(7, 7);
    await timer(0);

    const cells = [...document.getElementsByTagName("td")];
    cells[0].click();
    expect(gameState.arrayCells[0][0]).toEqual(aliveCell);
    cells[0].click();
    expect(gameState.arrayCells[0][0]).toEqual(deadCell);

    // кликаем не на td (отработает if target.hasAttribute("data-x") === false)
    document.getElementsByTagName("table").item(0)?.click();
    await timer(0);

    document.getElementById(idBtnGameStart)?.click();
    await timer(0);
    cells[0].click();
    await timer(0);
    expect(gameState.arrayCells[0][0]).toEqual(deadCell);
    document.getElementById(idBtnGameStop)?.click();
    await timer(0);

    expect(gameState.arrayCells[0][0]).toEqual(deadCell);
  });
});
