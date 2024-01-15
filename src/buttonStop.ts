import { gameState } from "./constants";

export function addButtonStop() {
    const buttonStop = document.createElement("button");
    document.body.appendChild(buttonStop);
    buttonStop.innerHTML = "Stop Game Of Life";
    buttonStop.addEventListener("click", () => {
        gameState.canceled = true;
    });
}