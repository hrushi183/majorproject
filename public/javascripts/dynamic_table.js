function sampleUser() {
    alert("hello");
    var table = document.getElementById("userId");
    alert('rajuuuuuu');
    if(order) {
    alert('gopi');
    }
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var a =  order.user[0].username; 
    var b = order.user[0].email;
    var c = order.user[0].mobile;

    cell1.innerHTML = a;
    cell2.innerHTML = b;
    cell3.innerHTML = c;
    
    
}
//window.onload(sampleUser());