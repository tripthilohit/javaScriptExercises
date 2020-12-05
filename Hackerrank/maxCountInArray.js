//Count of maximum number in an array

function maxCountInArray(arr){
    var count = 1
    
    arr.sort()
    
    for(var i = arr.length - 1; i >= 1; i--){
      if(arr[i] === arr[i-1]){
       count ++ 
      }
      else
        break
    }
    
    return count
  }
  
  console.log(maxCountInArray([3,2,3,3,3]))