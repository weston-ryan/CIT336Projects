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
    
    				// I used stack overflow and Khan Academy to figure this out.
//Union

	this.union = function(listA, listB) {

	   var resultList = [];


        //get the symmetric difference of listA and ListB
		//append the returned elements to the result set
       for (var i = listA.length-1; i >= 0; --1)
       	resultList [listA[i]] = listA[i];

       for (var i = listB.length-1; i >= 0; -- i)
       	obj[listB[i]] = listB[i];

       for (var k in resultList) {
       	if (resultList.hasOwnProperty(k))
       		resultList.push(obj[k]);
	   }

		//get the intersection of listA and listB
		//append the returned elements to the result set

	   return resultList;  //return the result
	}



//Relative

	this.relativeComplement = function(listA, listB) {

	   var resultList = [];

	Comparison = (listA, listB) => listA.id !== listB.id,
		resultList = listB.filter(listB => listA.every(listA => comparison(listA, listB)));


        //select everything in listA but not in listB  or  A \ B
		// a - b = {}

		//select everything in listB but not in listA
           comparison = (listA, ListB) => listB.id !== listA.id,
			   resultList = listA.filter(listA => listB.every(listB => comparison(listA,listB)));

	   return resultList;
	}


//Symmetric

	this.symmetricDifference = function(listA, listB) {

	   var resultList = [];


        var name;
        var index = {};
        for(var i in arguments){
            name = arguments[i];

            for(var j = 0; j < name.length; j++){
                arr.push(name[j]);
            }
        }

        arr.forEach(function(a){
            if(!index[a]){
                index[a] = 0;
            }
            index[a]++;

        });

        for(var l in index){
            if(index[l] === 1){
                resultList.push(+l);
            }
        }
        //Get the relativeCompliment of ListA and ListB
		//copy returned elements to end of the resultList

		//Get the relativeCompliment of SetB and SetA
		//Copy returned elements to end of resultList

	   return resultList;  //return the results
	}


}
