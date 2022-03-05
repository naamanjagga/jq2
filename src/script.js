var globalArray = [
	{
		id: '100',
		name: 'iPhone 4S',
		brand: 'Apple',
		os: 'iOS'
	},
	{
		id: '101',
		name: 'Moto X',
		brand: 'Motorola',
		os: 'Android'
	},
	{
		id: '102',
		name: 'iPhone 6',
		brand: 'Apple',
		os: 'iOS'
	},
	{
		id: '103',
		name: 'Samsung Galaxy S',
		brand: 'Samsung',
		os: 'Android'
	},
	{
		id: '104',
		name: 'Google Nexus',
		brand: 'ASUS',
		os: 'Android'
	},
	{
		id: '105',
		name: 'Surface',
		brand: 'Microsoft',
		os: 'Windows'
	}
];
$(document).ready(function() {
	$("#search").on("keyup", function() {
		var value = $(this).val();
	
		$("table tr").each(function(index) {
			if (index != 0) {
	
				$row = $(this);
	
				var id = $row.find("td:first").text();
	
				if (id.indexOf(value) != 0) {
					$(this).hide();
				}
				else {
					$(this).show();
				}
			}
		});
	});

	$('#btn').on('click', function() {
		display();
		
	});
});

$('#btn1').on('click', function() {
	filter();
});
function filter() {
	var OS = $('#os option:selected').text();
	var BRAND = $('#brand option:selected').text();

	if (OS == '...' && BRAND == '...') {
		display();
	} else if (OS != '...' && BRAND == '...') {
		var dis = '<table><tr><th>Id</th><th>Name</th><th>OS</th><th>Brand</th><th>remove</th></tr>';
		for (var i = 0; i < globalArray.length; i++) {
			if (globalArray[i].os == OS) {
				dis +=
					'<tr><td>' +
					globalArray[i].id +
					'</td><td>' +
					globalArray[i].name +
					'</td><td>' +
					globalArray[i].os +
					'</td><td>' +
					globalArray[i].brand +
					'</td><td><button class="Submit" id="remove' +
					[ i ] +
					'" value="remove" onclick="remove(' +
					parseInt(globalArray[i].id) +
					')">X</button></td></tr>';

				document.getElementById('content').innerHTML = dis;
			}
		}

		dis += '</table>';
	} else if (OS == '...' && BRAND != '...') {
		var dis = '<table><tr><th>Id</th><th>Name</th><th>OS</th><th>Brand</th><th>remove</th></tr>';
		for (var i = 0; i < globalArray.length; i++) {
			if (globalArray[i].brand == BRAND) {
				dis +=
					'<tr><td>' +
					globalArray[i].id +
					'</td><td>' +
					globalArray[i].name +
					'</td><td>' +
					globalArray[i].os +
					'</td><td>' +
					globalArray[i].brand +
					'</td><td><button class="Submit" id="remove' +
					[ i ] +
					'" value="remove" onclick="remove(' +
					parseInt(globalArray[i].id) +
					')">X</button></td></tr>';

				document.getElementById('content').innerHTML = dis;
			}
		}

		dis += '</table>';
	} else {
		var dis = '<table><tr><th>Id</th><th>Name</th><th>OS</th><th>Brand</th><th>remove</th></tr>';
		for (var i = 0; i < globalArray.length; i++) {
			if (globalArray[i].os == OS) {
				if (globalArray[i].brand == BRAND) {
					dis +=
						'<tr><td>' +
						globalArray[i].id +
						'</td><td>' +
						globalArray[i].name +
						'</td><td>' +
						globalArray[i].os +
						'</td><td>' +
						globalArray[i].brand +
						'</td><td><button class="Submit" id="remove' +
						[ i ] +
						'" value="remove" onclick="remove(' +
						parseInt(globalArray[i].id) +
						')">X</button></td></tr>';

					document.getElementById('content').innerHTML = dis;
				}
			}
		}
		dis += '</table>';
	}
}
function remove(x) {
	for (var i = 0; i < globalArray.length; i++) {
		if (globalArray[i].id == x) {
			$('#remove' + [ i ]).parent().parent().hide();
		}
	}
}
function display() {
	var dis = '<table id="table"><tr><th>Id</th><th>Name</th><th>OS</th><th>Brand</th><th>remove</th></tr>';
	for (var i = 0; i < globalArray.length; i++) {
		dis +=
			'<tr><td>' +
			globalArray[i].id +
			'</td><td>' +
			globalArray[i].name +
			'</td><td>' +
			globalArray[i].os +
			'</td><td>' +
			globalArray[i].brand +
			'</td><td><button class="Submit" id="remove' +
			[ i ] +
			'" value="remove" onclick="remove(' +
			parseInt(globalArray[i].id) +
			')">X</button></td></tr>';
	}

	dis += '</table>';
	document.getElementById('content').innerHTML = dis;
}
