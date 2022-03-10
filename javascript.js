function updateSport() {
    var sportddl = document.getElementById("sports");
    var sport = sportddl.options[sportddl.selectedIndex].text;

    alert(sport + " has been selected!");
}

function updateTeam() {
    var teamddl = document.getElementById("teams");
    var team = teamddl.options[teamddl.selectedIndex].text;

    alert(team + " has been selected!");
}

function addRow() {
    "use strict";
 
    var table = document.getElementById("players");
    var row = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");  
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");  
 
    td1.innerHTML  = document.getElementById("fname").value;
    document.getElementById("fname").value = "";
    td2.innerHTML  = document.getElementById("lname").value;
    document.getElementById("lname").value = "";
    td3.innerHTML  = document.getElementById("age").value;
    document.getElementById("age").value = "";
    td4.innerHTML  = document.getElementById("location").value;
    document.getElementById("location").value = "";
    td5.innerHTML  = document.getElementById("position").value;
    document.getElementById("position").value = "";

    td1.style.textAlign = "center";
    td2.style.textAlign = "center";
    td3.style.textAlign = "center";
    td4.style.textAlign = "center";
    td5.style.textAlign = "center";

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
    td1.style.textAlign = "center";
    table.children[0].appendChild(row);
};

function darkModeFunc() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}