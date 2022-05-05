var changingRow;
var changingTab;
var appRow;
var appTab;
var rowCol;
function updateRow(rowNow, tableid){
    changingRow = rowNow;
    changingTab = tableid;
    
    var info = document.getElementById('editTable');
    for(var rowNum = info.rows.length-1; rowNum >= 0; rowNum--){
        info.deleteRow(rowNum);
    }

    var table = document.getElementById(changingTab);
    var r = changingRow.parentNode.parentNode.rowIndex;

    var select = document.getElementById('sports');
    var val = select.options[select.selectedIndex].value;
    if(val == 'baseball'){
        rowCol = baseInt;
    }
    else if(val == 'basketball'){
        rowCol = baskInt;
    }
    else if(val == 'football'){
        rowCol = footInt;
    }

    for(var rowNum = 2; rowNum < rowCol; rowNum++){
        var info = document.getElementById('editTable');
        var row = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

        var input = document.createElement("input");
        input.type = "text";
        input.className= "textbar";
        input.style.textAlign = "center";
        td2.style.textAlign = "center";
        // Due to how original modal table is formatted with id's, we must reassign the id when re remake the info table.
        if(rowNum < 7){
            switch(rowNum){
                case 2: 
                    input.id = "fnameEd";
                    break;
                case 3: 
                    input.id = "lnameEd";
                    break;
                case 4: 
                    input.id = "ageEd";
                    break;
                case 5: 
                    input.id = "locationEd";
                    break;
                case 6: 
                    input.id = "col5inEd";
                    break;
            }
        }
        else{   
            input.id = activities.value +"."+rowNum + "Ed";
        }

        td1.innerHTML = table.rows[0].cells[rowNum].innerHTML;
        input.value = table.rows[r].cells[rowNum].innerHTML;
        td2.appendChild(input);
        row.appendChild(td1);
        row.appendChild(td2);
        
        info.children[0].appendChild(row);
    }
    var modalEd = document.getElementById("editModal");
    modalEd.style.display = "block";
}

function updateRowApp(rowid, tableid){
    appRow = rowid;
    appTab = tableid;
    

    var info = document.getElementById('editTable2');
    for(var rowNum = info.rows.length-1; rowNum >= 0; rowNum--){
        info.deleteRow(rowNum);
    }

    var table = document.getElementById(appTab);

    var select = document.getElementById('sports');
    var val = select.options[select.selectedIndex].value;
    if(val == 'baseball'){
        rowCol = baseInt;
    }
    else if(val == 'basketball'){
        rowCol = baskInt;
    }
    else if(val == 'football'){
        rowCol = footInt;
    }
    for (i = 1; i < table.rows.length; i++) {
        var currRow = table.rows[i];  
        if(currRow.id == appRow){
            for(var rowNum = 2; rowNum < rowCol; rowNum++){
                var info = document.getElementById('editTable2');
                var row = document.createElement("tr");
                var td1 = document.createElement("td");
                var td2 = document.createElement("td");

                var input = document.createElement("input");
                input.type = "text";
                input.className= "textbar";
                input.style.textAlign = "center";
                td2.style.textAlign = "center";
                // Due to how original modal table is formatted with id's, we must reassign the id when re remake the info table.
                if(rowNum < 7){
                    switch(rowNum){
                        case 2: 
                            input.id = "fnameEd2";
                            break;
                        case 3: 
                            input.id = "lnameEd2";
                            break;
                        case 4: 
                            input.id = "ageEd2";
                            break;
                        case 5: 
                            input.id = "locationEd2";
                            break;
                        case 6: 
                            input.id = "col5inEd2";
                            break;
                    }
                }
                else{   
                    input.id = activities.value +"."+rowNum + "Ed2";
                }

                td1.innerHTML = table.rows[0].cells[rowNum].innerHTML;
                input.value = table.rows[i].cells[rowNum].innerHTML;
                td2.appendChild(input);
                row.appendChild(td1);
                row.appendChild(td2);
                
                info.children[0].appendChild(row);
            }
        }
    }
    var modalEd2 = document.getElementById("editModal2");
    modalEd2.style.display = "block";
}

function editPlayer() {
    var table = document.getElementById(changingTab);
    var row = changingRow.parentNode.parentNode.rowIndex;
    var currInp = "";
    var select = document.getElementById('sports');
    var val = select.options[select.selectedIndex].value;
    if(val == 'baseball'){
        rowCol = baseInt;
    }
    else if(val == 'basketball'){
        rowCol = baskInt;
    }
    else if(val == 'football'){
        rowCol = footInt;
    }
    
    for(var j = 2; j < rowCol; j++){
        if(j < 7){
            switch(j){
                case 2: 
                    currInp = "fnameEd";
                    break;
                case 3: 
                    currInp = "lnameEd";
                    break;
                case 4: 
                    currInp = "ageEd";
                    break;
                case 5: 
                    currInp = "locationEd";
                    break;
                case 6: 
                    currInp = "col5inEd";
                    break;
            }
        }
        else{   
            currInp = activities.value +"."+j+"Ed";
        }
        table.rows[row].cells[j].innerHTML = document.getElementById(currInp).value;
    }
    var modalEd = document.getElementById("editModal");
    modalEd.style.display = "none";
}

function editPlayerApp() {
    var table = document.getElementById(appTab);


    var currInp = "";
    // Changes value for current Column.
    var select = document.getElementById('sports');
    var val = select.options[select.selectedIndex].value;
    if(val == 'baseball'){
        rowCol = baseInt;
    }
    else if(val == 'basketball'){
        rowCol = baskInt;
    }
    else if(val == 'football'){
        rowCol = footInt;
    }

    for (i = 1; i < table.rows.length; i++) {
        var currRow = table.rows[i];  
        if(currRow.id == appRow){
            for(var j = 2; j < rowCol; j++){
                if(j < 7){
                    switch(j){
                        case 2: 
                            currInp = "fnameEd2";
                            break;
                        case 3: 
                            currInp = "lnameEd2";
                            break;
                        case 4: 
                            currInp = "ageEd2";
                            break;
                        case 5: 
                            currInp = "locationEd2";
                            break;
                        case 6: 
                            currInp = "col5inEd2";
                            break;
                    }
                }
                else{   
                    currInp = activities.value +"."+j+"Ed2";
                }
                table.rows[i].cells[j].innerHTML = document.getElementById(currInp).value;
            }
        }
    }

    var modalEd2= document.getElementById("editModal2");
    modalEd2.style.display = "none";
}