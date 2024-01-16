import {
  gameState,
  idBtnDrawTable,
  idInputCols,
  idInputRows,
} from "./constants";
import { createField } from "./createField";

export function buttonClick() {
  if (gameState.started) return;
  document.getElementById("table")?.remove();

  const inputCols = document.getElementById("inputCols") as HTMLInputElement;
  const cols = Number(inputCols.value);
  inputCols.value = "";

  const inputRows = document.getElementById("inputRows") as HTMLInputElement;
  const rows = Number(inputRows.value);
  inputRows.value = "";

  createField(cols, rows);
}

export function setRows() {
  const inputRows = document.createElement("input");
  inputRows.placeholder = "Введите число строк";
  inputRows.type = "number";
  inputRows.className = "input";
  inputRows.id = idInputRows;
  document.body.appendChild(inputRows);
}

export function setCols() {
  const inputCols = document.createElement("input");
  inputCols.placeholder = "Введите число колонок";
  inputCols.type = "number";
  inputCols.className = "input";
  inputCols.id = idInputCols;
  document.body.appendChild(inputCols);
}

const button = document.createElement("button");
document.body.appendChild(button);
button.innerHTML = "Нажмите";
button.id = idBtnDrawTable;
button.addEventListener("click", buttonClick);
