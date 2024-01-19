import {
  buttonStart,
  elemGeneration,
  gameState,
  idBtnGameStart,
  idBtnGameStop,
  idInputCols,
  idInputRows,
  idInputTime,
  idLabelSpeed,
} from "./constants";
import styles from "./tools.module.css";
import { gameStart } from "./game-controll";
import { redrawBoard, updateBoard } from "./game-board";

export function tools() {
  const toolsLayer = document.createElement("div");
  toolsLayer.classList.add(styles.tools);
  toolsLayer.appendChild(inputRows());
  toolsLayer.appendChild(inputCols());
  toolsLayer.appendChild(inputSpeed());
  toolsLayer.appendChild(elemGeneration);
  toolsLayer.appendChild(buttonStartInit());
  toolsLayer.appendChild(buttonStop());
  document.body.appendChild(toolsLayer);
}

function block(label: string | HTMLElement, el: HTMLElement) {
  const layer = document.createElement("div");

  let labelEl: HTMLElement;
  if (typeof label == "string") {
    labelEl = document.createElement("div");
    labelEl.innerHTML = label;
  } else {
    labelEl = label;
  }

  layer.append(labelEl, el);
  return layer;
}

function inputRows() {
  const input = document.createElement("input");
  input.placeholder = "Введите число строк";
  input.type = "number";
  input.min = "3";
  input.id = idInputRows;
  input.value = String(gameState.rows);
  input.addEventListener("change", handlerRow);

  return block("Введите число строк", input);
}

export function handlerRow() {
  const input = document.getElementById(idInputRows) as HTMLInputElement;
  gameState.rows = Number(input.value);
  updateBoard();
  redrawBoard();
}

function inputCols() {
  const input = document.createElement("input");
  input.placeholder = "Введите число колонок";
  input.type = "number";
  input.min = "3";
  input.id = idInputCols;
  input.value = String(gameState.cols);
  input.addEventListener("change", handlerCols);
  return block("Введите число колонок", input);
}

export function handlerCols() {
  const input = document.getElementById(idInputCols) as HTMLInputElement;
  gameState.cols = Number(input.value);
  updateBoard();
  redrawBoard();
}

export function inputSpeed() {
  const input = document.createElement("input");
  // input.placeholder = "Введите скорость в мс";
  input.type = "range";
  input.min = "100";
  input.max = "500";
  input.id = idInputTime;
  input.value = String(gameState.timer);
  input.addEventListener("input", handlerSpeed);
  const label = document.createElement("div");
  label.id = idLabelSpeed;
  label.classList.add(styles.value);
  label.setAttribute("data-value", input.value);
  label.innerHTML = "Введите скорость в мс";
  return block(label, input);
}

export function handlerSpeed() {
  const input = document.getElementById(idInputTime) as HTMLInputElement;
  gameState.timer = Number(input.value);
  (document.getElementById(idLabelSpeed) as HTMLElement).setAttribute(
    "data-value",
    input.value,
  );
}

export function buttonStartInit() {
  buttonStart.id = idBtnGameStart;
  buttonStart.innerHTML = "Start Game Of Life";
  buttonStart.addEventListener("click", gameStart);
  return buttonStart;
}

export function buttonStop() {
  const button = document.createElement("button");
  button.id = idBtnGameStop;
  button.innerHTML = "Stop Game Of Life";
  button.addEventListener("click", () => {
    if (gameState.started) {
      gameState.canceled = true;
    }
  });
  return button;
}
