import { idBtnDrawTable, idInputCols, idInputRows } from "../src/constants";

export function createTable(rows: number, cols: number) {
  (document.getElementById(idInputRows) as HTMLInputElement).value =
    String(rows);
  (document.getElementById(idInputCols) as HTMLInputElement).value =
    String(cols);
  document.getElementById(idBtnDrawTable)?.click();
}
