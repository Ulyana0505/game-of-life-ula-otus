import { timer } from "../src/game-controll";
import { handlerCols, handlerRow, handlerSpeed } from "../src/tools";
import {
  gameState,
  idInputCols,
  idInputRows,
  idInputTime,
} from "../src/constants";

describe("tools", () => {
  it("handlerRow", async () => {
    import("../src/index");
    await timer(0);
    expect(gameState.rows).toEqual(5);
    (document.getElementById(idInputRows) as HTMLInputElement).value = "7";
    handlerRow();
    expect(gameState.rows).toEqual(7);
  });
  it("handlerCols", async () => {
    import("../src/index");
    await timer(0);
    expect(gameState.cols).toEqual(5);
    (document.getElementById(idInputCols) as HTMLInputElement).value = "6";
    handlerCols();
    expect(gameState.cols).toEqual(6);
  });
  it("handlerSpeed", async () => {
    import("../src/index");
    await timer(0);
    expect(gameState.timer).toEqual(300);
    (document.getElementById(idInputTime) as HTMLInputElement).value = "100";
    handlerSpeed();
    expect(gameState.timer).toEqual(100);
  });
});
