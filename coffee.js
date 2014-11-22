var coffee = function() {
	var brand = "Maxwell House";
	var reg = new RegExp(/\ d + /);

	return {
		"setBrandName": function(newValue) {
			if(reg.test(newValue)) {
				alert("Invalid brand");
			}
			else {
				brand = newValue;
			}
		}
		"getBrandName": function() {
			return brand;
		}
	}; //end of the return
}();

alert(coffee.getBrandName()); //Prints Maxwell House
coffee.setBrandName("Fogers");
alert(coffee.getBrandName()); //Prints Fogers
coffee.setBrandName(42); //Invalid input
coffee.brand = 42; // Does not print out setBrandName
alert(coffee.getBrandName()); //Prints Fogers again