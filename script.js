document.getElementById("submit").onclick = function () {
  
    let table = document.getElementById("table");
    let row = table.insertRow(-1);
    let name = row.insertCell(0);
    let email = row.insertCell(1);
  
    name.innerHTML = document.getElementById("name").value;
    email.innerHTML = document.getElementById("email").value;
  
    return false;
  }
