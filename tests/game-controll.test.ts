import { timer } from "../src/game-controll";
import {
  aliveCell,
  gameState,
  idBtnGameStart,
  idBtnGameStop,
} from "../src/constants";
import { createTable } from "./utils";

describe("game-circle", () => {
  beforeEach(async () => {
    import("../src/index");
    await timer(0);
    window.alert = jest.fn();
  });

  it("start", async () => {
    gameState.timer = 1;

    createTable(7, 7);
    await timer(0);

    document.getElementById(idBtnGameStart)?.click();
    expect(gameState.started).toEqual(true);

    await timer(100);
    expect(gameState.generation).toEqual(1);

    fill();

    document.getElementById(idBtnGameStart)?.click();
    await timer(100);
    expect(gameState.generation).toEqual(7);
  });

  it("stop", async () => {
    gameState.timer = 50;
    createTable(7, 7);
    await timer(0);
    fill();
    document.getElementById(idBtnGameStop)?.click();
    await timer(0);
    expect(gameState.canceled).toEqual(false);
    document.getElementById(idBtnGameStart)?.click();
    await timer(0);
    expect(gameState.canceled).toEqual(false);
    document.getElementById(idBtnGameStop)?.click();
    await timer(0);
    expect(gameState.canceled).toEqual(true);
  });
});

function fill() {
  for (let y = 2; y < 5; y++) {
    for (let x = 2; x < 5; x++) {
      gameState.arrayCells[y][x] = aliveCell;
    }
  }
}
