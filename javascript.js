/*window.onload = function() {
    document.getElementById('basketball').style.display = "none";
}*/

//download function from: https://attacomsian.com/blog/javascript-download-file
const download = (path, filename) => {
    // Create a new link
    const anchor = document.createElement('a');
    anchor.href = path;
    anchor.download = filename;

    // Append to the DOM
    document.body.appendChild(anchor);

    // Trigger `click` event
    anchor.click();

    // Remove element from DOM
    document.body.removeChild(anchor);
};

function save(){
    var select = document.getElementById("sports");
    var val = select.options[select.selectedIndex].value;
    var table = document.getElementById(val);
    var saveArr = new Array(rowTot+1);

    for(var i = 0; i < rowTot+1; i++){
        //populate array
        saveArr[i] = new Array(colTot-2);
        for(var j = 0; j < colTot-2; j++)
        {
            saveArr[i][j] = table.rows[i].cells[j+2].innerHTML;
            console.log(table.rows[i].cells[j+2].innerHTML);
        }
    }
    //turn saveArr into JSON and save to local storage
    const saveFile = JSON.stringify(saveArr);
    console.log(saveFile);
    //create data blob
    const blob = new Blob([saveFile], {type : 'application/json'});
    //create download link
    const url = URL.createObjectURL(blob);
    //start download
    download(url, "SportsOrganizerDownload.JSON");
    //clean up
    URL.revokeObjectURL(url);
}

/*function updateSport() {
    

    var sportddl = document.getElementById("sports");
    var sport = sportddl.options[sportddl.selectedIndex].text;   
    


   /* if (sport == "Basketball")
    {
        document.getElementById('basketball').style.display = '';
        document.getElementById('golf').style.display = "none";
    }
    else{
        document.getElementById('golf').style.display = '';
        document.getElementById('basketball').style.display = "none";
    }
    alert(sport + " has been selected!");
}*/

function updateTeam() {
    var teamddl = document.getElementById("teams");
    var team = teamddl.options[teamddl.selectedIndex].text;

    alert(team + " has been selected!");
}


 
function delButton(row, tableid){
    var btn = document.createElement('button');
    btn.type = "delBtn";
    btn.className = "btn";
    btn.innerHTML= "X";
    btn.addEventListener("click", function() { delPlayApp(row.id,tableid); });
    btn.style.textAlign = "center";
    var tdbtn = document.createElement("td");
    tdbtn.appendChild(btn);
    row.appendChild(tdbtn);
    return row;
}

function delPlayApp(idVal,tableid) {
    var table = document.getElementById(tableid);
    for (i = 1; i < table.rows.length; i++) {
        currRow = table.rows[i];   
        if(currRow.id == idVal){
            document.getElementById(tableid).deleteRow(i);
            break;
        }
    }
}

function delPlay(r,tableid) {
    var i = r.parentNode.parentNode.rowIndex;
     document.getElementById(tableid).deleteRow(i);
}

function editButton(row,tableid){
    var btn = document.createElement('button');
    btn.type = "editBtn";
    btn.className = "btn";
    btn.innerHTML= "Edit";
    btn.addEventListener("click", function() { editPlayApp(row.id,tableid); });
    btn.style.textAlign = "center";
    var tdbtn = document.createElement("td");
    tdbtn.appendChild(btn);
    row.appendChild(tdbtn);
    return row;
}

function editPlay(r,tableid) {
    var table = document.getElementById(tableid);
    var row = r.parentNode.parentNode.rowIndex;

    for(var i = 2; i < table.rows[0].cells.length; i+=1){
        var initVal = table.rows[row].cells[i].innerHTML;
        var newVal = prompt(table.rows[0].cells[i].innerHTML, initVal);
        if (newVal == null || newVal == "") {
            console.log("User cancelled the prompt.");
            break;
        } else if(i == 4){
            newVal = numValid(newVal);
            if(newVal != null && newVal != ""){
                table.rows[row].cells[i].innerHTML = newVal;
            }
        } else {
            table.rows[row].cells[i].innerHTML = newVal;
        }
    }
}

