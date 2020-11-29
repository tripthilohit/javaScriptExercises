// Maximun diff between elements is :
function maxDifferenceMethod1(arr){
    arr.sort(function(a,b){ return a - b})
    
    console.log("Max differnece is by method 1 "+(arr[arr.length - 1] - arr[0]))
  
  }
  
  function maxDifferenceMethod2(arr){
    
    var max = 0
    for(var i = 0; i < arr.length-1; i++){
      var diff = 0;
      diff = Math.abs(arr[i] - arr[i+1])
      
      if(diff > max)
        max = diff
    }
    
     console.log("Max differnece is by method 2 "+max)
  }
  
  maxDifferenceMethod1([12, 34, 2, 29])
  maxDifferenceMethod2([12, 38, 2, 29])