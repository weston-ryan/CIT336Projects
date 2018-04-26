function Set() {
	
	
	this.intersection = function(listA, listB) {
    
	   var resultList = []; /* create a resultList array */
       
	  if (listA === null || listB === null) { /* check for valid inputs*/
	  	return null; // exit and return null to indicate an error
	  }
       for (var i=0; i < listA.length; i++) {  //for every element in listA
	  	var nextValue = listA[i]; // get next value in the list

		for (var j = 0; j < listB.length; j++) { // for every element in listB
		 if (listB[j] === nextValue) { // this listB element equals nextValue
		 	resultList.push(listB[j]); // add listB element to end of resultList
			 // push adds the current item in j to the end of the result list
			 break;  // break the listB inner loop and exit

		 }

		}
	   }
	   return resultList;
	}
    
    
    
	this.union = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   
	   /*-------------------------------Insert your code here -------------------------------------*/ 
	   
	   return resultList;
	}




	this.relativeComplement = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/
	   	   
	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}



	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];
       
	   /*-------------------------------Insert your code here -------------------------------------*/

	   /*-------------------------------Insert your code here -------------------------------------*/
       
	   return resultList;
	}	
	

}
