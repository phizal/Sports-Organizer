var int = 0;
document.addEventListener('click', function (event) {

	if (event.target.id !== 'addC') return;
    else {
        
        var select = document.getElementById('sports');
        var val = select.options[select.selectedIndex].value;
        var table = document.getElementById(val);

        var info = document.getElementById('info');
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        var input = document.createElement("input");
        input.type = "text";
        input.style.textAlign = "center";
        input.id = "val"+int;
        int++;
        input.className = "css-class-name"; // set the CSS class

        td1.innerHTML = table.rows[0].cells[colTot-1].innerHTML;
        td2.appendChild(input);
        row.appendChild(td1);
        row.appendChild(td2);
        
        info.children[0].appendChild(row);
    }
}, false);