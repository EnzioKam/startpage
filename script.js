document.body.onkeyup = function(e){
	var key = e.keyCode;
	var shift = e.shiftKey;
	var ctrl = e.ctrlKey;

	if ( document.activeElement.id == "search-bar" ) {
		if ( key == 27 || (ctrl && key == 32)) { // Esc
			document.activeElement.blur();
		}
		return;
	}
	else if (key == 32) { // Spacebar
		document.getElementById("search-bar").focus();
	}
}

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function updateDate() {
	var now = new Date();
	dd = now.getDate();
	mm = now.getMonth() + 1;
	yyyy = now.getFullYear();
	if (dd < 10) {
    	dd = '0' + dd;
	}
	if (mm < 10) {
    	mm = '0' + mm;
	}
	day = days[now.getDay()];
	date = day + ' ' + dd + '/' + mm + '/' + yyyy;
	document.getElementById('date').innerHTML = date;
	setTimeout(updateDate, 60000);
}


function updateClock() {
    var now = new Date();
	hours = now.getHours();
	minutes = now.getMinutes();
	if (minutes < 10) {
		time = hours + ':' + "0" + minutes;
	} else {
		time = hours + ':' + minutes;
	}
	if (hours < 10) {
		time = "0" + time;
	}
    document.getElementById('time').innerHTML = time;
    setTimeout(updateClock, 1000);
}

updateClock();
updateDate();

