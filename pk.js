var list1 =[];
var list2 =[];
var list3 =[];
var list4 =[];

var n = 1;
var x = 0;
function AddRow(){
    var AddRow = document.getElementById('show');
    var NewRow = AddRow.insertRow(n);
    var a,b,c,d;

a = document.getElementById("fname").value;
b = document.getElementById("lname").value;
c = document.getElementById("email").value;
d = document.getElementById("age").value;

var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
var cel4 = NewRow.insertCell(3);

cel1.innerHTML = a;
cel2.innerHTML = b;
cel3.innerHTML = c;
cel4.innerHTML = d;

n++;
x++;

}
