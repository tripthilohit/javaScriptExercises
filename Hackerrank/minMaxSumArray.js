// return min and max sum of n-1 numbers
function minMaxSum(arr){
    var output = []
    var min = 0 , max = 0
    
    arr.sort()
    
    for(var i = 0; i < arr.length; i++){
     if(i >= 1)
       max += arr[i]
      if(i < arr.length -1)
        min += arr[i]
    }
    
    output.push(min)
    output.push(max)
    
    console.log(output.join(' '))
  }
  
  minMaxSum([1,2,3,4,5])