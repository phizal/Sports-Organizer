/*window.onload = function() {
    document.getElementById('basketball').style.display = "none";
}*/



function updateSport() {
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
    }*/
    alert(sport + " has been selected!");
}

function updateTeam() {
    var teamddl = document.getElementById("teams");
    var team = teamddl.options[teamddl.selectedIndex].text;

    alert(team + " has been selected!");
}


 
function delButton(row){
    var btn = document.createElement('button');
    btn.type = "delBtn";
    btn.className = "btn";
    btn.innerHTML= "X";
    btn.addEventListener("click", function() { delPlayApp(row.id); });
    btn.style.textAlign = "center";
    var tdbtn = document.createElement("td");
    tdbtn.appendChild(btn);
    row.appendChild(tdbtn);
    return row;
}

function delPlayApp(idVal) {
    var table = document.getElementById('players');
    for (i = 1; i < table.rows.length; i++) {
        currRow = table.rows[i];   
        if(currRow.id == idVal){
            document.getElementById("players").deleteRow(i);
            break;
        }
    }
}

function delPlay(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("players").deleteRow(i);
}

function editButton(row){
    var btn = document.createElement('button');
    btn.type = "editBtn";
    btn.className = "btn";
    btn.innerHTML= "Edit";
    btn.addEventListener("click", function() { editPlayApp(row.id); });
    btn.style.textAlign = "center";
    var tdbtn = document.createElement("td");
    tdbtn.appendChild(btn);
    row.appendChild(tdbtn);
    return row;
}

function editPlay(r) {
    var table = document.getElementById('players');
    var row = r.parentNode.parentNode.rowIndex;

    for(var i = 1; i < table.rows[0].cells.length-1; i+=1){
        var initVal = table.rows[row].cells[i].innerHTML;
        var newVal = prompt(table.rows[0].cells[i].innerHTML, initVal);
        if (newVal == null || newVal == "") {
            console.log("User cancelled the prompt.");
            break;
        } else if(i == 3){
            newVal = numValid(newVal);
            if(newVal != null && newVal != ""){
                table.rows[row].cells[i].innerHTML = newVal;
            }
        } else {
            table.rows[row].cells[i].innerHTML = newVal;
        }
    }
}

function editPlayApp(idVal) {
    var table = document.getElementById('players');
    for (i = 1; i < table.rows.length; i++) {
        currRow = table.rows[i];  
        if(currRow.id == idVal){
            for(var j = 1; j < table.rows[0].cells.length-1; j+=1){
                var initVal = table.rows[i].cells[j].innerHTML;
                var newVal = prompt(table.rows[0].cells[j].innerHTML, initVal);
                if (newVal == null || newVal == "") {
                    console.log("User cancelled the prompt.");
                    break;
                }
                else if(j == 3){
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
 
    rowTot += 1;

    var table = document.getElementById("players");
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");  
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    let fname = prompt("Enter first name");
    let lname = prompt("Enter last name");
    let age = prompt("Enter age");
    let position = prompt("Enter position");
    let location = prompt("Enter location");

    td1.innerHTML  = fname;
    td2.innerHTML  = lname;
    td3.innerHTML  = age;
    td4.innerHTML  = location;
    td5.innerHTML  = position;

    var rowArray = [td1,td2,td3,td4,td5];
    for(var k = 0; k < rowArray.length; k++){
        if(checkInput(rowArray[k])){return;}
        if(k == 2){
            if(checkNum(td3)){return;}
        }
    }

    for(k = 0; k < rowArray.length; k++){
        rowArray[k].style.textAlign = "center";
    }

    row.id = "row." + rowTot;

    row = editButton(row);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    
    row = delButton(row);
    
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

var colTot = 4;

function addColumn() {
    "use strict";

    colTot += 1;

    var table = document.getElementById("players");
    var colHead = table.rows[0].insertCell(colTot)
    colHead.innerHTML = document.getElementById("addColtxt").value;
    document.getElementById("addColtxt").value = "";

    for (i = 1; i < table.rows.length; i++) {
        var temp = table.rows[i].insertCell(colTot)
        temp.innerHTML = document.getElementById("addColtxt").value;
    }
};

function darkModeFunc() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}