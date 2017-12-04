var btnCal = document.getElementById("calculate");
var btnRes = document.getElementById("reset");
var table = document.getElementById("table");
var menu = document.getElementById("menu").getElementsByClassName("btn");
var frequency = "";

menu[0].addEventListener("click", monthLy);
menu[1].addEventListener("click", annually);

btnCal.addEventListener("click", compute);
btnRes.addEventListener("click", reset)

function monthLy(){
	frequency = "month";
}

function annually(){
	frequency = "year";
}


function getFrequency(){
	console.log(frequency);
	
}

function compute(){
	var error = "";
	var Amount = document.getElementById("InputAmount").value;
	var interestRate = document.getElementById("InterestRate").value;
	var n= document.getElementById("NumberOfPayment").value;
	if(frequency === 'month'){
		if(isNaN(Amount) || Amount <= 0 || isNaN(interestRate) || interestRate <= 0 || isNaN(n) || n <= 0){
			document.getElementById("error").style.display = "block";
			error = "one of the input is not valid";
			var errorHandler = document.getElementById("error");
			errorHandler.innerHTML = error;
		}else{
			document.getElementById("error").style.display = "none";
			var r = ((interestRate/100)/12);
			var r1 = 1+r;
			//payment
			var payment  = (((r*Amount)*(Math.pow(r1,n)))/(Math.pow(r1,n)-1)).toFixed(2); 
	        //variables
			var beginingBalance = Amount;
			var interest = (beginingBalance * r).toFixed(2);
			var principal = (payment - interest).toFixed(2);
			var endingBalance = (beginingBalance - principal).toFixed(2);
	        //calculation
	        monthCalc(n, r, payment, beginingBalance, interest, principal, endingBalance);
	        table.style.display = "block";	
	    }
	}else if(frequency === 'year'){
		document.getElementById("error").style.display = "none";
		var r = ((interestRate/100));
		var r1 = 1+r;
		//payment
		var payment  = (((r*Amount)*(Math.pow(r1,n)))/(Math.pow(r1,n)-1)).toFixed(2); 
        //variables
		var beginingBalance = Amount;
		var interest = (beginingBalance * r).toFixed(2);
		var principal = (payment - interest).toFixed(2);
		var endingBalance = (beginingBalance - principal).toFixed(2);
		//year calculation
		yearCalc(n, r, payment, beginingBalance, interest, principal, endingBalance);
		table.style.display = "block";	
	}else{
		alert("frequency of payment must be selected");
	}
	
}

function yearCalc(n, r, payment, beginingBalance, interest, principal, endingBalance){
	var mytable = document.getElementById("tb");

        var rowCount = mytable.rows.length;
        var row = mytable.insertRow(rowCount);
        for(j = 0; j < n; j++){
        	var tr = document.createElement("tr");
        	var period = j+1;
	        for(i = 1; i <= 6; i++) {
	        	var td = document.createElement("td");
	        	mytable.appendChild(tr);
	        	var cell = "";
	        	if(i === 1){
	        		cell = document.createTextNode(period);
	        	}else if(i === 2){
	        		cell = document.createTextNode(beginingBalance);
	        	}else if(i === 3){
	        		cell = document.createTextNode(payment);
	        	}else if(i === 4){
	        		cell = document.createTextNode(principal);
	        	}else if(i === 5){
	        		cell = document.createTextNode(interest);
	        	}else if(i === 6){
	        		cell = document.createTextNode(endingBalance);
	        	}
	        	
	        	td.appendChild(cell);
	        	tr.appendChild(td);
	        }
	        //computations 
	        beginingBalance = endingBalance;
	        interest = (beginingBalance * r).toFixed(2);
	        principal = (payment - interest).toFixed(2);
	        endingBalance = (beginingBalance - principal).toFixed(2);
	        if(endingBalance < 1){
	        	endingBalance = 0.00;
	        }

	      mytable.appendChild(tr);
	        
	    }
}

function monthCalc(n, r, payment, beginingBalance, interest, principal, endingBalance){
	var mytable = document.getElementById("tb");

        var rowCount = mytable.rows.length;
        var row = mytable.insertRow(rowCount);
        for(j = 0; j < n; j++){
        	var tr = document.createElement("tr");
        	var period = j+1;
	        for(i = 1; i <= 6; i++) {
	        	var td = document.createElement("td");
	        	mytable.appendChild(tr);
	        	var cell = "";
	        	if(i === 1){
	        		cell = document.createTextNode(period);
	        	}else if(i === 2){
	        		cell = document.createTextNode(beginingBalance);
	        	}else if(i === 3){
	        		cell = document.createTextNode(payment);
	        	}else if(i === 4){
	        		cell = document.createTextNode(principal);
	        	}else if(i === 5){
	        		cell = document.createTextNode(interest);
	        	}else if(i === 6){
	        		cell = document.createTextNode(endingBalance);
	        	}
	        	
	        	td.appendChild(cell);
	        	tr.appendChild(td);
	        }
	        //computations 
	        beginingBalance = endingBalance;
	        interest = (beginingBalance * r).toFixed(2);
	        principal = (payment - interest).toFixed(2);
	        endingBalance = (beginingBalance - principal).toFixed(2);
	        if(endingBalance < 1){
	        	endingBalance = 0.00;
	        }

	      mytable.appendChild(tr);
	        
	    }
	    
}

function reset(){
	window.location.reload();	
}  