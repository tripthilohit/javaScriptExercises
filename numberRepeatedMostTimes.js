// Find the number that is repeated most number of times in an array
function numberRepeatedMostTimes(input){
    var arr = input.toString().split('')
    var countArr = []
    var j=0
    var count, max = 0
    do{
      count =0 
        for(var i=0;i<arr.length;i++){
          if(arr[j]===arr[i]){
              count++ 
             }    
          }
      countArr.push(count)
      if(count>max)
        max = count
      j++
    }while(j<arr.length)
    
    var index = countArr.indexOf(max)
    return arr[index]
    
  }
  
  
  console.log("The number repeated the most no. of times "+ numberRepeatedMostTimes(1234451111114))