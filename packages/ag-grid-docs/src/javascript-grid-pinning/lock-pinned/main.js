var columnDefs = [
    {field: "athlete", width: 150, pinned: 'left', lockPinned: true, cellClass: 'lock-pinned'},
    {field: "age", width: 90, lockPinned: true, cellClass: 'lock-pinned'},
    {field: "country", width: 120},
    {field: "year", width: 90},
    {field: "date", width: 110},
    {field: "sport", width: 110},
    {field: "gold", width: 100},
    {field: "silver", width: 100},
    {field: "bronze", width: 100},
    {field: "total", width: 100}
];

var gridOptions = {
    columnDefs: columnDefs,
    debug: true,
    rowData: null,
    enableColResize: true
};

function clearPinned() {
    gridOptions.columnApi.setColumnPinned('rowNum', null);
    gridOptions.columnApi.setColumnPinned('athlete', null);
    gridOptions.columnApi.setColumnPinned('age', null);
    gridOptions.columnApi.setColumnPinned('country', null);
    gridOptions.columnApi.setColumnPinned('total', null);
}

function resetPinned() {
    gridOptions.columnApi.setColumnPinned('rowNum', 'left');
    gridOptions.columnApi.setColumnPinned('athlete', 'left');
    gridOptions.columnApi.setColumnPinned('age', 'left');
    gridOptions.columnApi.setColumnPinned('country', null);
    gridOptions.columnApi.setColumnPinned('total', 'right');
}

function pinCountry() {
    gridOptions.columnApi.setColumnPinned('rowNum', null);
    gridOptions.columnApi.setColumnPinned('athlete', null);
    gridOptions.columnApi.setColumnPinned('age', null);
    gridOptions.columnApi.setColumnPinned('country', 'left');
    gridOptions.columnApi.setColumnPinned('total', null);
}

function jumpToCol() {
    var value = document.getElementById('col').value;
    if (typeof value !== 'string' || value === '') {
        return;
    }

    var index = Number(value);
    if (typeof index !== 'number' || isNaN(index)) {
        return;
    }

    // it's actually a column the api needs, so look the column up
    var allColumns = gridOptions.columnApi.getAllColumns();
    var column = allColumns[index];
    if (column) {
        gridOptions.api.ensureColumnVisible(column);
    }
}

function jumpToRow(value) {
    var value = document.getElementById('row').value;
    var index = Number(value);
    if (typeof index === 'number' && !isNaN(index)) {
        gridOptions.api.ensureIndexVisible(index);
    }
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function() {
    var gridDiv = document.querySelector('#myGrid');
    new agGrid.Grid(gridDiv, gridOptions);

    // do http request to get our sample data - not using any framework to keep the example self contained.
    // you will probably use a framework like JQuery, Angular or something else to do your HTTP calls.
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', 'https://raw.githubusercontent.com/ag-grid/ag-grid-docs/master/src/olympicWinnersSmall.json');
    httpRequest.send();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var httpResult = JSON.parse(httpRequest.responseText);
            gridOptions.api.setRowData(httpResult);
        }
    };
});
