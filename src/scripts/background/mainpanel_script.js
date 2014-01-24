// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
}
else {
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
	table.innerHTML=""; //clear table so that if we're replacing contents, won't get messed up
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

function runScript(){
	alert("Would run script here.");
}

function scriptForOneRow(knownColumns) {
	var name = knownColumns[0];
	//go to google
	//search for name + sf whatever
	//click on enter
	//click on first link
	//click on sf whatever's page for the school
	//do data analysis there (??? - just the word searching on that text probably)
	//follow link to the school's own page
	//collect everything we can get to from that main page
	//on the main page and the collected links, run the word searching algorithm
}

function setUp(){
    $( "#tabs" ).tabs();
	var dataTable = document.getElementById('dataTable');
	document.getElementById('dataFile').addEventListener('change', handleFileSelectForTable(dataTable), false);
	var scriptConfigurationTable = document.getElementById('scriptConfigurationTable');
	document.getElementById('scriptConfigurationFile').addEventListener('change', handleFileSelectForTable(scriptConfigurationTable), false);
	document.getElementById('runScript').addEventListener('click', runScript);
}

$(setUp);
