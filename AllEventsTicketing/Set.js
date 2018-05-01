function Set() {
	
//Intersection
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
    
    				// I used stack overflow and Khan Academy to figure this out.
//Union

	this.union = function(listA, listB) {

	   var resultList = [];

        if (listA === null || listB === null) { /* check for valid inputs*/
            return null; // exit and return null to indicate an error


        //get the symmetric difference of listA and ListB
		//append the returned elements to the result set
       for (var i = listA.length-1; i >= 0; --1)
       	resultList [listA[i]] = listA[i];

       for (var i = listB.length-1; i >= 0; -- i)
       	obj[listB[i]] = listB[i];

            var a = this.concat();
            for(var i=0; i<a.length; ++i) {
                for(var j=i+1; j<a.length; ++j) {
                    if(a[i] === a[j])
                        a.splice(j--, 1);
                }
            }

	   return resultList;  //return the result
	}



//Relative

	this.relativeComplement = function(listA, listB) {

	   var resultList = [];

        if (listA === null || listB === null) { /* check for valid inputs*/
            return null; // exit and return null to indicate an error

        //select everything in listA but not in listB  or  A \ B
		// a - b = {}
            for (var i = 0; i < listA.length; i++) {  //for every element in listA
                var nextValue = listA[i]; // get next value in the list
            }

            for( var i = 0; i < listB.length; i++) {
            break;}
        }


	   return resultList;
	}



//Symmetric

	this.symmetricDifference = function(listA, listB) {

        var resultList = [];

        for (var i = 0; i < listA.length; i++) {  //for every element in listA
            var nextValue = listA[i]; // get next value in the list


            for (var j = 0; j < listB.length; j++) { // for every element in listB

                if (listB[j] === nextValue) { // this listB element equals nextValue
                    break;//if listA if found in listB then break.

					if (listB[j]!== nextValue) {
                        resultList.push(listA[j]); // add listB element to end of resultList
                                                   // push adds the current item in j to the end of the result list
                        break;  // break the listB inner loop and exit

                    }
                    resultList = ListA.concat(listB);
                }
        }
	   return resultList;  //return the results
	}


}
