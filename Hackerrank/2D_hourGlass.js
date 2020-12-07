// https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays


function hourGlass(arr){
    var total = -Infinity
    var sum 
    
    for(var i = 0; i < 4; i++){
      sum = -Infinity
      for(var j = 0; j < 4; j++){
        sum = arr[i][j] + arr[i][j+1] +arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] +arr[i+2][j+2]
        if(sum > total)
      total = sum
      }
    }
    return total
  }
  
  console.log(hourGlass([[-9,-9,-9,1,1,1],[0,-9,0,4,3,2],[-9,-9,-9,1,2,3],[0,0,8,6,6,0],[0,0,0 ,-2,0,0],[0,0,1,2,4,0]]))