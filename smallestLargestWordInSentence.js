//Largest and smallest word in a sentence


function smallestLargestWordInSentence(input){
    var arr = input.split(' ')
    var small = arr[0]
    var large = arr[0]
    
    for(var i =1; i<arr.length; i++){
     if(arr[i].length < small.length){
      small = arr[i] 
     }
      else if(arr[i].length > large.length){
       large = arr[i] 
      }
    }
    
    console.log("The smallest word in the sentence is: "+small)
    console.log("The largest word in the sentence is: "+large)
    
  }
  
  smallestLargestWordInSentence('My name is Tripthi')