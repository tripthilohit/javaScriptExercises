/*
 Given an array of integers, find and print the maximum number of integers you can select from the array such that the absolute difference between any two of the chosen integers is less than or equal to 1.

For example, if your array is a = [1, 1, 2, 2, 4, 4, 5, 5, 5], you can create two subarrays meeting the criterion: [1, 1, 2, 2] and [4, 4, 5, 5, 5]. The maximum length subarray has 5 elements.
 */

//Refer two dimensional definition - https://stackoverflow.com/questions/11345954/push-a-two-dimensional-array

function absoluteDiff(arr){
    arr.sort()
   var resArr = []
   var max = 0
    var count
   
    for(var i=0; i<arr.length; i++){
     resArr.push([]) 
    }
    
    for(var j=0; j<arr.length; j++){
      count = 0
     for(var k=0; k<arr.length; k++){
      if(Math.abs(arr[k] - arr[j]) <= 1){
       resArr[j].push(arr[k])
        count++
      }
     }
      if(count > max)
        max = count
    }
    
    console.log(resArr)
    return max
  }
  
  
  console.log("Result "+absoluteDiff([1, 1, 2, 2, 4, 4, 5, 5, 5]))