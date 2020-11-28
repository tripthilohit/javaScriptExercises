//Number of characters that need to be deleted to get unrepeated sequence is
//Sorting numbers results will be different - refer:
//https://www.w3schools.com/js/js_array_sort.asp

function noOfCharToDeleteFromSequence(input){
    var arr = input.split('')
    var arr1 = arr.sort()
    var count = 0
    var dupes = []
    
    for(var i=0; i<arr1.length-1; i++){
      if(arr1[i] === arr1[i+1] && !dupes.includes(arr[i+1])){
       count++ 
        dupes.push(arr1[i+1])
      }
    }
    
    console.log("The number of characters to remove "+count)
    console.log(dupes)
  }
  
  noOfCharToDeleteFromSequence('bcdacsbbdd')