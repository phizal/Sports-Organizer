<<<<<<< Updated upstream
var int = 0;
document.addEventListener('click', function (event) {

	if (event.target.id !== 'addC') return;
    else {
        
        var select = document.getElementById('sports');
        var val = select.options[select.selectedIndex].value;
        var table = document.getElementById(val);

=======
var baseInt = colTot;
var baskInt = colTot;
var footInt = colTot;

// Checks to see for when the table has changed to a different sport
var activities = document.getElementById('sports');
activities.addEventListener('change', function () {
	
    if(activities.value == 'baseball'){
        // Deletes every row in info table and refills it with rows from current table
        updateSubmit(baseInt);
    }
    if(activities.value == 'basketball'){
        updateSubmit(baskInt);
    }
    if(activities.value == 'football'){
        updateSubmit(footInt);
    }

}, false);

document.addEventListener('click', function (event) {
    
    var select = document.getElementById('sports');
    var val = select.options[select.selectedIndex].value;
	
    
    if (event.target.id !== 'addC') return;
    else {
        if (val == 'baseball'){
            var info = document.getElementById('info');
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");

            var input = document.createElement("input");
            input.type = "text";
            input.className= "textbar";
            input.style.textAlign = "center";
            td2.style.textAlign = "center";
            input.id = val+"."+baseInt;
            baseInt++;

            td1.innerHTML = table.rows[0].cells[baseInt-1].innerHTML;
            td2.appendChild(input);
            row.appendChild(td1);
            row.appendChild(td2);
            
            info.children[0].appendChild(row);
        }
        else if (val == 'basketball'){
            
            var info = document.getElementById('info');
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");

            var input = document.createElement("input");
            input.type = "text";
            input.className= "textbar";
            input.style.textAlign = "center";
            td2.style.textAlign = "center";
            input.id = val+"."+baskInt;
            baskInt++;

            td1.innerHTML = table.rows[0].cells[baskInt-1].innerHTML;
            td2.appendChild(input);
            row.appendChild(td1);
            row.appendChild(td2);
            
            info.children[0].appendChild(row);
        }
        if (val == 'football'){
            var info = document.getElementById('info');
            var row = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");

            var input = document.createElement("input");
            input.type = "text";
            input.className= "textbar";
            input.style.textAlign = "center";
            td2.style.textAlign = "center";
            input.id = val+"."+footInt;
            footInt++;

            td1.innerHTML = table.rows[0].cells[footInt-1].innerHTML;
            td2.appendChild(input);
            row.appendChild(td1);
            row.appendChild(td2);
            
            info.children[0].appendChild(row);
        }
    }
}, false);


function updateSubmit(sportInt){
    var info = document.getElementById('info');
    for(var rowNum = info.rows.length-1; rowNum >= 0; rowNum--){
        info.deleteRow(rowNum);
    }
    for(var rowNum = 2; rowNum < sportInt; rowNum++){
>>>>>>> Stashed changes
        var info = document.getElementById('info');
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        var input = document.createElement("input");
        input.type = "text";
<<<<<<< Updated upstream
        input.style.textAlign = "center";
        input.id = "val"+int;
        int++;
        input.className = "css-class-name"; // set the CSS class

        td1.innerHTML = table.rows[0].cells[colTot-1].innerHTML;
=======
        input.className= "textbar";
        input.style.textAlign = "center";
        td2.style.textAlign = "center";
        // Due to how original modal table is formatted with id's, we must reassign the id when re remake the info table.
        if(rowNum < 7){
            switch(rowNum){
                case 2: 
                    input.id = "fname";
                    break;
                case 3: 
                    input.id = "lname";
                    break;
                case 4: 
                    input.id = "age";
                    break;
                case 5: 
                    input.id = "location";
                    break;
                case 6: 
                    input.id = "col5in";
                    break;
            }
        }
        else{   
            input.id = activities.value +"."+rowNum;
        }

        td1.innerHTML = table.rows[0].cells[rowNum].innerHTML;
>>>>>>> Stashed changes
        td2.appendChild(input);
        row.appendChild(td1);
        row.appendChild(td2);
        
        info.children[0].appendChild(row);
    }
<<<<<<< Updated upstream
}, false);
=======
}
>>>>>>> Stashed changes
