//https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function arrayRotation(arr, rotations){
    var rotatedArr = []
    
    for(var i = rotations ; i < arr.length ; i ++){
     rotatedArr.push(arr[i]) 
    }
    
    for(var i = 0; i < rotations ;i++){
     rotatedArr.push(arr[i]) 
    }
    
    console.log(rotatedArr)
  }
  
  arrayRotation([1,2,3,4,5],3)