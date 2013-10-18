// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  alert('The File APIs are not fully supported in this browser.');
}

function populateTableFromCSV(text,table) {
	var array2D = $.csv.toArrays(text);
	
	for (var i = 0; i<array2D.length; i++){
		var tableRow = table.appendChild(document.createElement('tr'));
		var row = array2D[i];
		for (var j = 0; j<row.length; j++){
			var cell = tableRow.appendChild(document.createElement('td'));
			cell.appendChild(document.createTextNode(row[j]));
		}
	}
}

function handleFileSelectForTable(table) {
	var handleFileSelect = function(evt) {
	  var file = evt.target.files[0];
	  var reader = new FileReader();
	  reader.onload = (function(e) {
		  //call the table populating function
		  populateTableFromCSV(e.target.result,table);
		});
	  // Read the file as text
	  reader.readAsText(file);
	}
	return handleFileSelect;
}

function setUp(){
	var dataTable = document.getElementById('dataTable');
	document.getElementById('dataFile').addEventListener('change', handleFileSelectForTable(dataTable), false);
}

$(setUp);
