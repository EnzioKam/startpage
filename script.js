function toggleBox(){ // Toggle help box
	if ( document.getElementById("help").style.opacity == 0 ) {
		document.getElementById("help").style.opacity = 1;
		document.getElementById("helpbox").style.color = "#ccc";
		document.getElementById("helpbox").style.opacity = 1;
	} else {
		document.getElementById("help").style.opacity = 0;
		document.getElementById("helpbox").style.color = "#6C7789";
		document.getElementById("helpbox").style.opacity = 0.3;
	}
}

document.body.onkeyup = function(e){
	var key = e.keyCode;
	var shift = e.shiftKey;
	var ctrl = e.ctrlKey;

	if (shift) {
		switch (key) {
			case 81: // Q
				document.getElementById("box-1-link-1").click();
				break;
			case 65: // A
				document.getElementById("box-1-link-2").click();
				break;
			case 90: // Z
				document.getElementById("box-1-link-3").click();
				break;
			case 87: // W
				document.getElementById("box-2-link-1").click();
				break;
			case 83: // S
				document.getElementById("box-2-link-2").click();
				break;
			case 88: // X
				document.getElementById("box-2-link-3").click();
				break;
			case 69: // E
				document.getElementById("box-3-link-1").click();
				break;
			case 68: // D
				document.getElementById("box-3-link-2").click();
				break;
			case 67: // C
				document.getElementById("box-3-link-3").click();
				break;
			case 82: // R
				document.getElementById("box-4-link-1").click();
				break;
			case 70: // F
				document.getElementById("box-4-link-2").click();
				break;
			case 86: // V
				document.getElementById("box-4-link-3").click();
				break;
		}
	}
	else {
		if ( document.activeElement.id == "search-bar" ) {
			if ( key == 27 || (ctrl && key == 32)) { // Esc
				document.activeElement.blur();
			}
			return;
		}
		else if (key == 32) { // Spacebar
			document.getElementById("search-bar").focus();
		}
		else if ( key == 72 ) { // H
			toggleBox();
		}
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