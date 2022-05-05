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

function sort(){
    var col = document.getElementById("sorttxt").value - 1;
    //console.log(col);
    //var ascend = document.getElementById("chksort").value;
    //console.log(ascend);
    class Athlete
    {
        constructor(sortIn, htmlRow)
        {
            this.colSort = sortIn;
            this.row = htmlRow;
        }
    }

    var select = document.getElementById("sports");
    var val = select.options[select.selectedIndex].value;
    var table = document.getElementById(val);
    var sortArr = new Array(0);
    var rowArr = new Array(0);
    var lngthDEBUG = 0;

    //populate array with column
    for(var i = 1; i < rowTot; i++){
        lngthDEBUG = 0;
        for(var j = 2; j < colTot; j++)
        {
            rowArr.push(table.rows[i].cells[j].innerHTML);
            //console.log(table.rows[i].cells[j].innerHTML);
        }
        const player = new Athlete(table.rows[i].cells[col].innerHTML, rowArr.splice(0, rowArr.length));
        lngthDEBUG = sortArr.push(player);
        //console.log(lngthDEBUG);
    }
    /*
    //debug loop
    for(var i = 0; i < rowTot; i++){
        console.log(sortArr[i].colSort);
    }*/
    //sort the array
    if(!isNaN(sortArr[0].colSort))
    {
        sortArr.sort(function(a, b){return a.colSort - b.colSort});
        //console.log("true");
    }
    else
    {
        //console.log("false");
        sortArr.sort(function(a, b){
            /*console.log("a: " + a.colSort);
            console.log("b: " + b.colSort);
            console.log(a.colSort.localeCompare(b.colSort));*/
            return a.colSort.localeCompare(b.colSort)});
    }
    //sort debug
    /*for(var i = 0; i < rowTot; i++){
        console.log(sortArr[i].colSort);
        console.log(sortArr[i].row);
        //THIS OUTPUTS CORRECTLY SORTED LIST
    }*/
    sortArr.reverse();
    //add sorted contents to html table
    for(var i = 1; i < rowTot; i++)
    {
        //console.log(i);
        for(var j = 2; j < colTot; j++)
        {
            table.rows[i].cells[j].innerHTML = sortArr[i-1].row[j-2];
            //console.log("table.rows[i].cells[j].innerHTML: " + table.rows[i].cells[j].innerHTML);
            //console.log("sortArr[i-1].row[j]: " + sortArr[i-1].row[j-2]);
            //console.log(j);
        }
    }
}

function save(){
    var select = document.getElementById("sports");
    var val = select.options[select.selectedIndex].value;
    var table = document.getElementById(val);
    var saveArr = new Array(rowTot);

    for(var i = 0; i < rowTot; i++){
        //populate array
        saveArr[i] = new Array(colTot-2);
        for(var j = 0; j < colTot-2; j++){
            console.log(table.rows[i].cells[j+2].innerHTML);
            saveArr[i][j] = table.rows[i].cells[j+2].innerHTML;
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
    download(url, val + "SportsOrganizerDownload.json");
    //clean up
    URL.revokeObjectURL(url);
}


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
    console.log("OOOOOOOOOOOOOOOOOOOOOOO");
    var btn = document.createElement('button');
    btn.type = "editBtn";
    btn.className = "btn";
    btn.innerHTML= "Edit";
    btn.addEventListener("click", function() { updateRowApp(row.id,tableid); });
    btn.style.textAlign = "center";
    var tdbtn = document.createElement("td");
    tdbtn.appendChild(btn);
    row.appendChild(tdbtn);
    return row;
}


function numValid(currNum){
    age = parseInt(currNum);
    while(isNaN(currNum) || currNum == "" || age < 0 || age > 99){
        currNum = window.prompt("Please enter a valid number between 0 and 99 for the player's age.","");
        age = parseInt(currNum);
    }
    return currNum;
}

var rowTot = 4;
var entryVar = true;

function addRow() {
    "use strict";

    var select = document.getElementById('sports');
    var val = select.options[select.selectedIndex].value;
 
    

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
        if(k == 4 && (val =='basketball'|| val =='football')){
            if(isNaN(td5.innerHTML)){
                window.alert("Please enter a valid number.");
                return;
            }
        }
    }

    for(k = 0; k < rowArray.length; k++){
        rowArray[k].style.textAlign = "center";
    }

    row.id = "row" + val +  "." + rowTot;
    rowTot += 1;

    row = editButton(row,val);
    row = delButton(row,val);

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);

    var int2 = 7;
    var loop = 7;
    var untilLoop = 0;
    switch(val){
        case 'basketball':
            untilLoop = baskInt;
            break;
        case 'baseball':
            untilLoop = baseInt;
            break;
        case 'football':
            untilLoop = footInt;
            break;
    }

    var currCol = 0;
    while(loop < untilLoop){
        var td6 = document.createElement("td");
        // Checks for whether this is the initial submit modal or a newly made as cell id's are different for each
        if(entryVar && loop < 11){
            currCol = "col"+(int2-1) + "in";
        }
        else{
            currCol = val+"."+int2;
        }
        console.log(currCol);
        var rowInfo = document.getElementById(currCol).value;
        if(isNaN(rowInfo) && val == 'baseball' && loop >= 7){
            window.alert('Please enter a valid "' + table.rows[0].cells[loop].innerHTML + '" value.');
            return;
        }
        else if(isNaN(rowInfo) && (val == 'basketball' || val =='football') && (loop >= 6 && loop < 11)){
            window.alert("Please enter a valid number.");
            return;
        }
        else{
            td6.innerHTML = rowInfo;
        }
        td6.style.textAlign = "center";
        
        int2++;
        row.appendChild(td6);
        loop++;
    }

    // Clears all of the values from the submit modal cy going through the intial preset 5 and following cells added later
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("location").value = "";
    document.getElementById("col5in").value = "";
    loop = 7;
    int2 = 7;
    while(loop < untilLoop){
        if(entryVar && loop < 11){
            currCol = "col"+(int2-1) + "in";
        }
        else{
            currCol = val+"."+int2;
        }
        document.getElementById(currCol).value = "";
        loop++;
        int2++;
    }

    table.children[0].appendChild(row);

    var modal= document.getElementById("myModal");
    modal.style.display = "none";

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
        window.alert("Please enter a valid age.");
        return true;
    }
    age = parseInt(currRow.innerHTML);
    if(age < 0 || age >= 100){
        window.alert("Please enter a valid number between 0 and 100 for the player's age.");
        return true;
    }
    return false;
}

var colTot = 11;
console.log("colTot 0:" + colTot);

function addColumn() {
    "use strict";
    console.log("colTot 4:" + colTot);
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
    colHead.style.fontWeight = "bold";
    colHead.className = "cellInsert";
    document.getElementById("addColtxt").value = "";

    for (var i = 1; i < table.rows.length; i++) {
        var temp = table.rows[i].insertCell(-1);
        temp.className = "cellInsert";
        temp.innerHTML = "N/A";
    }
};