function editPlayApp(idVal,tableid) {
    var table = document.getElementById(tableid);
    for (i = 1; i < table.rows.length; i++) {
        currRow = table.rows[i];  
        if(currRow.id == idVal){
            for(var j = 2; j < table.rows[0].cells.length; j+=1){
                var initVal = table.rows[i].cells[j].innerHTML;
                var newVal = prompt(table.rows[0].cells[j].innerHTML, initVal);
                if (newVal == null || newVal == "") {
                    console.log("User cancelled the prompt.");
                    break;
                }
                else if(j == 4){
                    newVal = numValid(newVal);
                    if(newVal != null && newVal != ""){
                        table.rows[i].cells[j].innerHTML = newVal;
                    }
                } 
                else {
                    table.rows[i].cells[j].innerHTML = newVal;
                }
            } 
            break;
        }
    }
}

function numValid(currNum){
    age = parseInt(currNum);
    while(isNaN(currNum) || currNum == "" || age < 0 || age > 99){
        currNum = window.prompt("Please enter a valid number between 0 and 99 for the player's age.","");
        age = parseInt(currNum);
    }
    return currNum;
}

var arr = new Array();
/*function addData(){
    getData();
    arr.push({
        fname:document.getElementById("fname").value,
        lname:document.getElementById("lname").value,
        age:document.getElementById("age").value,
        location:document.getElementById("location").value,
        position:document.getElementById("position").value
    })

    localStorage.setItem("localData", JSON.stringify(arr));
    addRow();
}

function getData(){
    var str = localStorage.getItem("localData");
    if (str != null){
        arr = JSON.parse(str);
    }
}*/

var rowTot = 3;

function addRow() {
    "use strict";

    var select = document.getElementById('sports');
    var val = select.options[select.selectedIndex].value;
 
    rowTot += 1;
    

    var table = document.getElementById(val);
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");  
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    td1.innerHTML  = document.getElementById("fname").value;
    td2.innerHTML  = document.getElementById("lname").value;
    td3.innerHTML  = document.getElementById("age").value;
    td4.innerHTML  = document.getElementById("location").value;
    td5.innerHTML  = document.getElementById("col5in").value;

    var rowArray = [td1,td2,td3,td4,td5];
    for(var k = 0; k < rowArray.length; k++){
        if(checkInput(rowArray[k])){return;}
        if(k == 2){
            if(checkNum(td3)){return;}
        }
    }

    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("location").value = "";
    document.getElementById("col5in").value = "";

    for(k = 0; k < rowArray.length; k++){
        rowArray[k].style.textAlign = "center";
    }

    row.id = val +  "." + rowTot;

    row = editButton(row,val);
    row = delButton(row,val);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    var int2 = 0;
    var loop = 7;
    while(loop < colTot){
        var td6 = document.createElement("td");
        var currCol = "val" + int2;
        td6.innerHTML = document.getElementById(currCol).value
        td6.style.textAlign = "center";
        document.getElementById(currCol).value = "";
        int2++;
        row.appendChild(td6);
        loop++;
    }
    
    table.children[0].appendChild(row);

}

function checkInput(currRow){
    if(currRow.innerHTML == ""){
        window.alert("Please ensure all values are filled.")
        return true;
    }
    return false;
}

function checkNum(currRow){
    if(isNaN(currRow.innerHTML)){
        window.alert("Please enter a valid number for the player's age.");
        return true;
    }
    age = parseInt(currRow.innerHTML);
    if(age < 0 || age >= 100){
        window.alert("Please enter a valid number between 0 and 100 for the player's age.");
        return true;
    }
    return false;
}

var colTot = 7;

function addColumn() {
    "use strict";

    var select = document.getElementById('sports');
    var val = select.options[select.selectedIndex].value;

    colTot += 1;
    var newCol = document.getElementById("addColtxt").value;
    if(newCol == ""){
        return;
    }
    var table = document.getElementById(val);
    var colHead = table.rows[0].insertCell(-1)
    colHead.innerHTML = newCol;
    colHead.className = "cellInsert";
    document.getElementById("addColtxt").value = "";

    for (var i = 1; i < table.rows.length; i++) {
        var temp = table.rows[i].insertCell(-1);
        temp.className = "cellInsert";
        temp.innerHTML = "N/A";
    }
    console.log(colTot);
};

function darkModeFunc() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}