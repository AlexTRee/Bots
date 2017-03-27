// Author: Tiange Cui

var time = "best_available";
var amount = 4;

function addToCart() {
	var timesList=document.getElementsByName("pricegroup")[0];
	function setQuantity() {
		document.getElementsByName("best_available=best_available")[0].selectedIndex = amount-1;
	}
	function setTimeValue() {
		for (var i=0; i<timesList.length; i++){
			if(timesList.options[i].text == time) {
				document.getElementsByName("pricegroup")[0].selectedIndex = i;
				setQuantity();
			}
		}
	}
	if(timesList != undefined) {
	    setTimeValue();
	    document.getElementById("lock_by_pg_continue_btn2").click();
	} else {
	    setTimeout("addToCart()", 5);
	}
}
setTimeout("addToCart()", 5);
