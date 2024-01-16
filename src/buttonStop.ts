import { gameState, idBtnGameStop } from "./constants";

export function addButtonStop() {
  const buttonStop = document.createElement("button");
  document.body.appendChild(buttonStop);
  buttonStop.id = idBtnGameStop;
  buttonStop.innerHTML = "Stop Game Of Life";
  buttonStop.addEventListener("click", () => {
    if (gameState.started) {
      gameState.canceled = true;
    }
  });
}
