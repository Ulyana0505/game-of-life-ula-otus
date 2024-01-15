import { gameState, aliveCell } from "./constants";
import { generationStepOne, generationStepTwo } from "./generations";
import { redrawField } from "./createField";

const buttonStart = document.createElement("button") as HTMLButtonElement;

export function addButtonStart() {
  document.body.appendChild(buttonStart);
  buttonStart.innerHTML = "Start Game Of Life";
  buttonStart.addEventListener("click", gameStart);
}

export function gameStart() {
  buttonStart.disabled = true;
  gameState.started = true;
  gameGeneration();
}

export function gameEnd() {
  buttonStart.disabled = false;
  gameState.started = false;
  gameState.canceled = false;
  alert(
    "GAME END: all cells are dead OR a stable configuration has occured OR game stop button clicked.",
  );
  document.getElementById("table")?.remove();
}

const prevStateOfField = { current: "" };

export function testGameEnd() {
  const maxX = gameState.arrayCells[0].length;
  const maxY = gameState.arrayCells.length;
  let counter = 0;
  for (let y = 0; y < maxY; y++) {
    for (let x = 0; x < maxX; x++) {
      if (gameState.arrayCells[y][x] === aliveCell) {
        counter++;
      }
    }
  }
  const currentState = JSON.stringify(gameState.arrayCells);
  const isSameState = prevStateOfField.current === currentState;
  prevStateOfField.current = currentState;
  return counter === 0 || isSameState;
}

export async function gameGeneration() {
  generationStepOne();
  redrawField();
  await timer();
  generationStepTwo();
  redrawField();
  await timer();
  if (testGameEnd() || gameState.canceled) {
    gameEnd();
  } else {
    gameGeneration();
  }
}

export function timer() {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
}
