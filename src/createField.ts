// import css from "./createField.module.css";
import "./createField.css";
import { handlerClick } from "./tableOnClick";
import { gameState, deadCell, deadCSSClass, aliveCSSClass, aliveCell, willBeAlive, willBeDeadCell, willBeAliveCSSClass, willBeDeadCSSClass } from "./constants";

export function createField(cols: number, rows: number) {
  const table = document.createElement('table');
  table.className = "table";
  table.id = "table";
  document.body.appendChild(table);
  table.addEventListener("click", handlerClick);

  const cells = [] as number[][];

  for(let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    tr.className = "tr";
    const row = [] as number[];
    // tr.id = "tr";
    for(let j = 0; j < cols; j++) {
      let td = document.createElement('td');
      td.className = "td";
      td.className = deadCSSClass;
      td.setAttribute("data-x", `${j}`);
      td.setAttribute("data-y", `${i}`);
      // td.id = "td";
      tr.appendChild(td);
      row.push(deadCell);
    }
    table.appendChild(tr);
    cells.push(row);
  }
  gameState.arrayCells = cells;
  // console.dir(arrayOfCell);
}

export function redrawField() {
  const table = document.createElement('table');
  table.className = "table";
  table.id = "table";

  const maxX = gameState.arrayCells[0].length;
  const maxY = gameState.arrayCells.length;

  for(let y = 0; y < maxY; y++){
    const tr = document.createElement("tr");
      for(let x = 0; x < maxX; x++){
        const td = document.createElement("td");
        td.className = "td";
        td.className = deadCSSClass;
        switch(gameState.arrayCells[y][x]) {
          case deadCell: 
            td.classList.add(deadCSSClass);
            break;
          case aliveCell:
            td.classList.add(aliveCSSClass);
            break;
          case willBeDeadCell: 
            td.classList.add(willBeDeadCSSClass);
            break;
          case willBeAlive:
            td.classList.add(willBeAliveCSSClass); 
            break;
        }
        td.setAttribute("data-x", `${x}`);
        td.setAttribute("data-y", `${y}`);
        tr.appendChild(td); 
      }
      table.appendChild(tr);
  }
  document.body.appendChild(table);
  table.addEventListener("click", handlerClick);
  const prevTable = document.getElementById("table");
  if(prevTable) {
    prevTable.replaceWith(table);
  }
}

