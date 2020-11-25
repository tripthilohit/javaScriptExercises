const _ = require('lodash');

function removeDupesFromArray(inputArr){
  inputArr.sort()
  var newArr = []
  
  newArr.push(inputArr[0])
  for(var i =0 ; i<inputArr.length; i++){
    if(inputArr[i] != inputArr[i+1]){
      newArr.push(inputArr[i+1])
    }
   }
    
  console.log("New Arr is " + newArr)
}

removeDupesFromArray([10,20,10,76, 45,67,67,10])