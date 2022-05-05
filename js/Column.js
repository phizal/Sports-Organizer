var totAdded = 6;
var select = document.getElementById('sports');
var val = select.options[select.selectedIndex].value;
var table = document.getElementById(val);
var col5 = document.getElementById('col5');
col5.innerHTML = table.rows[0].cells[totAdded].innerHTML;

document.addEventListener('input', function (event) {

	if (event.target.id !== 'sports') return;
  else {
		select = document.getElementById('sports');
    val = select.options[select.selectedIndex].value;
    table = document.getElementById(val);
    col5 = document.getElementById('col5');
    col5.innerHTML = table.rows[0].cells[totAdded].innerHTML;
	}
}, false);

var activities = document.getElementById('sports');
activities.addEventListener('change', function () {
    entryVar = false;
}, false);

