var ele = document.getElementById("cartValue");
var totalcost = localStorage.getItem("cartValue");
var totalQuantity = localStorage.getItem("cartNumbers");
var ele2 = document.getElementById("cartQuantity");

var price = ele2;
var x = "TOTAL Amount      =";

if (!totalcost) {
  totalcost = 0;
}
if (!totalQuantity) {
  totalQuantity = 0;
}
console.log(totalcost)

ele.innerText = totalcost;
ele2.innerText = totalQuantity;
function applycupan()
{
var code = document.getElementById("BTN1").value;
debugger;
if(code === "masai30")
{
   totalcost = totalcost - ((totalcost/100)*30);
   ele.innerText = totalcost;

} 
}




