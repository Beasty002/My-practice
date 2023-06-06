btn = document.querySelector(".btn");
btn.onclick = function() {
    container = document.querySelector(".container");
    container.classList.remove("row-reverse", "col-reverse");
    container.classList.toggle("toggle");
    column = document.querySelector(".column");
    column.classList.toggle("toggle-column");
    row = document.querySelector(".row");
    row.classList.toggle("toggle-row");
    rowRev = document.querySelector(".btn-row");
    rowRev.classList.toggle("row-reverse-toggle")
    colRev = document.querySelector(".btn-col");
    colRev.classList.toggle("col-reverse-toggle")

}
btnRow = document.querySelector(".btn-row");
btnRow.onclick = function() {
    container = document.querySelector(".container");
    container.classList.remove("col-reverse");
    container.classList.toggle("row-reverse");

}
btnCol = document.querySelector(".btn-col");
btnCol.onclick = function() {
    container = document.querySelector(".container");
    container.classList.remove("row-reverse");
    container.classList.toggle("col-reverse");

}