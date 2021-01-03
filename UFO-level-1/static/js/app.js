// from data.js
var tableData = data;

function addData(data) {
    // References the HTML table
    let table = document.getElementById("table-body");
  
    // Appends rows to table
    for (let i = 0; i < data.length; i++) {
        let newRow = table.insertRow(-1);
        let keys = [data[i].datetime, data[i].city, data[i].state, data[i].country, data[i].shape, data[i].durationMinutes, data[i].comments];
        // Appends cells to rows
        for (var j = 0; j < keys.length; j++) {
            let newCell = newRow.insertCell(-1);
            let newText = document.createTextNode(keys[j]);
            newCell.appendChild(newText);
        }
    }
  }
 
// Calls addData function to populate table
addData(tableData);

// Identifies the Filter Table button in the DOM
var button = document.getElementById("filter-btn");

// Assigns event listener to the Filter Table button
button.addEventListener("click", filterBy);

function filterBy() {
    // Clears the HTML table
    let table = document.getElementById("table-body");
    table.innerHTML = "";
    // Filters data based on user input
    var inputValue = document.getElementById("datetime").value;
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    // Adds rows back based on filer
    addData(filteredData);
}