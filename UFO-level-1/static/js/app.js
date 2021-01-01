// from data.js
var tableData = data;

function addData(tableID) {
    // References the HTML table
    let table = document.getElementById("ufo-table");
  
    // Appends rows to table
    for (let i = 0; i < data.length; i++) {
        let newRow = table.insertRow(-1);
        let keys = [tableData[i].datetime, tableData[i].city, tableData[i].state, tableData[i].country, tableData[i].shape, tableData[i].durationMinutes, tableData[i].comments];
        // Appends cells to rows
        for (var j = 0; j < keys.length; j++) {
            let newCell = newRow.insertCell(-1);
            let newText = document.createTextNode(keys[j]);
            newCell.appendChild(newText);
        }
    }
  }
 
// Calls addData function to populate table
addData('ufo-table');