// import css from "./createField.module.css";
import "./createField.css";
import { handlerClick } from "./tableOnClick";
import { arrayOfCell } from "./constants";

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
      td.className = "dead";
      td.setAttribute("data-x", `${j}`);
      td.setAttribute("data-y", `${i}`);
      // td.id = "td";
      tr.appendChild(td);
      row.push(0);
    }
    table.appendChild(tr);
    cells.push(row);
  }
  arrayOfCell.current = cells;
  console.dir(arrayOfCell);
}

