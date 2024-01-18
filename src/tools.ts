import {
  buttonStart,
  elemGeneration,
  gameState,
  idBtnGameStart,
  idBtnGameStop,
  idInputCols,
  idInputRows,
  idInputTime,
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

function block(label: string, el: HTMLElement) {
  const layer = document.createElement("div");
  const labelEl = document.createElement("div");
  labelEl.innerHTML = label;
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
  input.addEventListener("change", () => {
    gameState.rows = Number(input.value);
    updateBoard();
    redrawBoard();
  });

  return block("Введите число строк", input);
}

function inputCols() {
  const input = document.createElement("input");
  input.placeholder = "Введите число колонок";
  input.type = "number";
  input.min = "3";
  input.id = idInputCols;
  input.value = String(gameState.cols);
  input.addEventListener("change", () => {
    gameState.cols = Number(input.value);
    updateBoard();
    redrawBoard();
  });
  return block("Введите число колонок", input);
}

export function inputSpeed() {
  const input = document.createElement("input");
  input.placeholder = "Введите скорость в мс";
  input.type = "number";
  input.min = "50";
  input.id = idInputTime;
  input.value = String(gameState.timer);
  input.addEventListener("change", () => {
    gameState.timer = Number(input.value);
  });
  return block("Введите скорость в мс", input);
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
