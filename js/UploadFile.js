//alot of this came from 
//Get form and file field
let form = document.querySelector('#upload');
let file = document.querySelector('#file');
var select = document.getElementById('sports');
var val = select.options[select.selectedIndex].value;
var table = document.getElementById(val);
var colNum = 0;

/**
 * Log the uploaded file to the console
 * @param {event} Event The file loaded event
 */
function logFile (event) {
    let str = event.target.result;
    const jsonArr = JSON.parse(str);
    //let json = JSON.parse(str);
    //console.log('string', str);
    //console.log('json', myArray);
    
    if(rowTot > 4 || colTot > 11){
        alert("Please Upload your data before adding to the default table.\nThank you!");
        return;
    }

    for(var i = 0; i < jsonArr.length; i++)
    {
        if(i >= rowTot){
            var row = document.createElement("tr");
            row.id = "row" + val +  "." + i;
            row = editButton(row,val);
            row = delButton(row,val);
        }
        for(var j = 2; j < jsonArr[i].length+2; j++){
            console.log(jsonArr[i].length+2);
            console.log(j);
            if(j >= colTot && i == 0) {
                var colHead = table.rows[0].insertCell(-1);
                colHead.style.fontWeight = "bold";
                colHead.className = "cellInsert";
                colHead.innerHTML = jsonArr[i][j-2];
                continue;
            }
            if(j >= colTot && i <= 3){
                var temp = table.rows[i].insertCell(-1);
                temp.className = "cellInsert";
                temp.style.textAlign = "center"
                temp.innerHTML = jsonArr[i][j-2];
            }
            else if(j >= colTot){
                var td1 = document.createElement("td");
                td1.style.textAlign = "center"
                td1.innerHTML = jsonArr[i][j-2];
                row.appendChild(td1);
            }
            else if(i >= rowTot){
                //addRow();
                var td1 = document.createElement("td");
                td1.style.textAlign = "center"
                td1.innerHTML = jsonArr[i][j-2];
                row.appendChild(td1);
            }
            else{
                table.rows[i].cells[j].innerHTML = jsonArr[i][j-2];
                console.log(jsonArr[i][j-2]);
            }
        }
        if(i >= rowTot){
            table.children[0].appendChild(row);
        }

    }
    alert("Upload Completed.");
    afterUpload(jsonArr);
}

function afterUpload(jsonArr){
    colNum = jsonArr[0].length+2;
    baseInt = colNum;
    baskInt = colNum;
    footInt = colNum;
    colTot = colNum;
    rowTot = jsonArr.length;
    var activities = document.getElementById('sports');
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
    entryVar = false;
}

/**
 * Handle submit events
 * @param  {Event} event The event object
 */
function handleSubmit (event) {

    // Stop the form from reloading the page
    event.preventDefault();

    // If there's no file, do nothing
    if (!file.value.length) return;

    // Create a new FileReader() object
    let reader = new FileReader();

    // Setup the callback event to run when the file is read
    reader.onload = logFile;

    // Read the file
    reader.readAsText(file.files[0]);

}

// Listen for submit events
form.addEventListener('submit', handleSubmit);