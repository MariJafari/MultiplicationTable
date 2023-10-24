window.onload = function() {
    // Get form and table container elements
    var form = document.getElementById('table-form');
    var tableContainer = document.getElementById('table-container');

    form.onsubmit = function(e) {
        // Prevent form from submitting normally
        e.preventDefault();

        // Get row and column input values
        var rows = document.getElementById('rows').value;
        var cols = document.getElementById('cols').value;

        // Draw the table
        drawTable(rows, cols);
    }

    function drawTable(rows, cols) {
        // Create a table element
        var table = document.createElement('table');

        // Create rows and cells
        for(var i = 0; i < rows; i++) {
            var row = document.createElement('tr');
            for(var j = 0; j < cols; j++) {
                var cell = document.createElement('td');
                cell.textContent = (i+1)*(j+1); // i+1 and j+1 because indices start from 0
                row.appendChild(cell);
            }
            table.appendChild(row);
        }

        // Clear table container and append the new table
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
    }

    // Initial table draw
    drawTable(20, 20);
}