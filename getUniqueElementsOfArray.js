// Get an array that has only unique elements
const _ = require('lodash');

function removeDupesFromArray(inputArr){
  var newArr = []
  var dupes = []
  var flag
  for(var i =0 ; i<inputArr.length-1; i++){
    flag = true
   for(var j=i+1;  j<inputArr.length; j++){
    if(inputArr[i] === inputArr[j] || dupes.includes(inputArr[i])){
      flag = false
      dupes.push(inputArr[i])
      break
    }
   }
    if(flag){
     newArr.push(inputArr[i]) 
    }
  }
  console.log("New Arr is " + newArr)
  console.log("New Arr is " + dupes)
}

removeDupesFromArray([10,20,10,45,67,67,10])