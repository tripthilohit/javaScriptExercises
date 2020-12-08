//check if it is possible to permute a string to palindrome

function countcharOccurance(str){
    let charMap = new Map()
    const count = 0
    for(const key of str){
     charMap.set(key, count) 
    }
    
    for(const key of str){
     let count = charMap.get(key)
     charMap.set(key, count+1)
    }
    
    var odd = 0
    for(var [key,value] of charMap){
      if(charMap.get(key) % 2 != 0)
      odd++   
    }
    
    if(odd > 1)
      console.log("No, the word cannot be a palindrome")
    else
      console.log("Yes, the word can be a palindrome")
    
  }
  
  
  countcharOccurance('eellssyyyyy')