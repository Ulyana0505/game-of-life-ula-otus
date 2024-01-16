import { setRows, setCols } from "./setSizeOfField";
import { addButtonStart } from "./buttonStart";
import { addButtonStop } from "./buttonStop";
import { elemGeneration } from "./constants";

function draw() {
  setRows();
  setCols();
  addButtonStart();
  addButtonStop();

  document.body.appendChild(elemGeneration);
}

draw();
