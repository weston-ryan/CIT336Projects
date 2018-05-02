function Set() {

//Intersection
    this.intersection = function (listA, listB) {

        var resultList = [];
        /* create a resultList array */

        if (listA === null || listB === null) { /* check for valid inputs*/
            return null; // exit and return null to indicate an error
        }
        for (var i = 0; i < listA.length; i++) {  //for every element in listA
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

    this.union = function (listA, listB) {

        var resultList = [];

        for (var i = 0; i < listA.length; i++) {  //set the element in listA (i) to start at 0, if it is less than the list length, continue.
            var nextValue = listA[i]; // assign the listA item [i] to nextValue
            var found = false; //if an item is found set it to false and continue to the next step

            for (var j = 0; j < listB.length; j++) { // for every element in listB,  If the element is less than the list length continue

                if (listB[j] === nextValue) { // if the listB item [j] is an equal value and type to nextValue[i], then it is true.
                    found = true;


                    break;//if listA if found in listB then break.
                }
            }
            if (found === false) {  //  if [j] was found true, set found to false and push to the result list.

                resultList.push(nextValue);  // create a list and push the found items(nextValue) to the resultList at the end.
            }

        }
        return resultList;  //return the results
    }




//Relative

    this.relativeComplement = function (listA, listB) {

        var resultList = [];


            for (var i = 0; i < listA.length; i++) {  //for every element in listA, If the element is less than the list length continue
                var nextValue = listA[i]; // assign the listA item [i] to nextValue
                var found = false; //if an item is found set it to false and continue to the next step

                for (var j = 0; j < listB.length; j++) { // for every element in listB,  If the element is less than the list length continue

                    if (listB[j] === nextValue) { // if the listB item [j] is an equal value and type to nextValue[i], then it is true.
                        found = true;

                        break;//if listA if found in listB then break.
                    }


                }
                if (found === false) {  //  if [j] was found true, set found to false and push to the result list.

                    resultList.push(nextValue);  // create a list and push the found items(nextValue) to the resultList at the end.
                }

            }
            return resultList;  //return the results
        }


//Symmetric

    this.symmetricDifference = function (listA, listB) {

        var resultList = [];

        for (var i = 0; i < listA.length; i++) {  //for every element in listA, If the element is less than the list length continue
            var nextValue = listA[i]; // assign the listA item [i] to nextValue
            var found = false; //if an item is found set it to false and continue to the next step

            for (var j = 0; j < listB.length; j++) { // for every element in listB,  If the element is less than the list length continue

                if (listB[j] === nextValue) { // if the listB item [j] is an equal value and type to nextValue[i], then it is true.
                    found = true;

                    break;//if listA if found in listB then break.
                }


            }
            if (found === false) {  //  if [j] was found true, set found to false and push to the result list.

                resultList.push(nextValue);  // create a list and push the found items(nextValue) to the resultList at the end.
            }

        }
        return resultList;  //return the results
    }


}
