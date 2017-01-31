 // Ex-12 where() – ADVENTURE MODE

 // Write a function where() that takes two inputs, a list of objects and
 // a properties object. It should return a new list containing only those
 // objects that meet the key-value conditions in the properties object.



// INPUT: arrOfObjects & a criteria object for valid props/values
// OUTPUT: arrOfObjects - filtered set

var where = function(arrOfObjects, criteriaObj) {
  var filteredListOfObjects = [];

  for (var i = 0; i < arrOfObjects.length; i++) {
    // console.log(arrOfObjects[i]);
    var singleObject = arrOfObjects[i];
    var objectMatchesAllCriteria = true;
    // need to see if objects match but we don't know what kind of criteria obj we're going to get.  so we need to iterate over each criteria obj with a for-in loop.

    for(var propStr in criteriaObj) {
    // looking to see if each prop/value is equiv to what's in the arrOfObjects

      if (criteriaObj[propStr] !== singleObject[propStr]) {
        objectMatchesAllCriteria = false;
        // iterating over each prop/value & each element on the list to evaluate the value for a givin property inside of the for-in loop. on each property, checking value. if value of property is NOT equal to the value of the property in the singleObject, then we know the current singleObject does NOT match all the criteria.
      }
    }
    if (objectMatchesAllCriteria) {
      filteredListOfObjects.push(singleObject);
      // by end of for loop if the obj still matches all the criteria then PUSH object to output filtered list.
    }

  }
  return filteredListOfObjects;
}


//*~*~*-*~*~*~*~*~ Don't Touch *~*~*~*~*~*~*~*~*~*~*~

 var plays = [
     { title: "Cymbeline", author: "Shakespeare", year: 1623 },
     { title: "The Tempest", author: "Shakespeare", year: 1623 },
     { title: "Hamlet", author: "Shakespeare", year: 1603 },
     { title: "1984", author: "George Orwell", year: 1949 },
     { title: "A Midsummer Night's Dream", author: "Shakespeare", year: 1600 },
     { title: "Macbeth", author: "Shakespeare", year: 1620 },
     { title: "Death of a Salesman", author: "Arthur Miller", year: 1949 },
     { title: "Two Blind Mice", author: "Samuel and Bella Spewack", year: 1949 }
 ]

 var sh8sprQuery = where(plays, {author: "Shakespeare"})
 console.assert( sh8sprQuery instanceof Array )
 console.assert( sh8sprQuery.length === 5 )
 console.assert( sh8sprQuery[0]['title'] === "Cymbeline" )


 var sh8sprQuery2 = where(plays, {author: "Shakespeare", year: 1611})
 console.assert( sh8sprQuery2.length === 0 )


 var sh8sprQuery3 = where(plays, {author: "Shakespeare", year: 1623})
 console.assert( sh8sprQuery3.length === 2 )


 var midCentPlays = where(plays, {year: 1949})
 console.assert( midCentPlays.length === 3 )
