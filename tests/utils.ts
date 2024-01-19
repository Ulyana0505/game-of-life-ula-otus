import { gameState } from "../src/constants";
import { redrawBoard, updateBoard } from "../src/game-board";

export function createTable(rows: number, cols: number) {
  gameState.rows = rows;
  gameState.cols = cols;
  updateBoard();
  redrawBoard();
}
