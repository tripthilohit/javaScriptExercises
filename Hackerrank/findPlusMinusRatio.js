// find ratio of positive, negative and zero in an array
function findPlusMinusRatio(arr){
    var posRatio = 0, negRatio = 0, zeroRatio = 0
    
    for(var i = 0; i < arr.length; i++){
     if(arr[i] > 0){
      posRatio += 1 
     }
      else if(arr[i] < 0){
       negRatio += 1 
      }
      else
        zeroRatio += 1
    }
    
    console.log("Positive ratio is "+ posRatio/arr.length)
    console.log("Positive ratio is "+ negRatio/arr.length)
    console.log("Positive ratio is "+ zeroRatio/arr.length)
    
  }
  
  findPlusMinusRatio([-4, 3 ,-9 ,0, 4 ,1])