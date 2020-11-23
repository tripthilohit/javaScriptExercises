// Link: https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/
// Given an array of integers nums and an integer threshold, we will choose a positive integer divisor and divide all the array by it and sum the result of the division. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

// Each result of division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

// It is guaranteed that there will be an answer.

 

// Example 1:

// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
// If the divisor is 4 we can get a sum to 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2). 

function smallestDivisorWithThreshold(array,threshold){
    var divisor = 1
    
    do{
        var newArr = []
        for(var i=0; i<array.length; i++) {
         var num = 0
            if(array[i]%divisor!=0)
                num = 1
                num += Math.trunc(array[i]/divisor)
                newArr.push(num) 
            }
       var sum = 0
       for(var j=0; j<newArr.length; j++){
        sum += newArr[j]
       }

       if(sum <=threshold){
           console.log("here"+divisor)
           break
       }
       else
       divisor++
    }while(divisor<=threshold)

console.log("New array is"+ newArr)
console.log("The divisor is "+divisor)

}

smallestDivisorWithThreshold([2,3,5,7,11], 11)