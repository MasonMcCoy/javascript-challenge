// from data.js
var tableData = data;

function addData(Data) {
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

var button = d3.select("#filter-btn");

button.on("click", filterBy);

function filterBy() {
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value").trim();
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData);

    if (filteredData.length !== 0) {
        addData(filteredData);
    }

    }

// document.getElementById("filter-btn").addEventListener("click", filterBy);

// function filterBy(txtValue) {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementsByClassName("form-control");
//     filter = input.value;
//     table = document.getElementsByClassName("table table-striped");
//     tr = document.getElementsByTagName("tr");

//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//             txtValue = td.textContent || td.innerText;
//             if (txtValue.indexOf(filter) > -1) {
//                 tr[i].style.display = "";
//             } else {
//                 tr[i].style.display = "none";
//             }
//         }
//     }
// }
