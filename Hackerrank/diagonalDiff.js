// https://www.hackerrank.com/challenges/diagonal-difference/problem

function diagonalDifference(arr) {
  var lSum = 0, rSum = 0
  var j = arr.length - 1
for(var i = 0; i<arr.length; i++){
    lSum += arr[i][i];
    rSum += arr[i][j]
    j --
}  

return Math.abs(lSum - rSum);
}


    console.log(diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]))
