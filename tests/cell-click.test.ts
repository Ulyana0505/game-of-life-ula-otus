import { timer } from "../src/game-controll";
import { createTable } from "./utils";
import {
  aliveCell,
  deadCell,
  gameState,
  idBtnGameStart,
} from "../src/constants";

describe("cell-click", () => {
  it("handlerClick", async () => {
    import("../src/index");
    await timer(0);

    createTable(7, 7);
    await timer(0);

    // кликаем не на td (отработает if target.hasAttribute("data-x") === false)
    document.getElementsByTagName("table").item(0)?.click();
    await timer(0);

    const cells = [...document.getElementsByTagName("td")];
    cells[0].click();
    expect(gameState.arrayCells[0][0]).toEqual(aliveCell);
    cells[0].click();
    expect(gameState.arrayCells[0][0]).toEqual(deadCell);

    // кликаем на ячейку когда игра запущена
    document.getElementById(idBtnGameStart)?.click();
    await timer(0);
    cells[0].click();
    expect(gameState.arrayCells[0][0]).toEqual(deadCell);
  });
});
