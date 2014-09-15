$(document).ready(function(){
		
			
	//Take input and adds it to the list
	$("#itemAdd").on("click", function(){
		//gets user input
		var itemEntered = document.getElementById("itemInput").value;
		//gets user quantity 
		var userQuant = document.getElementById("itemQuant").value;
		//holds the html and style for each list item
		var listItem = '<li class="items">'
					+ '<div class="tickCross">'
					+	'<div id ="check_Item" class="icon-checkmark-circle"></div>'
					+	'<div id ="clear_Item" class="icon-cancel-circle"></div>'
				+	'</div>'
				+	'<div class="itemAddedContain">'
					+	'<p class="itemAdded">'+ itemEntered + "            x  " + userQuant +'</p>'
				+	'</div>'
				+	'<div class="gotIt">'
				+		'<span>Got It</span>'
				+	'</div>'
		//Appends list item on click
		$("#list").prepend(listItem);
		//clear input area after item added
		$("#itemInput").val("");	
		//reset the quantity input back to one 
		$("#itemQuant").val("1");
	});//end of function that adds item to the list

	//Clear the whole list
	$("#removeAll").on("click", function(){
		$("#list").empty();
	});

	//Put a strikethrough the item and add got it tag
	$("#list").on("click", "#check_Item", function(){
		$(this).closest(".items").find("p").addClass("strikeItem"); 
		$(this).closest(".items").find(".gotIt").show();
	});

	//clear the individual item from the list
	$("#list").on("click", "#clear_Item", function(){
		$(this).closest(".items").remove();
	});
	
 });//end of doc ready

	 


//Create a counter to add quantity
	function quantCount(val){
		//retrives the current quantity
		var qty = document.getElementById("itemQuant").value;
		//takes the current quantity makes it a number and adds the val 
		var newQty = parseInt(qty, 10) + val;
		//Makes sure the amount is never below 1
		if(newQty < 1){
			newQty = 1;
		}
	//make the input area equal the new quantity
	document.getElementById("itemQuant").value = newQty;
	//make the function return the new quantity
	return newQty;
	} //end of count func

	

	
	
		


