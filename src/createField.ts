// import css from "./createField.module.css";
import "./createField.css";

export function createField(cols: number, rows: number) {
  let table = document.createElement('table');
  table.className = "table";
  table.id = "table";
  document.body.appendChild(table);

  for(let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    tr.className = "tr";
    // tr.id = "tr";
    for(let j = 0; j < cols; j++) {
      let td = document.createElement('td');
      td.className = "td";
      // td.id = "td";
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}

