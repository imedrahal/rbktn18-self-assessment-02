// use the following helper functions in your solution
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function map(array, func) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(func(element, i));
  });
  return acc;
}

// Remember to relax :)



//=============================================================================
/*                                  Q1                                       */
//=============================================================================

//Using Map , Write a function that takes an array of strings as a input,and returns an array
//of all of those strings, but transformed to upper case.
//You can use toUpperCase method to convert a string to upper case.
// Note: please write one or two lines here describing your solution.
// var strArr = ['hello', 'world', 'whirled', 'peas'];
// uppercaseAll(strArr); ==> [ 'HELLO', 'WORLD', 'WHIRLED', 'PEAS' ]

function uppercaseAll(arrayOfStrings) {
  return map(arrayOfStrings,function(element,i){
    return element.toUpperCase()
  })

}


//description : i used function  map to loop inside the array. the map function give us an array with the same length just we change the values inside the array. 


//=============================================================================
/*                                  Q2                                       */
//=============================================================================
//Using Filter , write a function that takes array of objects  as an input and returns an array
//with only the countries that have a population higher than 500 million.
//Here’s the data you’ll work with:

var data = [
  {
    country: "China",
    population: 1409517397
  },
  {
    country: "India",
    population: 1339180127
  },
  {
    country: "USA",
    population: 324459463
  },
  {
    country: "Indonesia",
    population: 263991379
  }
];
// highestPopulation(data); ==> [{country: "China", population: 1409517397},{country: "India", population: 1339180127}]
// Note: please write one or two lines here describing your solution.

function highestPopulation(arrayOfObjects) {
  return filter(arrayOfObjects,function (element,i){
    for (var i in element){
      if(element.population>500000){
      return element}
    }
    return element[i]

  })

}


//=============================================================================
/*                              Q3                                           */
//=============================================================================

//Using Map, Write a function halveAll that takes an array of numbers as a input and returns an array
// of all of those numbers halved (divided by two).
// var numsArray = [2, 6, 20, 8, 14];
// halveAll(numsArray); ==> [ 1, 3, 10, 4, 7 ]
// Note: please write one or two lines here describing your solution.

function halveAll(numbers) {
  return map(numbers,function(element){

    return element/2
  })

}
// description; i used the map to loop inside the array and take every value of the array and divided by 2 .

//=============================================================================
/*                                  Q4                                       */
//=============================================================================
//Using Each, write a function called values that accepts an object as a parameter, and outputs an array of the object's values.
// values({first : 5, second: 'something' , third : 129}) ==> [5, 'something', 129];
// Note: please write one or two lines here describing your solution.

function values(obj) {
 var arr=[]
 each(obj,function(obj,key){

 arr.push 
 })

}


//Good Luck :))
